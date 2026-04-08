import type {
  BenefitInsight,
  EstimatorField,
  EstimatorTabId,
  FieldOption,
  PeerRole,
  SalaryBenchmarkRecord,
  SalaryFormState,
  SourceAttribution,
} from "@/features/salary-estimator/types/salary-estimator.types";

type RoleProfile = {
  title: string;
  benchmarkMonthlyGross: number;
  sampleSize: number;
};

type MonthlyAdjustment = {
  label: string;
  amount: number;
};

const roleProfiles: Record<string, RoleProfile> = {
  "customer-service-representative": { title: "Customer Service Representative", benchmarkMonthlyGross: 24000, sampleSize: 1380 },
  "software-engineer": { title: "Software Engineer", benchmarkMonthlyGross: 50000, sampleSize: 1640 },
  "senior-software-engineer": { title: "Senior Software Engineer", benchmarkMonthlyGross: 95000, sampleSize: 920 },
  "product-manager": { title: "Product Manager", benchmarkMonthlyGross: 80000, sampleSize: 610 },
  "data-analyst": { title: "Data Analyst", benchmarkMonthlyGross: 45000, sampleSize: 1045 },
  "graphic-designer": { title: "Graphic Designer", benchmarkMonthlyGross: 32000, sampleSize: 750 },
  accountant: { title: "Accountant", benchmarkMonthlyGross: 38000, sampleSize: 860 },
  "hr-specialist": { title: "HR Specialist", benchmarkMonthlyGross: 34000, sampleSize: 690 },
  "registered-nurse": { title: "Registered Nurse", benchmarkMonthlyGross: 30000, sampleSize: 980 },
  "virtual-assistant": { title: "Virtual Assistant", benchmarkMonthlyGross: 35000, sampleSize: 1110 },
};

export const skillOptions: FieldOption[] = [
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

export const experienceAdjustments: Record<string, MonthlyAdjustment> = {
  "fresh-grad": { label: "Fresh Grad (0-1 years)", amount: -12000 },
  junior: { label: "Junior (1-3 years)", amount: -5000 },
  mid: { label: "Mid (3-5 years)", amount: 0 },
  senior: { label: "Senior (5-8 years)", amount: 18000 },
  lead: { label: "Lead (8+ years)", amount: 35000 },
};

export const locationAdjustments: Record<string, MonthlyAdjustment> = {
  "metro-manila": { label: "NCR / Metro Manila", amount: 8000 },
  cebu: { label: "Cebu", amount: 2500 },
  davao: { label: "Davao", amount: 0 },
  "other-ph": { label: "Other Philippine region", amount: -4500 },
};

export const industryAdjustments: Record<string, MonthlyAdjustment> = {
  bpo: { label: "BPO", amount: -6000 },
  tech: { label: "Tech", amount: 12000 },
  finance: { label: "Finance", amount: 9000 },
  government: { label: "Government", amount: -2000 },
  healthcare: { label: "Healthcare", amount: 3000 },
  ecommerce: { label: "E-commerce", amount: 6000 },
  other: { label: "Others", amount: 0 },
};

export const workSetupAdjustments: Record<string, MonthlyAdjustment> = {
  onsite: { label: "Onsite", amount: 0 },
  hybrid: { label: "Hybrid", amount: 3000 },
  "remote-ph": { label: "Remote (PH-based)", amount: 7000 },
  "remote-intl": { label: "Remote (International client)", amount: 38000 },
};

export const companyTypeAdjustments: Record<string, MonthlyAdjustment> = {
  "local-sme": { label: "Local SME", amount: -4000 },
  mnc: { label: "Multinational (MNC)", amount: 12000 },
  startup: { label: "Startup", amount: 5000 },
};

export const regionalBenchmarks: Record<string, number> = {
  "metro-manila": 1,
  cebu: 0.92,
  davao: 0.88,
  "other-ph": 0.84,
};

export const peerRoleSets: Record<string, PeerRole[]> = {
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

export const defaultSources: SourceAttribution[] = [
  { label: "Philippine Statistics Authority", detail: "Reliable baseline labor and wage context" },
  { label: "Department of Labor and Employment", detail: "Regulatory context including regional wage rules" },
  { label: "JobStreet Philippines", detail: "High-volume local job market signal" },
  { label: "Glassdoor and PayScale", detail: "Self-reported compensation signal with normalization" },
  { label: "Michael Page Philippines", detail: "High-quality compensation benchmarking reports" },
];

export function getFieldLabel(fieldId: EstimatorField["id"], value: string) {
  const field = estimatorFields.find((item) => item.id === fieldId);
  return field?.options.find((option) => option.value === value)?.label ?? value;
}

export function getSkillOptions() {
  return skillOptions;
}

export function getActiveRoleTitle(value: string) {
  return roleProfiles[value]?.title ?? "Salary benchmark";
}

export function getRoleProfile(value: string) {
  return roleProfiles[value] ?? roleProfiles["software-engineer"];
}

export function getBenefits(form: SalaryFormState): BenefitInsight[] {
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

export function createBenchmarkRecord(form: SalaryFormState): SalaryBenchmarkRecord {
  const role = getRoleProfile(form.title);

  return {
    roleTitle: role.title,
    dimensions: {
      title: form.title,
      experience: form.experience,
      location: form.location,
      industry: form.industry,
      workSetup: form.workSetup,
      companyType: form.companyType,
    },
    benchmarkMonthlyGross: role.benchmarkMonthlyGross,
    sampleSize: role.sampleSize,
    updatedAt: "April 2026",
    sourceLabels: defaultSources.map((source) => source.label),
  };
}
