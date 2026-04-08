import { NextResponse } from "next/server";
import { createSalaryEstimate } from "@/features/salary-estimator/lib/salary-estimation-formula";
import { salaryEstimateRequestSchema } from "@/features/salary-estimator/schemas/salary-estimator.schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = salaryEstimateRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Invalid salary estimate request.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const estimate = createSalaryEstimate(parsed.data);

  return NextResponse.json({ estimate });
}
