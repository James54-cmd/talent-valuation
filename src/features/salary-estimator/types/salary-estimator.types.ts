export type EstimatorTabId = "predict" | "compare" | "trends";

export type FieldOption = {
  value: string;
  label: string;
};

export type EstimatorFieldId =
  | "title"
  | "experience"
  | "location"
  | "industry"
  | "workSetup"
  | "companyType";

export type EstimatorField = {
  id: EstimatorFieldId;
  label: string;
  options: FieldOption[];
};

export type SalaryFormState = Record<EstimatorFieldId, string> & {
  skills: string[];
};

export type DriverInsight = {
  label: string;
  impactLabel: string;
  strength: number;
  tone: "primary" | "accent" | "muted";
};

export type CompensationLine = {
  label: string;
  amount: string;
  detail?: string;
};

export type BenefitInsight = {
  label: string;
  detail: string;
};

export type SourceAttribution = {
  label: string;
  detail: string;
};

export type PeerRole = {
  title: string;
  company: string;
  compensation: string;
};

export type SalaryEstimate = {
  confidence: number;
  baseSalary: number;
  lowerBound: number;
  upperBound: number;
  medianSalary: number;
  percentile25: number;
  percentile75: number;
  annualizedBase: number;
  annualizedWithThirteenthMonth: number;
  annualizedTotal: number;
  thirteenthMonthPay: number;
  annualBonus: number;
  monthlyAllowances: number;
  dataPoints: number;
  updatedAt: string;
  comparisonLabel: string;
  regionalComparison: string;
  summary: string;
  drivers: DriverInsight[];
  compensation: CompensationLine[];
  benefits: BenefitInsight[];
  sources: SourceAttribution[];
  peerRoles: PeerRole[];
};
