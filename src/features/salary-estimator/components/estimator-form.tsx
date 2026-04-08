import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils/cn";
import type { EstimatorField, EstimatorTabId, FieldOption, SalaryFormState } from "@/features/salary-estimator/types/salary-estimator.types";

type EstimatorFormProps = {
  activeTab: EstimatorTabId;
  calculationError?: string | null;
  fields: EstimatorField[];
  form: SalaryFormState;
  isCalculating?: boolean;
  onCalculate: () => void;
  onChangeTab: (tabId: EstimatorTabId) => void;
  onChangeField: (fieldId: keyof SalaryFormState, value: string) => void;
  onToggleSkill: (skill: string) => void;
  skillOptions: FieldOption[];
  tabs: Array<{ id: EstimatorTabId; label: string }>;
};

export const EstimatorForm = forwardRef<HTMLElement, EstimatorFormProps>(
  ({ activeTab, calculationError, fields, form, isCalculating, onCalculate, onChangeTab, onChangeField, onToggleSkill, skillOptions, tabs }, ref) => {
    return (
      <section ref={ref} id="valuation-workbench" className="py-16 sm:py-20">
        <PageContainer>
          <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
            <CardContent className="space-y-8 p-6 sm:p-8 lg:p-10">
              <SectionHeading
                eyebrow="01 / Estimator"
                title="Tell us what kind of role you are benchmarking."
                description="Use the filters below to get a salary range that feels closer to how compensation is actually discussed in the Philippines: monthly pay, city-based differences, remote premiums, and company type."
              />

              <Tabs value={activeTab} onValueChange={(value) => onChangeTab(value as EstimatorTabId)}>
                <TabsList className="h-auto flex-wrap rounded-full border border-border/60 bg-background p-1">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition data-[state=active]:bg-foreground data-[state=active]:text-background",
                        activeTab !== tab.id && "text-foreground/60 hover:text-foreground",
                      )}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {fields.map((field) => (
                  <Card key={field.id} className="rounded-[1.5rem] border-border/60 bg-background shadow-none transition hover:border-primary/20">
                    <CardContent className="space-y-3 px-4 py-4">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45">{field.label}</span>
                      <Select value={form[field.id]} onValueChange={(value) => onChangeField(field.id, value)}>
                        <SelectTrigger className="h-auto border-0 bg-transparent px-0 py-0 text-base font-medium shadow-none ring-0 focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder={field.label} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="rounded-[1.5rem] border-border/60 bg-background shadow-none">
                <CardContent className="p-5">
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45">
                      Tools or specialization
                    </p>
                    <p className="text-sm leading-6 text-foreground/65">
                      Optional, but helpful when your role pays differently because of domain tools, technical depth, or specialized work.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {skillOptions.map((skill) => {
                      const isSelected = form.skills.includes(skill.value);

                      return (
                        <Button
                          key={skill.value}
                          onClick={() => onToggleSkill(skill.value)}
                          type="button"
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          className={cn(
                            "rounded-full transition",
                            isSelected
                              ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
                              : "border-border bg-panel text-foreground/70 hover:border-primary/25 hover:bg-panel hover:text-foreground",
                          )}
                        >
                          {skill.label}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {calculationError ? <p className="text-sm text-amber-700">{calculationError}</p> : null}

              <Button
                onClick={onCalculate}
                size="lg"
                disabled={isCalculating}
                className="w-fit rounded-full px-6 shadow-soft transition hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {isCalculating ? "Refreshing estimate..." : "Show my salary estimate"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </PageContainer>
      </section>
    );
  },
);

EstimatorForm.displayName = "EstimatorForm";
