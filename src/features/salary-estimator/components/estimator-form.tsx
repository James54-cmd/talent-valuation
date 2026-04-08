import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils/cn";
import type { EstimatorField, EstimatorTabId, FieldOption, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

type EstimatorFormProps = {
  activeTab: EstimatorTabId;
  fields: EstimatorField[];
  form: SalaryFormState;
  onCalculate: () => void;
  onChangeTab: (tabId: EstimatorTabId) => void;
  onChangeField: (fieldId: keyof SalaryFormState, value: string) => void;
  onToggleSkill: (skill: string) => void;
  skillOptions: FieldOption[];
  tabs: Array<{ id: EstimatorTabId; label: string }>;
};

export const EstimatorForm = forwardRef<HTMLElement, EstimatorFormProps>(
  ({ activeTab, fields, form, onCalculate, onChangeTab, onChangeField, onToggleSkill, skillOptions, tabs }, ref) => {
    return (
      <section ref={ref} id="valuation-workbench" className="py-16 sm:py-20">
        <PageContainer>
          <div className="space-y-8 rounded-[2rem] border border-border/60 bg-panel p-6 shadow-soft sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="01 / Workbench"
              title="Tell the model what kind of market you are in."
              description="Each input now lives in feature-owned state instead of being hard-coded inside a giant page component. That makes this easier to reason about and much easier to extend."
            />

            <div className="inline-flex flex-wrap gap-2 rounded-full border border-border/60 bg-background p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onChangeTab(tab.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    activeTab === tab.id ? "bg-foreground text-background shadow-soft" : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {fields.map((field) => (
                <label
                  key={field.id}
                  className="space-y-3 rounded-[1.5rem] border border-border/60 bg-background px-4 py-4 transition hover:border-primary/20"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45">{field.label}</span>
                  <select
                    value={form[field.id]}
                    onChange={(event) => onChangeField(field.id, event.target.value)}
                    className="w-full border-none bg-transparent text-base font-medium text-foreground outline-none"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-border/60 bg-background p-5">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45">
                  Primary skills
                </p>
                <p className="text-sm leading-6 text-foreground/65">
                  Skills now behave like real state, not static decorative chips.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {skillOptions.map((skill) => {
                  const isSelected = form.skills.includes(skill.value);

                  return (
                    <button
                      key={skill.value}
                      onClick={() => onToggleSkill(skill.value)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition",
                        isSelected
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-panel text-foreground/70 hover:border-primary/25 hover:text-foreground",
                      )}
                    >
                      {skill.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={onCalculate}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-95"
            >
              Calculate salary
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </PageContainer>
      </section>
    );
  },
);

EstimatorForm.displayName = "EstimatorForm";
