"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  variant?: "rise" | "left" | "right" | "scale";
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
  variant = "rise",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={cn("scroll-reveal", `scroll-reveal-${variant}`, isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
