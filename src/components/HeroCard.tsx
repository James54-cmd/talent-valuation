const bars = [
  { label: "Base", width: "78%", color: "bg-primary" },
  { label: "Equity", width: "62%", color: "bg-gold" },
  { label: "Bonus", width: "45%", color: "bg-mid" },
];

const HeroCard = () => (
  <div className="relative">
    <div className="absolute -top-[18px] left-6 bg-surface border border-border rounded-pill px-4 py-2 text-xs font-medium shadow-card flex items-center gap-1.5 whitespace-nowrap z-10">
      <span className="w-[7px] h-[7px] rounded-full bg-green-700 shrink-0" />
      Live market data
    </div>
    <div className="bg-surface rounded-lg border border-border shadow-card p-7 relative">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-[11px] font-medium tracking-widest uppercase text-mid mb-1">Senior Software Engineer</div>
          <div className="text-sm font-medium">San Francisco, CA · 7 yrs exp.</div>
        </div>
        <span className="bg-green-50 text-green-800 text-[11px] font-medium px-2.5 py-1 rounded-pill tracking-wide">92% confidence</span>
      </div>
      <div className="text-center py-5 border-t border-b border-border mb-5">
        <div className="text-xs text-mid tracking-wider mb-1.5">PREDICTED BASE SALARY</div>
        <div className="font-display text-[44px] tracking-[-2px] leading-none">
          <span className="text-primary">$</span>168,400
        </div>
        <div className="text-xs text-mid mt-1.5 font-mono">Range: $152K – $187K</div>
      </div>
      {bars.map((b) => (
        <div key={b.label} className="flex items-center gap-2.5 mb-2.5">
          <span className="text-xs text-mid w-20 shrink-0">{b.label}</span>
          <div className="flex-1 h-1.5 bg-tag-bg rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${b.color}`} style={{ width: b.width }} />
          </div>
          <span className="text-xs font-mono w-9 text-right">{b.width.replace('%', '')}%</span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 bg-accent-muted rounded-md p-2.5 mt-4">
        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[13px] shrink-0">✦</div>
        <div className="text-xs text-primary leading-snug">
          <strong className="font-semibold block text-[13px]">Top 15% of your peer group</strong>
          You're above median for this role + location
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 right-5 bg-surface border border-border rounded-pill px-4 py-2 text-xs font-medium shadow-card flex items-center gap-1.5 whitespace-nowrap">
      <span className="w-[7px] h-[7px] rounded-full bg-primary shrink-0" />
      Updated 2 hrs ago
    </div>
  </div>
);

export default HeroCard;
