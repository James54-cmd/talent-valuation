import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { getBenchmarkCoverageSummary } from "@/features/salary-estimator/lib/salary-benchmark-catalog";

const benchmarkPrinciples = [
  "Research-backed Philippine city comparisons where we had enough direct signal to trust launch output",
  "Monthly gross ranges first, with 13th month handled explicitly elsewhere in the product",
  "City coverage shown only for roles and locations with acceptable evidence quality",
];

export function PHBenchmarksSection() {
  const summary = getBenchmarkCoverageSummary();

  return (
    <section id="ph-benchmarks" className="py-16 sm:py-20">
      <PageContainer className="space-y-10">
        <SectionHeading
          eyebrow="PH Benchmarks"
          title="The local market reference behind the estimator."
          description="This section is the market layer of the product. It summarizes the Philippine benchmark coverage we currently trust enough to show for launch, especially for city comparison and benchmark context."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[2rem] border-border/60 bg-panel shadow-soft">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">Benchmarked roles</p>
                  <p className="mt-2 text-3xl font-display tracking-[-0.04em] text-foreground">{summary.roles.length}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">City coverage</p>
                  <p className="mt-2 text-3xl font-display tracking-[-0.04em] text-foreground">{summary.cities.length}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">Top confidence</p>
                  <p className="mt-2 text-3xl font-display tracking-[-0.04em] text-foreground">{summary.highestConfidence}/100</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">Current role coverage</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {summary.roles.map((role) => (
                      <span key={role} className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-foreground/70">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Current city coverage</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {summary.cities.map((city) => (
                      <span key={city} className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-foreground/70">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="rounded-[2rem] border-0 bg-foreground text-background shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-background/85">What PH benchmarks means here</p>
                <div className="mt-5 space-y-3">
                  {benchmarkPrinciples.map((principle) => (
                    <div key={principle} className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-background/75">
                      {principle}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/60 bg-background shadow-none">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground">Last benchmark window</p>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  The current launch-safe benchmark layer is based on researched Philippine market signals refreshed around {summary.updatedAt}. It is broader than a personal estimate, but narrower than a full national salary census.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
