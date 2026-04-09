import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent } from "@/components/ui/card";

const methodologySteps = [
  {
    title: "We start with a Philippine benchmark",
    detail:
      "Every estimate begins with a local role benchmark, then gets shaped by experience, industry, work setup, company type, and selected specialization.",
  },
  {
    title: "We show monthly gross first",
    detail:
      "The product is intentionally monthly-first because that is how compensation is usually discussed in the Philippines. Annual context comes after.",
  },
  {
    title: "We keep 13th month explicit",
    detail:
      "13th month pay is shown separately so the result feels closer to a real local compensation conversation instead of a generic global calculator.",
  },
  {
    title: "We prefer ranges over fake precision",
    detail:
      "The app gives a practical pay band rather than pretending it can predict one exact salary. Confidence, sources, and context matter more than false certainty.",
  },
];

const methodologySignals = [
  "Role benchmark plus local market adjustments",
  "City context for Metro Manila, Cebu, and other researched slices",
  "Gross monthly pay before taxes and deductions",
  "Confidence and source notes shown with the result",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary/55 py-16 sm:py-20">
      <PageContainer className="space-y-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A Philippine benchmark engine, not a black-box salary guess."
            description="SalarioPH is designed to be transparent. We estimate salary ranges using local benchmark signals, then explain the context so the number feels usable in a real job conversation."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal variant="left" delay={80}>
            <Card className="rounded-[2rem] border-border/60 bg-background shadow-soft">
            <CardContent className="space-y-5 p-6 sm:p-8">
              {methodologySteps.map((step, index) => (
                <div key={step.title} className="grid gap-3 border-b border-border/60 pb-5 last:border-none last:pb-0 md:grid-cols-[58px_1fr]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/25 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/65">{step.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={160} className="space-y-5">
            <Card className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-[#fff8f1] to-[#f4e6d6] text-foreground shadow-soft">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground">What the result includes</p>
                <div className="mt-5 grid gap-3">
                  {methodologySignals.map((signal) => (
                    <div key={signal} className="rounded-[1rem] border border-primary/10 bg-white/70 px-4 py-4 text-sm text-foreground/75">
                      {signal}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/60 bg-background shadow-none">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground">What the result does not claim</p>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  This app does not guarantee your exact offer. Actual salaries still vary by employer, negotiation, benefits, and how current the local benchmark data is.
                </p>
                <div className="mt-5 rounded-[1rem] border border-border/60 bg-panel px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">Why that matters</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    The product should help you negotiate with better context, not pressure you into trusting a made-up exact number.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
