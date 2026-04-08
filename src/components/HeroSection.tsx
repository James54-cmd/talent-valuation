import HeroCard from "./HeroCard";

interface Props {
  onScrollToForm: () => void;
}

const HeroSection = ({ onScrollToForm }: Props) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1100px] mx-auto px-5 md:px-8 pt-12 md:pt-[72px] pb-16">
    <div>
      <div className="inline-flex items-center gap-1.5 bg-accent-muted text-primary text-xs font-medium tracking-widest uppercase px-3.5 py-1.5 rounded-pill mb-5">
        ✦ AI-powered salary intelligence
      </div>
      <h1 className="font-display text-4xl md:text-[52px] leading-[1.08] tracking-[-1.5px] mb-5">
        Know your <em className="text-primary italic">true</em> market value.
      </h1>
      <p className="text-base text-mid leading-relaxed mb-9 max-w-[400px] font-light">
        Real-time salary predictions built on 120K+ verified data points. No guessing, no fluff — just your number.
      </p>
      <div className="flex gap-3 items-center flex-wrap">
        <button onClick={onScrollToForm} className="bg-primary text-primary-foreground border-none px-7 py-3.5 rounded-pill font-body text-[15px] font-medium cursor-pointer transition-all hover:brightness-90 hover:scale-[1.02]">
          Get my prediction
        </button>
        <button className="bg-transparent text-foreground border border-border px-7 py-3.5 rounded-pill font-body text-[15px] cursor-pointer transition-all hover:border-foreground hover:bg-tag-bg">
          See benchmarks →
        </button>
      </div>
    </div>
    <HeroCard />
  </section>
);

export default HeroSection;
