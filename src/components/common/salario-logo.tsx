type SalarioLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

function MarketPulseMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-10 w-10">
      <rect x="4" y="18" width="7" height="14" rx="1.75" fill="#DDD6CF" />
      <rect x="16.5" y="11" width="7" height="21" rx="1.75" fill="#E2B05A" />
      <rect x="29" y="4" width="7" height="28" rx="1.75" fill="#B95222" />
    </svg>
  );
}

function MarketPulseWordmark() {
  return (
    <div className="leading-none">
      <p className="text-[1.4rem] font-extrabold uppercase tracking-[-0.06em] text-foreground">SALARIO<span className="ml-1 font-medium tracking-[0.01em] text-foreground/45">PH</span></p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-foreground/45">Salary guide for the Philippines</p>
    </div>
  );
}

export function SalarioLogo({ className, withWordmark = false }: SalarioLogoProps) {
  return (
    <div className={className}>
      <MarketPulseMark />
      {withWordmark ? <MarketPulseWordmark /> : null}
    </div>
  );
}
