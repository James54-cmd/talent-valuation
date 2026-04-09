import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils/cn";
import type { SalaryEstimate } from "@/features/salary-estimator/types/salary-estimator.types";

type EstimatorResultsProps = {
  estimate: SalaryEstimate;
};

export function EstimatorResults({ estimate }: EstimatorResultsProps) {
  return (
    <section className="animate-rise py-12 sm:py-16 lg:py-20">
      <PageContainer className="space-y-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="02 / Result"
            title="Your estimated salary range in the Philippine market."
            description="This result is designed to be useful in a real compensation conversation: monthly gross first, yearly context second, and a clear explanation of 13th month pay, benefits, and benchmark confidence."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
          <ScrollReveal variant="left" delay={80}>
            <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45">
                    Estimated monthly salary range
                  </p>
                  <p className="mt-4 font-display text-4xl leading-none tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
                    {formatCurrency(estimate.lowerBound)} - {formatCurrency(estimate.upperBound)}
                  </p>
                  <p className="mt-3 text-sm text-foreground/65">{estimate.summary} · gross per month before taxes and deductions</p>
                </div>

                <Badge className="h-fit rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-500/10">
                  {estimate.confidence}% confidence
                </Badge>
              </div>

              <Separator className="my-8 bg-border/60" />

              <div className="rounded-full bg-background p-2">
                <div className="relative h-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/55 to-gold/70">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-panel bg-foreground shadow-soft" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-xs text-foreground/55">
                <span>{formatCurrency(estimate.lowerBound)}</span>
                <span className="text-primary">{formatCurrency(estimate.baseSalary)} midpoint</span>
                <span>{formatCurrency(estimate.upperBound)}</span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "25th percentile", value: estimate.percentile25, highlight: false },
                  { label: "Median", value: estimate.medianSalary, highlight: true },
                  { label: "75th percentile", value: estimate.percentile75, highlight: false },
                ].map((item) => (
                  <Card
                    key={item.label}
                    className={cn(
                      "rounded-[1.5rem] border-border/60 bg-background text-center shadow-none",
                      item.highlight && "border-primary/25 shadow-soft",
                    )}
                  >
                    <CardContent className="p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">{item.label}</p>
                      <p className={cn("mt-3 font-display text-3xl tracking-[-0.04em]", item.highlight ? "text-primary" : "text-foreground")}>
                        {formatCurrency(item.value)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 grid gap-3 lg:grid-cols-2">
                <Card className="rounded-[1.5rem] border-border/60 bg-background shadow-none">
                  <CardContent className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">Annual gross with 13th month</p>
                    <p className="mt-3 font-display text-3xl tracking-[-0.04em] text-foreground">
                      {formatCurrency(estimate.annualizedWithThirteenthMonth)}
                    </p>
                    <p className="mt-2 text-sm text-foreground/60">This includes the legally required 13th month pay.</p>
                  </CardContent>
                </Card>
                <Card className="rounded-[1.5rem] border-border/60 bg-background shadow-none">
                  <CardContent className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">Local comparison</p>
                    <p className="mt-3 text-base font-semibold text-primary">{estimate.comparisonLabel}</p>
                    <p className="mt-2 text-sm text-foreground/60">{estimate.regionalComparison}</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={160} className="space-y-5">
            <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground">What influenced the estimate</p>
                <div className="mt-5 space-y-4">
                  {estimate.drivers.map((driver) => (
                    <div key={driver.label} className="grid grid-cols-[1fr_92px_42px] items-center gap-3">
                      <span className="text-sm text-foreground/65">{driver.label}</span>
                      <Progress
                        value={driver.strength}
                        className={cn(
                          "h-2 bg-background [&>div]:bg-primary",
                          driver.tone === "accent" && "[&>div]:bg-gold",
                          driver.tone === "muted" && "[&>div]:bg-foreground/20",
                        )}
                      />
                      <span className="font-mono text-xs text-foreground/55">{driver.impactLabel}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-0 bg-foreground text-background shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-background/85">Salary and benefits breakdown</p>
                <div className="mt-5 space-y-4">
                  {estimate.compensation.map((line) => (
                    <div key={line.label} className="border-b border-white/10 pb-4 last:border-none last:pb-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-background/60">{line.label}</span>
                        <span className="font-mono text-sm">{line.amount}</span>
                      </div>
                      {line.detail ? <p className="mt-2 text-xs text-background/50">{line.detail}</p> : null}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-background/70">Estimated yearly total</span>
                  <span className="font-mono text-lg text-gold">{formatCurrency(estimate.annualizedTotal)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground">Why this estimate should feel credible</p>
                <div className="mt-4 space-y-3 text-sm text-foreground/65">
                  <p>Built from {estimate.dataPoints.toLocaleString("en-PH")} localized benchmark signals.</p>
                  <p>Benchmarks last updated {estimate.updatedAt}.</p>
                  <p>Figures are estimates based on aggregated market data. Actual offers may still vary by company, benefits, and negotiation.</p>
                </div>
                <Separator className="my-5 bg-border/60" />
                <div className="space-y-3">
                  {estimate.sources.map((source) => (
                    <div key={source.label}>
                      <p className="text-sm font-medium text-foreground">{source.label}</p>
                      <p className="text-xs text-foreground/60">{source.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={220} className="space-y-6 border-t border-border/60 pt-10">
          <SectionHeading
            eyebrow="03 / Context"
            title="Comparable salary signals in the Philippine market."
            description="These ranges stay intentionally broad. A trustworthy estimator should guide your expectations, not pretend to know your exact offer."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {estimate.peerRoles.map((role) => (
              <Card
                key={`${role.title}-${role.company}`}
                className="rounded-[1.5rem] border-border/60 bg-panel shadow-soft transition hover:-translate-y-1 hover:border-primary/25"
              >
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{role.company}</p>
                  <p className="mt-4 font-mono text-base text-primary">{role.compensation}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {estimate.benefits.map((benefit) => (
              <Card key={benefit.label} className="rounded-[1.5rem] border-border/60 bg-background shadow-none">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-foreground">{benefit.label}</p>
                  <p className="mt-2 text-sm text-foreground/60">{benefit.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
