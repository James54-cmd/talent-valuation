import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-start justify-center gap-6 rounded-[2rem] border border-border/70 bg-panel px-8 py-12 shadow-soft">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          404
        </span>
        <div className="space-y-3">
          <h1 className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">
            That page is outside the compensation map.
          </h1>
          <p className="max-w-xl text-base leading-7 text-foreground/70">
            The route exists in neither the app shell nor the product roadmap. Let&apos;s get you back to the valuation workspace.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-foreground/85"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
