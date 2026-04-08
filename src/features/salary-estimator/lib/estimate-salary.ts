import { createAdminClient } from "@/lib/db/admin";
import { createClient } from "@/lib/db/server";
import {
  companyTypeAdjustments,
  defaultSources,
  experienceAdjustments,
  getBenefits,
  getFieldLabel,
  industryAdjustments,
  locationAdjustments,
  peerRoleSets,
  regionalBenchmarks,
  workSetupAdjustments,
} from "@/features/salary-estimator/lib/salary-benchmark-catalog";
import { createSalaryEstimate } from "@/features/salary-estimator/lib/salary-estimation-formula";
import type { SalaryEstimate, SalaryFormState, SourceAttribution } from "@/features/salary-estimator/types/salary-estimator.types";

type DimensionRow = {
  id: string;
  slug: string;
  label: string;
};

type BenchmarkDimensionRelation = {
  slug: string;
  label: string;
};

type SourceBatchRelation = {
  name: string;
};

type BenchmarkRow = {
  id: string;
  median_monthly_gross: number;
  p25_monthly_gross: number;
  p75_monthly_gross: number;
  estimated_annual_bonus: number;
  estimated_monthly_allowances: number;
  confidence_score: number;
  sample_size: number;
  effective_date: string;
  thirteenth_month_included: boolean;
  role: {
    slug: string;
    title: string;
  };
  location: BenchmarkDimensionRelation;
  experience: BenchmarkDimensionRelation;
  industry: BenchmarkDimensionRelation;
  workSetup: BenchmarkDimensionRelation;
  companyType: BenchmarkDimensionRelation;
  sourceBatch: SourceBatchRelation | null;
};

type SkillAdjustmentRow = {
  monthly_adjustment: number;
  skill: {
    slug: string;
    label: string;
  };
};

type RequestedDimensions = {
  companyType: DimensionRow;
  experience: DimensionRow;
  industry: DimensionRow;
  location: DimensionRow;
  workSetup: DimensionRow;
};

function roundToNearestHundred(value: number) {
  return Math.round(value / 100) * 100;
}

function formatPesoCompact(value: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(value);
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

function formatBenchmarkDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(new Date(value));
}

function getAdjustmentValue(adjustments: Record<string, { amount: number }>, slug: string) {
  return adjustments[slug]?.amount ?? 0;
}

function getRelativeAdjustment(adjustments: Record<string, { amount: number }>, targetSlug: string, anchorSlug: string) {
  return getAdjustmentValue(adjustments, targetSlug) - getAdjustmentValue(adjustments, anchorSlug);
}

function calculateFallbackSkillAdjustment(skills: string[]) {
  const includedSkills = Math.min(skills.length, 4);
  return Math.max(0, includedSkills - 1) * 1500;
}

function buildSources(sourceBatchName?: string | null): SourceAttribution[] {
  if (!sourceBatchName) {
    return defaultSources;
  }

  return [
    {
      label: sourceBatchName,
      detail: "Current imported benchmark batch used for this estimate.",
    },
    ...defaultSources,
  ];
}

async function getDimension(client: Awaited<ReturnType<typeof createClient>>, dimensionType: string, slug: string) {
  const { data, error } = await client
    .from("benchmark_dimensions")
    .select("id, slug, label")
    .eq("dimension_type", dimensionType)
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error || !data) {
    throw new Error(`Missing benchmark dimension for ${dimensionType}:${slug}`);
  }

  return data as DimensionRow;
}

async function getRequestedDimensions(client: Awaited<ReturnType<typeof createClient>>, form: SalaryFormState): Promise<RequestedDimensions> {
  const [companyType, experience, industry, location, workSetup] = await Promise.all([
    getDimension(client, "company_type", form.companyType),
    getDimension(client, "experience", form.experience),
    getDimension(client, "industry", form.industry),
    getDimension(client, "location", form.location),
    getDimension(client, "work_setup", form.workSetup),
  ]);

  return {
    companyType,
    experience,
    industry,
    location,
    workSetup,
  };
}

async function getRole(client: Awaited<ReturnType<typeof createClient>>, slug: string) {
  const { data, error } = await client.from("benchmark_roles").select("id, slug, title").eq("slug", slug).single();

  if (error || !data) {
    throw new Error(`Missing benchmark role for ${slug}`);
  }

  return data;
}

async function getSkillIds(client: Awaited<ReturnType<typeof createClient>>, skills: string[]) {
  if (skills.length === 0) {
    return [] as string[];
  }

  const { data, error } = await client
    .from("benchmark_dimensions")
    .select("id")
    .eq("dimension_type", "skill")
    .in("slug", skills);

  if (error || !data) {
    return [] as string[];
  }

  return data.map((item) => item.id);
}

function buildBenchmarkSelect() {
  return `
    id,
    median_monthly_gross,
    p25_monthly_gross,
    p75_monthly_gross,
    estimated_annual_bonus,
    estimated_monthly_allowances,
    confidence_score,
    sample_size,
    effective_date,
    thirteenth_month_included,
    role:benchmark_roles!salary_benchmarks_role_id_fkey(slug,title),
    location:benchmark_dimensions!salary_benchmarks_location_id_fkey(slug,label),
    experience:benchmark_dimensions!salary_benchmarks_experience_id_fkey(slug,label),
    industry:benchmark_dimensions!salary_benchmarks_industry_id_fkey(slug,label),
    workSetup:benchmark_dimensions!salary_benchmarks_work_setup_id_fkey(slug,label),
    companyType:benchmark_dimensions!salary_benchmarks_company_type_id_fkey(slug,label),
    sourceBatch:source_batches(name)
  `;
}

async function getExactBenchmark(
  client: Awaited<ReturnType<typeof createClient>>,
  roleId: string,
  dimensions: RequestedDimensions,
) {
  const { data, error } = await client
    .from("salary_benchmarks")
    .select(buildBenchmarkSelect())
    .eq("role_id", roleId)
    .eq("location_id", dimensions.location.id)
    .eq("experience_id", dimensions.experience.id)
    .eq("industry_id", dimensions.industry.id)
    .eq("work_setup_id", dimensions.workSetup.id)
    .eq("company_type_id", dimensions.companyType.id)
    .order("effective_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as BenchmarkRow | null;
}

async function getRoleAnchorBenchmark(client: Awaited<ReturnType<typeof createClient>>, roleId: string) {
  const { data, error } = await client
    .from("salary_benchmarks")
    .select(buildBenchmarkSelect())
    .eq("role_id", roleId)
    .order("effective_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as BenchmarkRow | null;
}

async function getSkillAdjustments(
  client: Awaited<ReturnType<typeof createClient>>,
  benchmarkId: string,
  skillIds: string[],
) {
  if (skillIds.length === 0) {
    return [] as SkillAdjustmentRow[];
  }

  const { data, error } = await client
    .from("benchmark_skill_adjustments")
    .select("monthly_adjustment, skill:benchmark_dimensions!benchmark_skill_adjustments_skill_id_fkey(slug,label)")
    .eq("benchmark_id", benchmarkId)
    .in("skill_id", skillIds);

  if (error || !data) {
    return [] as SkillAdjustmentRow[];
  }

  return data as unknown as SkillAdjustmentRow[];
}

function createEstimateFromBenchmark(form: SalaryFormState, benchmark: BenchmarkRow, skillAdjustment: number, isExactMatch: boolean): SalaryEstimate {
  const experienceAdjustment = isExactMatch
    ? 0
    : getRelativeAdjustment(experienceAdjustments, form.experience, benchmark.experience.slug);
  const locationAdjustment = isExactMatch ? 0 : getRelativeAdjustment(locationAdjustments, form.location, benchmark.location.slug);
  const industryAdjustment = isExactMatch ? 0 : getRelativeAdjustment(industryAdjustments, form.industry, benchmark.industry.slug);
  const workSetupAdjustment = isExactMatch ? 0 : getRelativeAdjustment(workSetupAdjustments, form.workSetup, benchmark.workSetup.slug);
  const companyTypeAdjustment = isExactMatch
    ? 0
    : getRelativeAdjustment(companyTypeAdjustments, form.companyType, benchmark.companyType.slug);

  const baseSalary = roundToNearestHundred(
    benchmark.median_monthly_gross +
      skillAdjustment +
      experienceAdjustment +
      locationAdjustment +
      industryAdjustment +
      workSetupAdjustment +
      companyTypeAdjustment,
  );
  const lowerBound = roundToNearestHundred(
    benchmark.p25_monthly_gross +
      skillAdjustment +
      experienceAdjustment +
      locationAdjustment +
      industryAdjustment +
      workSetupAdjustment +
      companyTypeAdjustment,
  );
  const upperBound = roundToNearestHundred(
    benchmark.p75_monthly_gross +
      skillAdjustment +
      experienceAdjustment +
      locationAdjustment +
      industryAdjustment +
      workSetupAdjustment +
      companyTypeAdjustment,
  );
  const annualizedBase = baseSalary * 12;
  const thirteenthMonthPay = benchmark.thirteenth_month_included ? baseSalary : 0;
  const annualBonus = roundToNearestHundred(benchmark.estimated_annual_bonus);
  const monthlyAllowances = roundToNearestHundred(benchmark.estimated_monthly_allowances);
  const annualizedWithThirteenthMonth = annualizedBase + thirteenthMonthPay;
  const annualizedTotal = annualizedWithThirteenthMonth + annualBonus + monthlyAllowances * 12;
  const confidence = Math.min(95, benchmark.confidence_score + Math.min(form.skills.length, 2));

  const locationBenchmark = regionalBenchmarks[form.location] ?? 1;
  const regionalComparisonBase = roundToNearestHundred(baseSalary / locationBenchmark);
  const comparisonLabel =
    baseSalary >= regionalComparisonBase + 5000 ? "Above the typical local midpoint" : "Within the expected local range";
  const regionalComparison =
    form.location === "metro-manila"
      ? "Metro Manila remains the highest-paying local benchmark for most private-sector roles."
      : `${getFieldLabel("location", form.location)} usually benchmarks below Metro Manila for similar roles.`;

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

  if (skillAdjustment !== 0) {
    drivers.unshift({
      label: "Skills and specialization",
      impactLabel: formatDelta(skillAdjustment),
      strength: Math.max(16, Math.min(95, Math.round(Math.abs(skillAdjustment) / 250))),
      tone: getToneFromImpact(Math.abs(skillAdjustment)),
    });
  }

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
    dataPoints: benchmark.sample_size,
    updatedAt: formatBenchmarkDate(benchmark.effective_date),
    comparisonLabel,
    regionalComparison,
    summary: `${benchmark.role.title} in ${getFieldLabel("location", form.location)} · ${getFieldLabel("workSetup", form.workSetup)}`,
    benchmark: {
      roleTitle: benchmark.role.title,
      dimensions: {
        title: form.title,
        experience: form.experience,
        location: form.location,
        industry: form.industry,
        workSetup: form.workSetup,
        companyType: form.companyType,
      },
      benchmarkMonthlyGross: roundToNearestHundred(benchmark.median_monthly_gross),
      sampleSize: benchmark.sample_size,
      updatedAt: formatBenchmarkDate(benchmark.effective_date),
      sourceLabels: buildSources(benchmark.sourceBatch?.name).map((source) => source.label),
    },
    calculation: {
      roleBaseMonthlyGross: roundToNearestHundred(benchmark.median_monthly_gross),
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
    sources: buildSources(benchmark.sourceBatch?.name),
    peerRoles: peerRoleSets[form.title] ?? peerRoleSets["software-engineer"],
  };
}

async function persistEstimateRequest(form: SalaryFormState, estimate: SalaryEstimate) {
  try {
    const admin = createAdminClient();

    await admin.from("estimate_requests").insert({
      company_type_slug: form.companyType,
      experience_slug: form.experience,
      industry_slug: form.industry,
      location_slug: form.location,
      result_confidence: estimate.confidence,
      result_median_monthly_gross: estimate.baseSalary,
      role_slug: form.title,
      skills: form.skills,
      work_setup_slug: form.workSetup,
    });
  } catch {
    // Analytics should not block the estimate response.
  }
}

export async function estimateSalary(form: SalaryFormState): Promise<SalaryEstimate> {
  try {
    const client = await createClient();
    const [role, requestedDimensions, skillIds] = await Promise.all([
      getRole(client, form.title),
      getRequestedDimensions(client, form),
      getSkillIds(client, form.skills),
    ]);

    const exactBenchmark = await getExactBenchmark(client, role.id, requestedDimensions);
    const anchorBenchmark = exactBenchmark ?? (await getRoleAnchorBenchmark(client, role.id));

    if (!anchorBenchmark) {
      const fallbackEstimate = createSalaryEstimate(form);
      await persistEstimateRequest(form, fallbackEstimate);
      return fallbackEstimate;
    }

    const skillAdjustments = await getSkillAdjustments(client, anchorBenchmark.id, skillIds);
    const skillAdjustment =
      skillAdjustments.reduce((total, adjustment) => total + adjustment.monthly_adjustment, 0) ||
      calculateFallbackSkillAdjustment(form.skills);

    const estimate = createEstimateFromBenchmark(form, anchorBenchmark, skillAdjustment, Boolean(exactBenchmark));
    await persistEstimateRequest(form, estimate);

    return estimate;
  } catch {
    const fallbackEstimate = createSalaryEstimate(form);
    await persistEstimateRequest(form, fallbackEstimate);
    return fallbackEstimate;
  }
}
