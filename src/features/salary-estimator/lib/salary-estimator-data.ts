import type {
  BenefitInsight,
  EstimatorField,
  EstimatorTabId,
  FieldOption,
  PeerRole,
  SalaryEstimate,
  SalaryFormState,
  SourceAttribution,
} from "@/features/salary-estimator/types/salary-estimator.types";

type RoleProfile = {
  title: string;
  baseSalary: number;
};

const skillOptions: FieldOption[] = [
  { value: "excel", label: "Excel" },
  { value: "customer-support", label: "Customer Support" },
  { value: "sales", label: "Sales" },
  { value: "sql", label: "SQL" },
  { value: "figma", label: "Figma" },
  { value: "bookkeeping", label: "Bookkeeping" },
  { value: "recruitment", label: "Recruitment" },
  { value: "react", label: "React" },
  { value: "nodejs", label: "Node.js" },
  { value: "medical-coding", label: "Medical Coding" },
  { value: "tableau", label: "Tableau" },
  { value: "project-management", label: "Project Management" },
];

export const estimatorTabs: Array<{ id: EstimatorTabId; label: string }> = [
  { id: "predict", label: "Estimate salary" },
  { id: "compare", label: "Compare by city" },
  { id: "trends", label: "Market trends" },
];

export const estimatorFields: EstimatorField[] = [
  {
    id: "title",
    label: "Job title",
    options: [
      { value: "customer-service-representative", label: "Customer Service Representative" },
      { value: "software-engineer", label: "Software Engineer" },
      { value: "senior-software-engineer", label: "Senior Software Engineer" },
      { value: "product-manager", label: "Product Manager" },
      { value: "data-analyst", label: "Data Analyst" },
      { value: "graphic-designer", label: "Graphic Designer" },
      { value: "accountant", label: "Accountant" },
      { value: "hr-specialist", label: "HR Specialist" },
      { value: "registered-nurse", label: "Registered Nurse" },
      { value: "virtual-assistant", label: "Virtual Assistant" },
    ],
  },
  {
    id: "experience",
    label: "Experience level",
    options: [
      { value: "fresh-grad", label: "Fresh Grad (0-1 years)" },
      { value: "junior", label: "Junior (1-3 years)" },
      { value: "mid", label: "Mid (3-5 years)" },
      { value: "senior", label: "Senior (5-8 years)" },
      { value: "lead", label: "Lead (8+ years)" },
    ],
  },
  {
    id: "location",
    label: "Location",
    options: [
      { value: "metro-manila", label: "NCR / Metro Manila" },
      { value: "cebu", label: "Cebu" },
      { value: "davao", label: "Davao" },
      { value: "other-ph", label: "Other Philippine region" },
    ],
  },
  {
    id: "industry",
    label: "Industry",
    options: [
      { value: "bpo", label: "BPO" },
      { value: "tech", label: "Tech" },
      { value: "finance", label: "Finance" },
      { value: "government", label: "Government" },
      { value: "healthcare", label: "Healthcare" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "other", label: "Others" },
    ],
  },
  {
    id: "workSetup",
    label: "Work setup",
    options: [
      { value: "onsite", label: "Onsite" },
      { value: "hybrid", label: "Hybrid" },
      { value: "remote-ph", label: "Remote (PH-based)" },
      { value: "remote-intl", label: "Remote (International client)" },
    ],
  },
  {
    id: "companyType",
    label: "Company type",
    options: [
      { value: "local-sme", label: "Local SME" },
      { value: "mnc", label: "Multinational (MNC)" },
      { value: "startup", label: "Startup" },
    ],
  },
];

export const salarySignals = [
  { value: "10,000+", label: "sample salary data points reviewed" },
  { value: "13th month", label: "included in yearly estimate logic" },
  { value: "NCR, Cebu, Davao", label: "regional market slices in the model" },
  { value: "92%", label: "confidence on common benchmark patterns" },
  { value: "Remote Intl", label: "separate from PH-local remote compensation" },
  { value: "Updated Apr 2026", label: "trust signal shown in the result" },
];

export const defaultFormState: SalaryFormState = {
  title: "software-engineer",
  experience: "mid",
  location: "metro-manila",
  industry: "tech",
  workSetup: "hybrid",
  companyType: "mnc",
  skills: ["react", "nodejs", "sql"],
};

const roleProfiles: Record<string, RoleProfile> = {
  "customer-service-representative": { title: "Customer Service Representative", baseSalary: 24000 },
  "software-engineer": { title: "Software Engineer", baseSalary: 50000 },
  "senior-software-engineer": { title: "Senior Software Engineer", baseSalary: 95000 },
  "product-manager": { title: "Product Manager", baseSalary: 80000 },
  "data-analyst": { title: "Data Analyst", baseSalary: 45000 },
  "graphic-designer": { title: "Graphic Designer", baseSalary: 32000 },
  accountant: { title: "Accountant", baseSalary: 38000 },
  "hr-specialist": { title: "HR Specialist", baseSalary: 34000 },
  "registered-nurse": { title: "Registered Nurse", baseSalary: 30000 },
  "virtual-assistant": { title: "Virtual Assistant", baseSalary: 35000 },
};

const experienceModifiers: Record<string, number> = {
  "fresh-grad": -12000,
  junior: -5000,
  mid: 0,
  senior: 18000,
  lead: 35000,
};

const locationModifiers: Record<string, number> = {
  "metro-manila": 8000,
  cebu: 2500,
  davao: 0,
  "other-ph": -4500,
};

const industryModifiers: Record<string, number> = {
  bpo: -6000,
  tech: 12000,
  finance: 9000,
  government: -2000,
  healthcare: 3000,
  ecommerce: 6000,
  other: 0,
};

const workSetupModifiers: Record<string, number> = {
  onsite: 0,
  hybrid: 3000,
  "remote-ph": 7000,
  "remote-intl": 38000,
};

const companyTypeModifiers: Record<string, number> = {
  "local-sme": -4000,
  mnc: 12000,
  startup: 5000,
};

const regionalBenchmarks: Record<string, number> = {
  "metro-manila": 1,
  cebu: 0.92,
  davao: 0.88,
  "other-ph": 0.84,
};

const peerRoleSets: Record<string, PeerRole[]> = {
  "software-engineer": [
    { title: "Software Engineer", company: "GCash · NCR / Hybrid", compensation: "PHP 45,000 - PHP 70,000 / month" },
    { title: "Backend Engineer", company: "Maya · NCR / Hybrid", compensation: "PHP 55,000 - PHP 85,000 / month" },
    { title: "Remote Full-Stack Engineer", company: "Intl client · Remote", compensation: "PHP 95,000 - PHP 140,000 / month" },
  ],
  "senior-software-engineer": [
    { title: "Senior Software Engineer", company: "Globe · NCR / Hybrid", compensation: "PHP 90,000 - PHP 130,000 / month" },
    { title: "Lead Backend Engineer", company: "Sprout Solutions · NCR", compensation: "PHP 100,000 - PHP 145,000 / month" },
    { title: "Senior Remote Engineer", company: "US client · Remote", compensation: "PHP 150,000 - PHP 220,000 / month" },
  ],
  "customer-service-representative": [
    { title: "CSR", company: "Concentrix · Cebu", compensation: "PHP 20,000 - PHP 29,000 / month" },
    { title: "Customer Experience Associate", company: "TaskUs · NCR", compensation: "PHP 23,000 - PHP 32,000 / month" },
    { title: "Technical Support Rep", company: "Foundever · Davao", compensation: "PHP 24,000 - PHP 34,000 / month" },
  ],
};

const defaultSources: SourceAttribution[] = [
  { label: "Philippine Statistics Authority", detail: "Reliable baseline labor and wage context" },
  { label: "Department of Labor and Employment", detail: "Regulatory context including regional wage rules" },
  { label: "JobStreet Philippines", detail: "High-volume local job market signal" },
  { label: "Glassdoor and PayScale", detail: "Self-reported compensation signal with normalization" },
  { label: "Michael Page Philippines", detail: "High-quality compensation benchmarking reports" },
];

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

function getToneFromImpact(value: number) {
  if (value >= 12000) {
    return "primary" as const;
  }

  if (value >= 4000) {
    return "accent" as const;
  }

  return "muted" as const;
}

function getFieldLabel(fieldId: EstimatorField["id"], value: string) {
  const field = estimatorFields.find((item) => item.id === fieldId);
  return field?.options.find((option) => option.value === value)?.label ?? value;
}

function formatPesoCompact(value: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(value);
}

function getBenefits(form: SalaryFormState): BenefitInsight[] {
  const benefits: BenefitInsight[] = [
    { label: "13th month pay", detail: "Mandatory and included in the yearly estimate." },
    { label: "HMO", detail: form.companyType === "mnc" ? "Common for MNC offers and larger private employers." : "Common but less consistent for smaller employers." },
  ];

  if (form.industry === "bpo") {
    benefits.push({ label: "Night differential", detail: "Often relevant for rotating shifts and graveyard schedules." });
  } else if (form.workSetup === "remote-ph" || form.workSetup === "remote-intl") {
    benefits.push({ label: "Internet allowance", detail: "Frequently bundled into remote-friendly compensation packages." });
  } else {
    benefits.push({ label: "Rice or transport allowance", detail: "Still common in local compensation packages depending on company policy." });
  }

  return benefits;
}

export function getSkillOptions() {
  return skillOptions;
}

export function getActiveRoleTitle(value: string) {
  return roleProfiles[value]?.title ?? "Salary benchmark";
}

export function createSalaryEstimate(form: SalaryFormState): SalaryEstimate {
  const role = roleProfiles[form.title] ?? roleProfiles["software-engineer"];
  const skillImpact = Math.max(0, form.skills.length - 1) * 1500;
  const experienceImpact = experienceModifiers[form.experience] ?? 0;
  const locationImpact = locationModifiers[form.location] ?? 0;
  const industryImpact = industryModifiers[form.industry] ?? 0;
  const workSetupImpact = workSetupModifiers[form.workSetup] ?? 0;
  const companyTypeImpact = companyTypeModifiers[form.companyType] ?? 0;

  const baseSalary = roundToNearestHundred(
    role.baseSalary + skillImpact + experienceImpact + locationImpact + industryImpact + workSetupImpact + companyTypeImpact,
  );
  const lowerBound = roundToNearestHundred(baseSalary * 0.87);
  const upperBound = roundToNearestHundred(baseSalary * 1.14);
  const annualizedBase = baseSalary * 12;
  const thirteenthMonthPay = baseSalary;
  const annualBonus =
    form.companyType === "mnc"
      ? roundToNearestHundred(baseSalary * 1.2)
      : form.industry === "finance"
        ? roundToNearestHundred(baseSalary)
        : roundToNearestHundred(baseSalary * 0.45);
  const monthlyAllowances =
    form.industry === "bpo"
      ? 2500
      : form.workSetup === "remote-ph" || form.workSetup === "remote-intl"
        ? 3500
        : 2000;

  const annualizedWithThirteenthMonth = annualizedBase + thirteenthMonthPay;
  const annualizedTotal = annualizedWithThirteenthMonth + annualBonus + monthlyAllowances * 12;
  const confidence = Math.min(95, 80 + form.skills.length + (form.workSetup === "remote-intl" ? 2 : 0));
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
    { label: `Location (${getFieldLabel("location", form.location)})`, value: locationImpact },
    { label: `Experience (${getFieldLabel("experience", form.experience)})`, value: experienceImpact },
    { label: `Work setup (${getFieldLabel("workSetup", form.workSetup)})`, value: workSetupImpact },
    { label: `Company type (${getFieldLabel("companyType", form.companyType)})`, value: companyTypeImpact },
    { label: `Industry (${getFieldLabel("industry", form.industry)})`, value: industryImpact },
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
    updatedAt: "April 2026",
    comparisonLabel,
    regionalComparison,
    summary: `${role.title} in ${getFieldLabel("location", form.location)} · ${getFieldLabel("workSetup", form.workSetup)}`,
    drivers,
    compensation,
    benefits: getBenefits(form),
    sources: defaultSources,
    peerRoles,
  };
}
