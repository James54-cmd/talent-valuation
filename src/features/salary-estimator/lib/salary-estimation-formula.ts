import {
  companyTypeAdjustments,
  createBenchmarkRecord,
  defaultSources,
  getBenefits,
  getFieldLabel,
  getRoleProfile,
  industryAdjustments,
  locationAdjustments,
  peerRoleSets,
  regionalBenchmarks,
  workSetupAdjustments,
  experienceAdjustments,
} from "@/features/salary-estimator/lib/salary-benchmark-catalog";
import type { SalaryEstimate, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

function roundToNearestHundred(value: number) {
  return Math.round(value / 100) * 100;
}

function formatDelta(value: number) {
  if (value === 0) {
    return "0%";
  }

  const prefix = value > 0 ? "+" : "";
  return `${prefix}${Math.round((value / 1000) * 1.6)}%`;
}

function formatPesoCompact(value: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(value);
}

function getToneFromImpact(value: number) {
  if (value >= 12000) {
    return "primary" as const;
  }

  if (value >= 4000) {
    return "accent" as const;
  }

  return "muted" as const;
}

function calculateSkillAdjustment(skills: string[]) {
  const includedSkills = Math.min(skills.length, 4);
  return Math.max(0, includedSkills - 1) * 1500;
}

function calculateAnnualBonus(baseSalary: number, form: SalaryFormState) {
  if (form.companyType === "mnc") {
    return roundToNearestHundred(baseSalary * 1.2);
  }

  if (form.industry === "finance") {
    return roundToNearestHundred(baseSalary);
  }

  return roundToNearestHundred(baseSalary * 0.45);
}

function calculateMonthlyAllowances(form: SalaryFormState) {
  if (form.industry === "bpo") {
    return 2500;
  }

  if (form.workSetup === "remote-ph" || form.workSetup === "remote-intl") {
    return 3500;
  }

  return 2000;
}

export function createSalaryEstimate(form: SalaryFormState): SalaryEstimate {
  const benchmark = createBenchmarkRecord(form);
  const role = getRoleProfile(form.title);
  const skillAdjustment = calculateSkillAdjustment(form.skills);
  const experienceAdjustment = experienceAdjustments[form.experience]?.amount ?? 0;
  const locationAdjustment = locationAdjustments[form.location]?.amount ?? 0;
  const industryAdjustment = industryAdjustments[form.industry]?.amount ?? 0;
  const workSetupAdjustment = workSetupAdjustments[form.workSetup]?.amount ?? 0;
  const companyTypeAdjustment = companyTypeAdjustments[form.companyType]?.amount ?? 0;

  const baseSalary = roundToNearestHundred(
    benchmark.benchmarkMonthlyGross +
      skillAdjustment +
      experienceAdjustment +
      locationAdjustment +
      industryAdjustment +
      workSetupAdjustment +
      companyTypeAdjustment,
  );

  const lowerBound = roundToNearestHundred(baseSalary * 0.87);
  const upperBound = roundToNearestHundred(baseSalary * 1.14);
  const annualizedBase = baseSalary * 12;
  const thirteenthMonthPay = baseSalary;
  const annualBonus = calculateAnnualBonus(baseSalary, form);
  const monthlyAllowances = calculateMonthlyAllowances(form);
  const annualizedWithThirteenthMonth = annualizedBase + thirteenthMonthPay;
  const annualizedTotal = annualizedWithThirteenthMonth + annualBonus + monthlyAllowances * 12;

  const sourceCoverageBonus = Math.min(6, Math.floor(defaultSources.length / 2));
  const skillSpecificityBonus = Math.min(5, form.skills.length);
  const remoteIntlBonus = form.workSetup === "remote-intl" ? 2 : 0;
  const confidence = Math.min(95, 78 + sourceCoverageBonus + skillSpecificityBonus + remoteIntlBonus);

  const locationBenchmark = regionalBenchmarks[form.location] ?? 1;
  const regionalComparisonBase = roundToNearestHundred(baseSalary / locationBenchmark);
  const comparisonLabel =
    baseSalary >= regionalComparisonBase + 5000 ? "Above the typical local midpoint" : "Within the expected local range";
  const regionalComparison =
    form.location === "metro-manila"
      ? "Metro Manila remains the highest-paying local benchmark for most private-sector roles."
      : `${getFieldLabel("location", form.location)} usually benchmarks below Metro Manila for similar roles.`;
  const peerRoles = peerRoleSets[form.title] ?? peerRoleSets["software-engineer"];

  const drivers = [
    { label: `Location (${getFieldLabel("location", form.location)})`, value: locationAdjustment },
    { label: `Experience (${getFieldLabel("experience", form.experience)})`, value: experienceAdjustment },
    { label: `Work setup (${getFieldLabel("workSetup", form.workSetup)})`, value: workSetupAdjustment },
    { label: `Company type (${getFieldLabel("companyType", form.companyType)})`, value: companyTypeAdjustment },
    { label: `Industry (${getFieldLabel("industry", form.industry)})`, value: industryAdjustment },
  ].map((driver) => ({
    label: driver.label,
    impactLabel: formatDelta(driver.value),
    strength: Math.max(16, Math.min(95, Math.round(Math.abs(driver.value) / 250))),
    tone: getToneFromImpact(Math.abs(driver.value)),
  }));

  const compensation = [
    { label: "Monthly salary (gross)", amount: formatPesoCompact(baseSalary), detail: "Primary market salary estimate shown monthly." },
    { label: "13th month pay", amount: formatPesoCompact(thirteenthMonthPay), detail: "Mandatory Philippine 13th month equivalent to one month of base pay." },
    { label: "Estimated annual bonus", amount: formatPesoCompact(annualBonus), detail: "Varies more by company type and industry." },
    { label: "Monthly allowances", amount: formatPesoCompact(monthlyAllowances), detail: "Transport, rice, internet, or shift-related allowances." },
  ];

  return {
    confidence,
    baseSalary,
    lowerBound,
    upperBound,
    medianSalary: baseSalary,
    percentile25: lowerBound,
    percentile75: upperBound,
    annualizedBase,
    annualizedWithThirteenthMonth,
    annualizedTotal,
    thirteenthMonthPay,
    annualBonus,
    monthlyAllowances,
    dataPoints: 10324,
    updatedAt: benchmark.updatedAt,
    comparisonLabel,
    regionalComparison,
    summary: `${role.title} in ${getFieldLabel("location", form.location)} · ${getFieldLabel("workSetup", form.workSetup)}`,
    benchmark,
    calculation: {
      roleBaseMonthlyGross: benchmark.benchmarkMonthlyGross,
      skillAdjustment,
      experienceAdjustment,
      locationAdjustment,
      industryAdjustment,
      workSetupAdjustment,
      companyTypeAdjustment,
      monthlyGrossMedian: baseSalary,
      lowerBoundMonthlyGross: lowerBound,
      upperBoundMonthlyGross: upperBound,
    },
    drivers,
    compensation,
    benefits: getBenefits(form),
    sources: defaultSources,
    peerRoles,
  };
}
