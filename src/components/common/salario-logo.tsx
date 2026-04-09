type SalarioLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function SalarioLogo({ className, withWordmark = false }: SalarioLogoProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11 drop-shadow-[0_10px_20px_rgba(111,55,26,0.14)]">
        <defs>
          <linearGradient id="salario-sunrise" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#D97A3A" />
            <stop offset="1" stopColor="#9D4322" />
          </linearGradient>
          <linearGradient id="salario-gold" x1="18" y1="16" x2="48" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F4C76E" />
            <stop offset="1" stopColor="#E4A73F" />
          </linearGradient>
        </defs>

        <rect x="6" y="6" width="52" height="52" rx="18" fill="url(#salario-sunrise)" />
        <path
          d="M18 40C18 31 24 24 33 24C36.6 24 39.8 25.1 42.4 27.1"
          fill="none"
          stroke="#FFF7EF"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M46 24V40.5C46 43.2 44.4 45.5 41.9 46.6C39.8 47.6 37.3 48.2 34.5 48.2C27.1 48.2 21.5 44.9 18.7 39.8"
          fill="none"
          stroke="#FFF7EF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="23" y="33" width="5.5" height="10" rx="2.75" fill="url(#salario-gold)" />
        <rect x="31.5" y="28" width="5.5" height="15" rx="2.75" fill="url(#salario-gold)" />
        <rect x="40" y="22" width="5.5" height="21" rx="2.75" fill="url(#salario-gold)" />
      </svg>

      {withWordmark ? (
        <div className="leading-none">
          <p className="font-display text-xl tracking-[-0.04em] text-foreground">SalarioPH</p>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">Salary guide for the Philippines</p>
        </div>
      ) : null}
    </div>
  );
}
