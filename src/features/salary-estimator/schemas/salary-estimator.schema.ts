import { z } from "zod";
import { estimatorFields, getSkillOptions } from "@/features/salary-estimator/lib/salary-benchmark-catalog";

function getAllowedValues(fieldId: (typeof estimatorFields)[number]["id"]) {
  return new Set(
    estimatorFields.find((field) => field.id === fieldId)?.options.map((option) => option.value) ?? [],
  );
}

function createFieldSchema(fieldId: (typeof estimatorFields)[number]["id"]) {
  const allowedValues = getAllowedValues(fieldId);

  return z.string().refine((value) => allowedValues.has(value), {
    message: `Invalid ${fieldId} value.`,
  });
}

const allowedSkills = new Set(getSkillOptions().map((skill) => skill.value));

export const salaryEstimateRequestSchema = z.object({
  title: createFieldSchema("title"),
  experience: createFieldSchema("experience"),
  location: createFieldSchema("location"),
  industry: createFieldSchema("industry"),
  workSetup: createFieldSchema("workSetup"),
  companyType: createFieldSchema("companyType"),
  skills: z.array(z.string().refine((value) => allowedSkills.has(value), { message: "Invalid skill value." })).max(6),
});

export type SalaryEstimateRequestInput = z.infer<typeof salaryEstimateRequestSchema>;
