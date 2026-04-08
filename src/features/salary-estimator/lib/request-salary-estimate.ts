import type { SalaryEstimate, SalaryEstimateRequest } from "@/features/salary-estimator/types/salary-estimator.types";

export async function requestSalaryEstimate(form: SalaryEstimateRequest): Promise<SalaryEstimate> {
  const response = await fetch("/api/salary-estimates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    throw new Error(`Salary estimate request failed with status ${response.status}`);
  }

  const data = (await response.json()) as { estimate: SalaryEstimate };
  return data.estimate;
}
