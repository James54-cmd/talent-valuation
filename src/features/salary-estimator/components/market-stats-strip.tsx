import { salarySignals } from "@/features/salary-estimator/lib/salary-estimator-data";

export function MarketStatsStrip() {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-foreground py-3 text-background">
      <div className="animate-ticker flex min-w-max items-center gap-14 whitespace-nowrap pr-14">
        {[...salarySignals, ...salarySignals].map((signal, index) => (
          <span key={`${signal.label}-${index}`} className="inline-flex items-baseline gap-2 text-sm text-background/80">
            <strong className="font-mono text-sm font-medium text-gold">{signal.value}</strong>
            {signal.label}
          </span>
        ))}
      </div>
    </section>
  );
}
