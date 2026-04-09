import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils/format-currency";
import type { CityComparisonResult } from "@/features/salary-estimator/types/salary-estimator.types";

type CityComparisonResultsProps = {
  result: CityComparisonResult;
};

function formatDelta(value: number) {
  if (value === 0) {
    return "Baseline";
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${formatCurrency(Math.abs(value))}`;
}

export function CityComparisonResults({ result }: CityComparisonResultsProps) {
  return (
    <section className="animate-rise py-16 sm:py-20">
      <PageContainer className="space-y-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="02 / City Comparison"
            title={`How ${result.benchmarkedRoleTitle} pay compares by city.`}
            description="This comparison uses only city rows we were comfortable surfacing from the researched dataset. Metro Manila is the reference point for peso and percentage differences."
          />
        </ScrollReveal>

        {result.caveat ? (
          <ScrollReveal delay={60}>
            <Card className="rounded-[1.5rem] border-border/60 bg-panel shadow-soft">
            <CardContent className="p-5 text-sm text-foreground/70">{result.caveat}</CardContent>
          </Card>
          </ScrollReveal>
        ) : null}

        {result.availableCities.length === 0 ? (
          <ScrollReveal delay={100}>
            <Card className="rounded-[1.5rem] border-border/60 bg-panel shadow-soft">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-foreground">No launch-safe city comparison yet</p>
              <p className="mt-2 text-sm text-foreground/65">
                We have not gathered enough direct city evidence for this role yet, so we are not showing a comparison block that would feel overly inferred.
              </p>
            </CardContent>
          </Card>
          </ScrollReveal>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {result.availableCities.map((row, index) => (
              <ScrollReveal key={row.locationSlug} delay={80 + index * 70} variant="scale">
                <Card className="rounded-[1.5rem] border-border/60 bg-panel shadow-soft">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{row.locationLabel}</p>
                      <p className="mt-1 text-xs text-foreground/55">{row.sourceSummary}</p>
                    </div>
                    <Badge variant="outline" className="rounded-full">
                      {row.confidenceScore}/100
                    </Badge>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">Median monthly gross</p>
                    <p className="mt-2 font-display text-3xl tracking-[-0.04em] text-foreground">{formatCurrency(row.medianMonthlyGross)}</p>
                    <p className="mt-2 text-xs text-foreground/55">
                      {formatCurrency(row.p25MonthlyGross)} - {formatCurrency(row.p75MonthlyGross)}
                    </p>
                  </div>

                  <div className="grid gap-3 rounded-[1rem] bg-background p-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">Vs Metro Manila</span>
                      <span className="font-medium text-primary">{formatDelta(row.pesoDifferenceFromMetroManila)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">Percent difference</span>
                      <span className="font-medium text-foreground">
                        {row.percentDifferenceFromMetroManila > 0 ? "+" : ""}
                        {row.percentDifferenceFromMetroManila}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">Sample signal</span>
                      <span className="font-medium text-foreground">{row.sampleSizeEstimate.toLocaleString("en-PH")}+</span>
                    </div>
                  </div>

                  <p className="text-xs leading-6 text-foreground/60">{row.derivationNotes}</p>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>
        )}
      </PageContainer>
    </section>
  );
}
