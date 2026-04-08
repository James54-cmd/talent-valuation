import { appConfig } from "@/lib/constants/app-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <PageContainer className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft">
            PV
          </span>
          <div>
            <p className="font-display text-xl tracking-[-0.04em] text-foreground">{appConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">{appConfig.tagline}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {appConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/65 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="outline" className="rounded-full border-foreground/10 bg-panel text-foreground hover:border-primary/30 hover:bg-panel hover:text-primary">
          <a href="#valuation-workbench">Check my salary</a>
        </Button>
      </PageContainer>
    </header>
  );
}
