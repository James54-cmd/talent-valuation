import { startTransition, useState } from "react";
import {
  createSalaryEstimate,
  defaultFormState,
  estimatorFields,
  estimatorTabs,
  getSkillOptions,
} from "@/features/salary-estimator/lib/salary-estimator-data";
import { requestSalaryEstimate } from "@/features/salary-estimator/lib/request-salary-estimate";
import type { EstimatorTabId, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

export function useSalaryEstimator() {
  const [activeTab, setActiveTab] = useState<EstimatorTabId>("predict");
  const [form, setForm] = useState<SalaryFormState>(defaultFormState);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  const [serverEstimate, setServerEstimate] = useState(() => createSalaryEstimate(defaultFormState));

  const previewEstimate = createSalaryEstimate(form);
  const estimate = hasCalculated ? serverEstimate : previewEstimate;

  function updateField<Key extends keyof SalaryFormState>(field: Key, value: SalaryFormState[Key]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSkill(skill: string) {
    setForm((current) => {
      const nextSkills = current.skills.includes(skill)
        ? current.skills.filter((item) => item !== skill)
        : [...current.skills, skill];

      return {
        ...current,
        skills: nextSkills,
      };
    });
  }

  async function calculate() {
    setIsCalculating(true);
    setCalculationError(null);

    try {
      const nextEstimate = await requestSalaryEstimate(form);

      startTransition(() => {
        setServerEstimate(nextEstimate);
        setHasCalculated(true);
      });
    } catch {
      setCalculationError("We couldn't refresh the estimate from the server, so we showed the local benchmark version instead.");
      startTransition(() => {
        setServerEstimate(previewEstimate);
        setHasCalculated(true);
      });
    } finally {
      setIsCalculating(false);
    }
  }

  return {
    activeTab,
    calculate,
    calculationError,
    estimatorFields,
    estimate,
    form,
    hasCalculated,
    isCalculating,
    setActiveTab,
    skillOptions: getSkillOptions(),
    tabs: estimatorTabs,
    toggleSkill,
    updateField,
  };
}
