import { ScrollReveal } from "@/components/common/scroll-reveal";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { getBenchmarkCoverageSummary } from "@/features/salary-estimator/lib/salary-benchmark-catalog";

const benchmarkPrinciples = [
  "We publish only the Philippine city comparisons we felt comfortable defending for launch.",
  "Monthly gross ranges come first, with 13th month handled clearly elsewhere in the product.",
  "Missing cities or roles are hidden when the evidence still feels too thin or too inferred.",
];

export function PHBenchmarksSection() {
  const summary = getBenchmarkCoverageSummary();

  return (
    <section id="ph-benchmarks" className="border-y border-border/60 bg-foreground py-16 text-background sm:py-20">
      <PageContainer className="space-y-10">
        <ScrollReveal className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            PH Benchmarks
          </span>
          <div className="space-y-2">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-background sm:text-4xl">
              The local market reference behind the estimator.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-background/70 sm:text-base">
              This is the benchmark layer of the product: the roles, cities, and confidence levels we currently trust enough to surface for launch.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal variant="left" delay={80}>
            <Card className="rounded-[2rem] border-white/10 bg-white/5 shadow-soft">
            <CardContent className="space-y-8 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Benchmarked roles", value: summary.roles.length, detail: "Roles with usable launch coverage" },
                  { label: "City coverage", value: summary.cities.length, detail: "Cities with publishable benchmark signal" },
                  { label: "Top confidence", value: `${summary.highestConfidence}/100`, detail: "Strongest benchmark confidence in the current set" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/10 px-4 py-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-background/45">{item.label}</p>
                    <p className="mt-2 text-3xl font-display tracking-[-0.04em] text-background">{item.value}</p>
                    <p className="mt-2 text-xs leading-6 text-background/55">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/10 px-5 py-5">
                  <p className="text-sm font-semibold text-background">Roles in benchmark coverage</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {summary.roles.map((role) => (
                      <span key={role} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-background/75">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-gold/25 bg-gradient-to-br from-primary/70 to-[#7c341b] px-5 py-5 text-background">
                  <p className="text-sm font-semibold text-background">Cities we currently show</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {summary.cities.map((city) => (
                      <span key={city} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-background/80">
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-6 text-background/55">
                    We only show city rows where the research felt strong enough to publish without overstating certainty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={160} className="space-y-5">
            <Card className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#3c241a] to-[#6F3D21] text-background shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-background/85">What “PH benchmarks” means here</p>
                <div className="mt-5 space-y-3">
                  {benchmarkPrinciples.map((principle, index) => (
                    <div key={principle} className="grid grid-cols-[36px_1fr] items-start gap-3 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-background/75">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 font-semibold text-background/80">
                        {index + 1}
                      </span>
                      <span className="leading-6">{principle}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-black/10 shadow-none">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-background">Current benchmark window</p>
                <p className="mt-3 text-sm leading-7 text-background/65">
                  The current launch-safe benchmark layer is based on researched Philippine market signals refreshed around {summary.updatedAt}. It is broader than a personal estimate, but still narrower than a full national salary census.
                </p>
                <div className="mt-5 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-primary to-gold" />
                </div>
                <p className="mt-2 text-xs text-background/50">Benchmark maturity for current launch scope</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
