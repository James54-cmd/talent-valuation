const factors = [
  { name: "Location (SF)", pct: "+28%", w: "92%", cls: "bg-primary" },
  { name: "Experience", pct: "+18%", w: "76%", cls: "bg-primary" },
  { name: "Skills stack", pct: "+9%", w: "55%", cls: "bg-gold" },
  { name: "Company size", pct: "+4%", w: "38%", cls: "bg-gold" },
  { name: "Industry", pct: "−3%", w: "20%", cls: "bg-tag-bg border border-border" },
];

const comp = [
  { label: "Base salary", val: "$156,200", delta: "+8%", up: true },
  { label: "Annual bonus", val: "$18,000", delta: "+5%", up: true },
  { label: "Equity (est.)", val: "$45,000", delta: "−2%", up: false },
];

const roles = [
  { name: "Senior Software Engineer", company: "Stripe · San Francisco", salary: "$165K – $195K" },
  { name: "Senior Full-Stack Engineer", company: "Linear · Remote (US)", salary: "$155K – $185K" },
  { name: "Software Engineer L5", company: "Google · Mountain View", salary: "$178K – $220K" },
];

const ResultPanel = () => (
  <div className="animate-slide-up max-w-[1100px] mx-auto px-5 md:px-8">
    <div className="flex items-baseline gap-4 mb-9">
      <span className="font-mono text-xs text-primary tracking-wider px-2 py-0.5 bg-accent-muted rounded-sm">02</span>
      <h2 className="font-display text-[28px] tracking-[-0.8px]">Your prediction</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5">
      {/* Main result */}
      <div className="bg-surface border border-border rounded-lg p-7">
        <div className="flex justify-between items-center mb-7">
          <div>
            <div className="text-[11px] tracking-widest uppercase text-mid mb-1">Predicted base salary</div>
            <div className="font-display text-[52px] tracking-[-2px] leading-none">
              <sup className="font-body text-[22px] tracking-normal align-super text-primary">$</sup>156,200
            </div>
          </div>
          <span className="bg-green-50 text-green-800 text-[11px] font-medium px-2.5 py-1 rounded-pill tracking-wide">88% confidence</span>
        </div>

        <div className="bg-tag-bg rounded-full h-2.5 my-6 relative">
          <div className="absolute h-full bg-gradient-to-r from-accent-muted to-primary rounded-full" style={{ left: "20%", width: "60%" }} />
          <div className="absolute w-3.5 h-3.5 bg-primary border-2 border-surface rounded-full -top-[3px] left-1/2 -translate-x-1/2 shadow-md" />
        </div>
        <div className="flex justify-between text-xs font-mono text-mid mb-7">
          <span>$138K</span>
          <span className="text-primary font-medium">$156K · you</span>
          <span>$178K</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "25th pct.", val: "$138K", highlight: false },
            { label: "Median", val: "$156K", highlight: true },
            { label: "75th pct.", val: "$178K", highlight: false },
          ].map(p => (
            <div key={p.label} className={`bg-background rounded-md p-3.5 text-center ${p.highlight ? "border-[1.5px] border-primary" : ""}`}>
              <div className="text-[11px] text-mid uppercase tracking-wider mb-1">{p.label}</div>
              <div className={`text-xl font-display ${p.highlight ? "text-primary" : ""}`}>{p.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Side panels */}
      <div className="flex flex-col gap-4">
        <div className="bg-surface border border-border rounded-lg p-[22px]">
          <div className="text-[13px] font-medium mb-4">What's driving this</div>
          {factors.map(f => (
            <div key={f.name} className="flex items-center gap-2.5 mb-3">
              <span className="text-[13px] text-mid flex-1">{f.name}</span>
              <div className="w-20 h-[5px] bg-tag-bg rounded-full overflow-hidden shrink-0">
                <div className={`h-full rounded-full ${f.cls}`} style={{ width: f.w }} />
              </div>
              <span className="text-xs font-mono min-w-[28px] text-right">{f.pct}</span>
            </div>
          ))}
        </div>

        <div className="bg-foreground text-background rounded-lg p-[22px]">
          <div className="text-[13px] font-medium mb-4 text-background/60">Total compensation</div>
          {comp.map(c => (
            <div key={c.label} className="flex justify-between items-baseline mb-3.5 pb-3.5 border-b border-white/[0.08] last:mb-0 last:pb-0 last:border-none">
              <span className="text-[13px] text-background/55">{c.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">{c.val}</span>
                <span className={`text-[11px] px-[7px] py-0.5 rounded-pill font-medium ${c.up ? "bg-green-700/30 text-green-400" : "bg-red-700/30 text-red-400"}`}>{c.delta}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-[13px] font-medium text-background/85">Total est. comp</span>
            <span className="font-mono text-[17px] text-gold">$219,200</span>
          </div>
        </div>
      </div>
    </div>

    {/* Similar roles */}
    <div className="mt-12 pt-12 border-t border-border">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-primary tracking-wider px-2 py-0.5 bg-accent-muted rounded-sm">03</span>
        <h2 className="font-display text-[28px] tracking-[-0.8px]">Similar roles hiring now</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {roles.map(r => (
          <div key={r.name} className="bg-surface border border-border rounded-md p-5 cursor-pointer transition-all hover:border-primary hover:-translate-y-0.5 hover:shadow-card">
            <div className="text-sm font-medium mb-1">{r.name}</div>
            <div className="text-xs text-mid mb-3">{r.company}</div>
            <div className="font-mono text-base text-primary font-medium">{r.salary}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ResultPanel;
