type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </span>
      <div className="space-y-2">
        <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
