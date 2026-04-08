"use client";

import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { EstimatorForm } from "@/features/salary-estimator/components/estimator-form";
import { EstimatorResults } from "@/features/salary-estimator/components/estimator-results";
import { HeroPanel } from "@/features/salary-estimator/components/hero-panel";
import { MarketStatsStrip } from "@/features/salary-estimator/components/market-stats-strip";
import { getActiveRoleTitle } from "@/features/salary-estimator/lib/salary-estimator-data";
import { useSalaryEstimator } from "@/features/salary-estimator/hooks/use-salary-estimator";

export function SalaryEstimatorPage() {
  const workbenchRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const {
    activeTab,
    calculate,
    estimatorFields,
    estimate,
    form,
    hasCalculated,
    setActiveTab,
    skillOptions,
    tabs,
    toggleSkill,
    updateField,
  } = useSalaryEstimator();

  useEffect(() => {
    if (!hasCalculated) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [estimate.baseSalary, hasCalculated]);

  function scrollToWorkbench() {
    workbenchRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function revealResults() {
    calculate();
  }

  const summary = `${getActiveRoleTitle(form.title)} · ${estimate.summary}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="sr-only">Talent Valuation salary estimator</h1>
      <SiteHeader />
      <MarketStatsStrip />
      <HeroPanel estimate={estimate} summary={summary} onOpenWorkbench={scrollToWorkbench} onShowPreview={revealResults} />
      <EstimatorForm
        ref={workbenchRef}
        activeTab={activeTab}
        fields={estimatorFields}
        form={form}
        onCalculate={revealResults}
        onChangeField={updateField}
        onChangeTab={setActiveTab}
        onToggleSkill={toggleSkill}
        skillOptions={skillOptions}
        tabs={tabs}
      />
      {hasCalculated ? (
        <div ref={resultsRef}>
          <EstimatorResults estimate={estimate} />
        </div>
      ) : null}
    </div>
  );
}
