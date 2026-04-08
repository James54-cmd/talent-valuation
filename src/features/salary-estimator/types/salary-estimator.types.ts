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
  | "education"
  | "companySize";

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
  deltaLabel: string;
  direction: "up" | "down";
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
  totalCompensation: number;
  summary: string;
  drivers: DriverInsight[];
  compensation: CompensationLine[];
  peerRoles: PeerRole[];
};
