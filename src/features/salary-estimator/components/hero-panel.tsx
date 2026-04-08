import { ArrowRight, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { formatCurrency } from "@/lib/utils/format-currency";
import type { SalaryEstimate } from "@/features/salary-estimator/types/salary-estimator.types";

type HeroPanelProps = {
  estimate: SalaryEstimate;
  summary: string;
  onOpenWorkbench: () => void;
  onShowPreview: () => void;
};

const benchmarkRows = [
  { label: "Base", weight: 78, tone: "bg-primary" },
  { label: "Equity", weight: 62, tone: "bg-gold" },
  { label: "Bonus", weight: 41, tone: "bg-foreground/30" },
];

export function HeroPanel({ estimate, summary, onOpenWorkbench, onShowPreview }: HeroPanelProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(179,89,50,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(39,50,47,0.14),transparent_30%)]" />
      <PageContainer className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Compensation intelligence for modern talent teams
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
              A salary estimator that looks like a product, not a prompt.
            </h1>
            <p className="max-w-xl text-base leading-8 text-foreground/70 sm:text-lg">
              We turned the generic starter into a sharper valuation workspace: clearer structure, stronger typography, and feature-owned logic that can actually scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenWorkbench}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-95"
            >
              Open valuation workbench
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onShowPreview}
              className="inline-flex items-center rounded-full border border-foreground/10 bg-panel px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
            >
              See live benchmark
            </button>
          </div>

          <dl className="grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Live role</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{summary}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Current midpoint</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{formatCurrency(estimate.baseSalary)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">Confidence band</dt>
              <dd className="mt-2 text-lg font-medium text-foreground">{estimate.confidence}% certainty</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -top-4 left-6 rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft">
            Live market signal
          </div>
          <div className="rounded-[2rem] border border-border/60 bg-panel p-7 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/45">Snapshot</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{summary}</h2>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                {estimate.confidence}% confidence
              </span>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-border/60 bg-background px-6 py-7 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">Predicted base salary</p>
              <p className="mt-3 font-display text-5xl tracking-[-0.05em] text-foreground">
                {formatCurrency(estimate.baseSalary)}
              </p>
              <p className="mt-2 font-mono text-sm text-foreground/55">
                Range {formatCurrency(estimate.lowerBound)} to {formatCurrency(estimate.upperBound)}
              </p>
            </div>

            <div className="mt-7 space-y-4">
              {benchmarkRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[72px_1fr_42px] items-center gap-3">
                  <span className="text-sm text-foreground/60">{row.label}</span>
                  <div className="h-2 rounded-full bg-background">
                    <div className={`h-2 rounded-full ${row.tone}`} style={{ width: `${row.weight}%` }} />
                  </div>
                  <span className="font-mono text-xs text-foreground/55">{row.weight}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 right-5 rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft">
            Updated with current inputs
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
