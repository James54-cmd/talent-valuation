import { salarySignals } from "@/features/salary-estimator/lib/salary-estimator-data";

export function MarketStatsStrip() {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-foreground py-3 text-background">
      <div className="animate-ticker flex min-w-max items-center gap-10 whitespace-nowrap px-4 pr-10 text-xs sm:gap-14 sm:px-6 sm:pr-14 sm:text-sm">
        {[...salarySignals, ...salarySignals].map((signal, index) => (
          <span key={`${signal.label}-${index}`} className="inline-flex items-baseline gap-2 text-background/80">
            <strong className="font-mono font-medium text-gold">{signal.value}</strong>
            {signal.label}
          </span>
        ))}
      </div>
    </section>
  );
}
