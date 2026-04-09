import { appConfig } from "@/lib/constants/app-config";
import { SalarioLogo } from "@/components/common/salario-logo";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <PageContainer className="flex items-center justify-between gap-3 py-3 sm:py-4">
        <div className="min-w-0 flex items-center gap-3">
          <SalarioLogo withWordmark className="flex items-center gap-3" />
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

        <Button
          asChild
          variant="outline"
          className="h-10 shrink-0 rounded-full border-foreground/10 bg-panel px-3 text-xs text-foreground hover:border-primary/30 hover:bg-panel hover:text-primary sm:h-11 sm:px-5 sm:text-sm"
        >
          <a href="#valuation-workbench">Check salary</a>
        </Button>
      </PageContainer>
    </header>
  );
}
