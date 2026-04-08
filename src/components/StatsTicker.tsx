const items = [
  { val: "124,890", label: "salary data points indexed" },
  { val: "$142k", label: "avg. Senior Engineer, US" },
  { val: "92%", label: "prediction accuracy" },
  { val: "38", label: "countries covered" },
  { val: "$210k", label: "Staff Engineer, NYC" },
  { val: "↑ 8.3%", label: "YoY ML Engineer salaries" },
];

const StatsTicker = () => (
  <div className="bg-foreground text-background py-3 overflow-hidden whitespace-nowrap">
    <div className="inline-flex gap-16 animate-ticker">
      {[...items, ...items].map((s, i) => (
        <span key={i} className="inline-flex items-baseline gap-2 text-[13px] font-light">
          <strong className="font-mono text-sm font-medium text-gold">{s.val}</strong>
          {s.label}
        </span>
      ))}
    </div>
  </div>
);

export default StatsTicker;
