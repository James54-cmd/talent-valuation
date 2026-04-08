import { useState } from "react";
import {
  createSalaryEstimate,
  defaultFormState,
  estimatorFields,
  estimatorTabs,
  getSkillOptions,
} from "@/features/salary-estimator/lib/salary-estimator-data";
import type { EstimatorTabId, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

export function useSalaryEstimator() {
  const [activeTab, setActiveTab] = useState<EstimatorTabId>("predict");
  const [form, setForm] = useState<SalaryFormState>(defaultFormState);
  const [hasCalculated, setHasCalculated] = useState(false);

  const estimate = createSalaryEstimate(form);

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

  function calculate() {
    setHasCalculated(true);
  }

  return {
    activeTab,
    calculate,
    estimatorFields,
    estimate,
    form,
    hasCalculated,
    setActiveTab,
    skillOptions: getSkillOptions(),
    tabs: estimatorTabs,
    toggleSkill,
    updateField,
  };
}
