import { useState, forwardRef } from "react";

const fields = [
  { id: "title", label: "Job title", options: ["Senior Software Engineer", "Staff Engineer", "Engineering Manager", "Product Manager", "Data Scientist", "ML Engineer", "Frontend Engineer", "Backend Engineer", "DevOps / Platform", "Designer (UX/Product)"] },
  { id: "experience", label: "Experience", options: ["1–2 years", "3–4 years", "5–7 years", "8–10 years", "10+ years"] },
  { id: "location", label: "Location", options: ["San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX", "Remote (US)", "London, UK", "Berlin, DE", "Singapore"] },
  { id: "industry", label: "Industry", options: ["Big Tech (FAANG+)", "Series B–D Startup", "Early-stage Startup", "Finance / Fintech", "Healthcare / Biotech", "Enterprise SaaS", "Government / Non-profit"] },
  { id: "education", label: "Education", options: ["No degree / Self-taught", "Bootcamp", "B.S. Computer Science", "M.S. Computer Science", "PhD", "MBA"] },
  { id: "size", label: "Company size", options: ["1–10 people", "11–50 people", "51–200 people", "201–1,000 people", "1,001–5,000 people", "5,000+ people"] },
];

const skills = ["TypeScript", "React", "Python", "Node.js", "AWS", "Kubernetes", "PostgreSQL", "GraphQL", "Rust", "Go", "Machine Learning", "System Design"];
const defaultSkills = new Set(["TypeScript", "React", "Node.js", "PostgreSQL"]);

const tabs = ["Predict salary", "Compare roles", "Market trends"];

interface Props {
  onPredict: () => void;
}

const PredictorForm = forwardRef<HTMLDivElement, Props>(({ onPredict }, ref) => {
  const [activeField, setActiveField] = useState("title");
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(defaultSkills);

  const toggleSkill = (s: string) => {
    setSelectedSkills(prev => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  };

  return (
    <section ref={ref} className="max-w-[1100px] mx-auto px-5 md:px-8 py-16">
      <div className="flex items-baseline gap-4 mb-9">
        <span className="font-mono text-xs text-primary tracking-wider px-2 py-0.5 bg-accent-muted rounded-sm">01</span>
        <h2 className="font-display text-[28px] tracking-[-0.8px]">Tell us about your role</h2>
      </div>

      <div className="flex gap-0.5 bg-tag-bg p-1 rounded-pill w-fit mb-9">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-pill text-[13px] border-none cursor-pointer transition-all ${
              activeTab === i ? "bg-surface text-foreground font-medium shadow-sm" : "bg-transparent text-mid"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {fields.map(f => (
          <div
            key={f.id}
            onClick={() => setActiveField(f.id)}
            className={`bg-surface border rounded-md p-4 cursor-pointer transition-all ${
              activeField === f.id ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" : "border-border hover:border-foreground/25"
            }`}
          >
            <div className="text-[11px] font-medium tracking-widest uppercase text-mid mb-2">{f.label}</div>
            <select className="border-none bg-transparent font-body text-[15px] font-medium w-full outline-none cursor-pointer appearance-none">
              {f.options.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-md p-4 mb-6">
        <div className="text-[11px] font-medium tracking-widest uppercase text-mid">Primary skills (select all that apply)</div>
        <div className="flex gap-2 flex-wrap mt-2.5">
          {skills.map(s => (
            <span
              key={s}
              onClick={() => toggleSkill(s)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-pill cursor-pointer transition-all select-none border ${
                selectedSkills.has(s) ? "bg-foreground text-background border-transparent" : "bg-tag-bg border-transparent hover:border-foreground"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onPredict}
        className="flex items-center gap-2.5 bg-primary text-primary-foreground border-none px-9 py-4 rounded-pill font-body text-base font-medium cursor-pointer transition-all hover:brightness-90 hover:scale-[1.02] mb-12"
      >
        Calculate my salary
        <span className="w-[22px] h-[22px] bg-white/20 rounded-full flex items-center justify-center text-xs">→</span>
      </button>
    </section>
  );
});

PredictorForm.displayName = "PredictorForm";
export default PredictorForm;
