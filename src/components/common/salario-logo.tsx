type SalarioLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

function MarketPulseMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9 sm:h-10 sm:w-10">
      <rect x="4" y="18" width="7" height="14" rx="1.75" fill="#DDD6CF" />
      <rect x="16.5" y="11" width="7" height="21" rx="1.75" fill="#E2B05A" />
      <rect x="29" y="4" width="7" height="28" rx="1.75" fill="#B95222" />
    </svg>
  );
}

function MarketPulseWordmark() {
  return (
    <div className="min-w-0 leading-none">
      <p className="text-[1.05rem] font-extrabold uppercase tracking-[-0.06em] text-foreground sm:text-[1.4rem]">
        SALARIO<span className="ml-1 font-medium tracking-[0.01em] text-foreground/45">PH</span>
      </p>
      <p className="mt-1 hidden text-[10px] uppercase tracking-[0.28em] text-foreground/45 sm:block">Salary guide for the Philippines</p>
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
