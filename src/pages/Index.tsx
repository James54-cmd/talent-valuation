import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import StatsTicker from "@/components/StatsTicker";
import HeroSection from "@/components/HeroSection";
import PredictorForm from "@/components/PredictorForm";
import ResultPanel from "@/components/ResultPanel";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showResult, setShowResult] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePredict = () => {
    setShowResult(true);
    setTimeout(() => {
      document.getElementById("result-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background">
      <h2 className="sr-only">Salary Predictor — a web app to predict your market salary based on role, skills, experience, and location</h2>
      <Navbar />
      <StatsTicker />
      <HeroSection onScrollToForm={scrollToForm} />
      <PredictorForm ref={formRef} onPredict={handlePredict} />
      {showResult && (
        <div id="result-panel">
          <ResultPanel />
        </div>
      )}
      <div className="h-16" />
    </div>
  );
};

export default Index;
