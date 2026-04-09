import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils/format-currency";
import type { SalaryEstimate } from "@/features/salary-estimator/types/salary-estimator.types";

type HeroPanelProps = {
  estimate: SalaryEstimate;
  summary: string;
  onOpenWorkbench: () => void;
  onShowPreview: () => void;
};

export function HeroPanel({ estimate, summary, onOpenWorkbench, onShowPreview }: HeroPanelProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(179,89,50,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(39,50,47,0.14),transparent_30%)]" />
      <PageContainer className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <ScrollReveal variant="left" className="space-y-8">
          <Badge variant="outline" className="w-fit max-w-full gap-2 rounded-full border-primary/15 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Built for Filipino job seekers and hiring teams
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.06em] text-foreground sm:text-5xl lg:text-7xl">
              Know your market salary in the Philippines.
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-foreground/70 sm:text-base sm:leading-8 lg:text-lg">
              Get a practical salary range in Philippine pesos, based on role, experience, location, company type, and work setup. We show monthly pay first, then explain annual gross, 13th month pay, and common benefits so the result feels closer to how compensation is discussed locally.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button onClick={onOpenWorkbench} size="lg" className="rounded-full px-6 shadow-soft transition hover:-translate-y-0.5">
              Check my salary range
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={onShowPreview}
              variant="outline"
              size="lg"
              className="rounded-full border-foreground/10 bg-panel text-foreground hover:border-primary/30 hover:bg-panel hover:text-primary"
            >
              See a sample estimate
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Typical monthly pay</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{formatCurrency(estimate.baseSalary)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Annual gross with 13th month</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{formatCurrency(estimate.annualizedWithThirteenthMonth)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Benchmark coverage</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{estimate.dataPoints.toLocaleString("en-PH")} data points</dd>
            </div>
          </dl>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={120} className="relative">
          <Badge variant="outline" className="mb-4 inline-flex rounded-full border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft lg:absolute lg:-top-4 lg:left-6 lg:mb-0">
            Benchmarks updated {estimate.updatedAt}
          </Badge>
          <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
            <CardHeader className="space-y-0 p-7 pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/45">Sample Philippine benchmark</p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">{summary}</h2>
                </div>
                <Badge className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-500/10">
                  {estimate.confidence}% confidence
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-7">
              <div className="rounded-[1.5rem] border border-border/60 bg-background px-6 py-7 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">Estimated monthly salary range</p>
                <p className="mt-3 font-display text-4xl tracking-[-0.05em] text-foreground sm:text-5xl">
                  {formatCurrency(estimate.lowerBound)} - {formatCurrency(estimate.upperBound)}
                </p>
                <p className="mt-2 font-mono text-sm text-foreground/55">Gross per month, in PHP</p>
              </div>

              <Separator className="my-7 bg-border/60" />

              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-foreground/60">Annual gross including 13th month</dt>
                  <dd className="font-mono text-sm text-foreground">{formatCurrency(estimate.annualizedWithThirteenthMonth)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-foreground/60">13th month pay</dt>
                  <dd className="font-mono text-sm text-foreground">{formatCurrency(estimate.thirteenthMonthPay)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-foreground/60">Compared with local market</dt>
                  <dd className="text-right text-sm font-medium text-primary">{estimate.comparisonLabel}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          <Badge variant="outline" className="mt-4 inline-flex rounded-full border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft lg:absolute lg:-bottom-4 lg:right-5 lg:mt-0">
            Range-based estimate, not a fixed promise
          </Badge>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
