import { NextResponse } from "next/server";
import { estimateSalary } from "@/features/salary-estimator/lib/estimate-salary";
import { salaryEstimateRequestSchema } from "@/features/salary-estimator/schemas/salary-estimator.schema";
import type { SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

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

  const form: SalaryFormState = {
    title: parsed.data.title,
    experience: parsed.data.experience,
    location: parsed.data.location,
    industry: parsed.data.industry,
    workSetup: parsed.data.workSetup,
    companyType: parsed.data.companyType,
    skills: parsed.data.skills,
  };

  const estimate = await estimateSalary(form);

  return NextResponse.json({ estimate });
}
