import type { EstimatorField, EstimatorTabId, FieldOption, PeerRole, SalaryEstimate, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

type RoleProfile = {
  title: string;
  baseSalary: number;
  benchmarkRange: [number, number];
};

const skillOptions: FieldOption[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "python", label: "Python" },
  { value: "nodejs", label: "Node.js" },
  { value: "aws", label: "AWS" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "graphql", label: "GraphQL" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "system-design", label: "System Design" },
];

export const estimatorTabs: Array<{ id: EstimatorTabId; label: string }> = [
  { id: "predict", label: "Predict salary" },
  { id: "compare", label: "Compare roles" },
  { id: "trends", label: "Market trends" },
];

export const estimatorFields: EstimatorField[] = [
  {
    id: "title",
    label: "Job title",
    options: [
      { value: "senior-software-engineer", label: "Senior Software Engineer" },
      { value: "staff-engineer", label: "Staff Engineer" },
      { value: "engineering-manager", label: "Engineering Manager" },
      { value: "product-manager", label: "Product Manager" },
      { value: "data-scientist", label: "Data Scientist" },
      { value: "ml-engineer", label: "ML Engineer" },
      { value: "frontend-engineer", label: "Frontend Engineer" },
      { value: "backend-engineer", label: "Backend Engineer" },
      { value: "platform-engineer", label: "Platform Engineer" },
      { value: "product-designer", label: "Product Designer" },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    options: [
      { value: "1-2", label: "1-2 years" },
      { value: "3-4", label: "3-4 years" },
      { value: "5-7", label: "5-7 years" },
      { value: "8-10", label: "8-10 years" },
      { value: "10-plus", label: "10+ years" },
    ],
  },
  {
    id: "location",
    label: "Location",
    options: [
      { value: "san-francisco", label: "San Francisco, CA" },
      { value: "new-york", label: "New York, NY" },
      { value: "seattle", label: "Seattle, WA" },
      { value: "austin", label: "Austin, TX" },
      { value: "remote-us", label: "Remote (US)" },
      { value: "london", label: "London, UK" },
      { value: "berlin", label: "Berlin, DE" },
      { value: "singapore", label: "Singapore" },
    ],
  },
  {
    id: "industry",
    label: "Industry",
    options: [
      { value: "faang", label: "Big Tech (FAANG+)" },
      { value: "series-b-d", label: "Series B-D Startup" },
      { value: "early-startup", label: "Early-stage Startup" },
      { value: "fintech", label: "Finance / Fintech" },
      { value: "healthcare", label: "Healthcare / Biotech" },
      { value: "enterprise-saas", label: "Enterprise SaaS" },
      { value: "public-sector", label: "Government / Non-profit" },
    ],
  },
  {
    id: "education",
    label: "Education",
    options: [
      { value: "self-taught", label: "No degree / Self-taught" },
      { value: "bootcamp", label: "Bootcamp" },
      { value: "bs-cs", label: "B.S. Computer Science" },
      { value: "ms-cs", label: "M.S. Computer Science" },
      { value: "phd", label: "PhD" },
      { value: "mba", label: "MBA" },
    ],
  },
  {
    id: "companySize",
    label: "Company size",
    options: [
      { value: "1-10", label: "1-10 people" },
      { value: "11-50", label: "11-50 people" },
      { value: "51-200", label: "51-200 people" },
      { value: "201-1000", label: "201-1,000 people" },
      { value: "1001-5000", label: "1,001-5,000 people" },
      { value: "5000-plus", label: "5,000+ people" },
    ],
  },
];

export const salarySignals = [
  { value: "124,890", label: "salary data points indexed" },
  { value: "$142K", label: "average senior engineer in the US" },
  { value: "92%", label: "prediction confidence on validated roles" },
  { value: "38", label: "countries in the benchmark graph" },
  { value: "$210K", label: "median staff engineer in New York" },
  { value: "+8.3%", label: "YoY growth for ML compensation bands" },
];

export const defaultFormState: SalaryFormState = {
  title: "senior-software-engineer",
  experience: "5-7",
  location: "san-francisco",
  industry: "series-b-d",
  education: "bs-cs",
  companySize: "201-1000",
  skills: ["typescript", "react", "nodejs", "postgresql"],
};

const roleProfiles: Record<string, RoleProfile> = {
  "senior-software-engineer": { title: "Senior Software Engineer", baseSalary: 154000, benchmarkRange: [142000, 186000] },
  "staff-engineer": { title: "Staff Engineer", baseSalary: 192000, benchmarkRange: [178000, 240000] },
  "engineering-manager": { title: "Engineering Manager", baseSalary: 181000, benchmarkRange: [168000, 225000] },
  "product-manager": { title: "Product Manager", baseSalary: 165000, benchmarkRange: [149000, 202000] },
  "data-scientist": { title: "Data Scientist", baseSalary: 161000, benchmarkRange: [145000, 198000] },
  "ml-engineer": { title: "ML Engineer", baseSalary: 176000, benchmarkRange: [162000, 218000] },
  "frontend-engineer": { title: "Frontend Engineer", baseSalary: 149000, benchmarkRange: [136000, 181000] },
  "backend-engineer": { title: "Backend Engineer", baseSalary: 156000, benchmarkRange: [143000, 190000] },
  "platform-engineer": { title: "Platform Engineer", baseSalary: 171000, benchmarkRange: [156000, 208000] },
  "product-designer": { title: "Product Designer", baseSalary: 143000, benchmarkRange: [129000, 176000] },
};

const experienceModifiers: Record<string, number> = {
  "1-2": -34000,
  "3-4": -18000,
  "5-7": 0,
  "8-10": 22000,
  "10-plus": 36000,
};

const locationModifiers: Record<string, number> = {
  "san-francisco": 24000,
  "new-york": 18000,
  seattle: 12000,
  austin: 4000,
  "remote-us": 9000,
  london: -12000,
  berlin: -26000,
  singapore: -9000,
};

const industryModifiers: Record<string, number> = {
  faang: 26000,
  "series-b-d": 12000,
  "early-startup": -8000,
  fintech: 15000,
  healthcare: 5000,
  "enterprise-saas": 7000,
  "public-sector": -18000,
};

const educationModifiers: Record<string, number> = {
  "self-taught": -4000,
  bootcamp: -2000,
  "bs-cs": 0,
  "ms-cs": 4500,
  phd: 9000,
  mba: 6500,
};

const companySizeModifiers: Record<string, number> = {
  "1-10": -18000,
  "11-50": -11000,
  "51-200": -3000,
  "201-1000": 5000,
  "1001-5000": 9000,
  "5000-plus": 14000,
};

const peerRoleSets: Record<string, PeerRole[]> = {
  "senior-software-engineer": [
    { title: "Senior Software Engineer", company: "Stripe · San Francisco", compensation: "$165K - $195K" },
    { title: "Senior Full-Stack Engineer", company: "Linear · Remote (US)", compensation: "$155K - $185K" },
    { title: "Software Engineer L5", company: "Google · Mountain View", compensation: "$178K - $220K" },
  ],
  "staff-engineer": [
    { title: "Staff Engineer", company: "Figma · New York", compensation: "$210K - $255K" },
    { title: "Principal Platform Engineer", company: "Datadog · Remote (US)", compensation: "$205K - $248K" },
    { title: "Staff Software Engineer", company: "Airbnb · San Francisco", compensation: "$215K - $268K" },
  ],
  "engineering-manager": [
    { title: "Engineering Manager", company: "Notion · San Francisco", compensation: "$190K - $230K" },
    { title: "Senior Engineering Manager", company: "Canva · Remote", compensation: "$205K - $248K" },
    { title: "Product Engineering Lead", company: "Ramp · New York", compensation: "$198K - $240K" },
  ],
};

function roundToNearestHundred(value: number) {
  return Math.round(value / 100) * 100;
}

function formatDelta(value: number) {
  if (value === 0) {
    return "0%";
  }

  const prefix = value > 0 ? "+" : "";
  return `${prefix}${Math.round((value / 1000) * 1.7)}%`;
}

function getToneFromImpact(value: number) {
  if (value >= 15000) {
    return "primary" as const;
  }

  if (value >= 5000 || value <= -5000) {
    return "accent" as const;
  }

  return "muted" as const;
}

function getFieldLabel(fieldId: EstimatorField["id"], value: string) {
  const field = estimatorFields.find((item) => item.id === fieldId);
  return field?.options.find((option) => option.value === value)?.label ?? value;
}

export function getSkillOptions() {
  return skillOptions;
}

export function getActiveRoleTitle(value: string) {
  return roleProfiles[value]?.title ?? "Compensation benchmark";
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function createSalaryEstimate(form: SalaryFormState): SalaryEstimate {
  const role = roleProfiles[form.title] ?? roleProfiles["senior-software-engineer"];
  const skillImpact = Math.max(0, form.skills.length - 2) * 3200;
  const educationImpact = educationModifiers[form.education] ?? 0;
  const companyImpact = companySizeModifiers[form.companySize] ?? 0;
  const experienceImpact = experienceModifiers[form.experience] ?? 0;
  const locationImpact = locationModifiers[form.location] ?? 0;
  const industryImpact = industryModifiers[form.industry] ?? 0;

  const baseSalary = roundToNearestHundred(
    role.baseSalary +
      skillImpact +
      educationImpact +
      companyImpact +
      experienceImpact +
      locationImpact +
      industryImpact,
  );

  const lowerBound = roundToNearestHundred(baseSalary * 0.89);
  const upperBound = roundToNearestHundred(baseSalary * 1.13);
  const bonus = roundToNearestHundred(baseSalary * 0.11);
  const equity = roundToNearestHundred(baseSalary * (companyImpact >= 9000 ? 0.28 : 0.18));
  const confidence = Math.min(96, 78 + form.skills.length + (experienceImpact > 0 ? 4 : 2));
  const peerRoles = peerRoleSets[form.title] ?? peerRoleSets["senior-software-engineer"];

  const drivers = [
    { label: `Location (${getFieldLabel("location", form.location)})`, value: locationImpact },
    { label: `Experience (${getFieldLabel("experience", form.experience)})`, value: experienceImpact },
    { label: `Skills stack (${form.skills.length} selected)`, value: skillImpact },
    { label: `Company size (${getFieldLabel("companySize", form.companySize)})`, value: companyImpact },
    { label: `Industry (${getFieldLabel("industry", form.industry)})`, value: industryImpact },
  ].map((driver) => ({
    label: driver.label,
    impactLabel: formatDelta(driver.value),
    strength: Math.max(18, Math.min(95, Math.round(Math.abs(driver.value) / 350))),
    tone: getToneFromImpact(Math.abs(driver.value)),
  }));

  const compensation = [
    { label: "Base salary", amount: formatUsd(baseSalary), deltaLabel: "+8%", direction: "up" as const },
    { label: "Annual bonus", amount: formatUsd(bonus), deltaLabel: "+5%", direction: "up" as const },
    { label: "Equity (estimated)", amount: formatUsd(equity), deltaLabel: companyImpact >= 9000 ? "+11%" : "-2%", direction: companyImpact >= 9000 ? "up" as const : "down" as const },
  ];

  return {
    confidence,
    baseSalary,
    lowerBound,
    upperBound,
    medianSalary: baseSalary,
    percentile25: lowerBound,
    percentile75: upperBound,
    totalCompensation: baseSalary + bonus + equity,
    summary: `${role.title} in ${getFieldLabel("location", form.location)} with ${getFieldLabel("experience", form.experience).toLowerCase()}`,
    drivers,
    compensation,
    peerRoles,
  };
}
