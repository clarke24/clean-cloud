"use client";

import { useRef, useCallback } from "react";
import { howItWorks } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Settings, Shield, Headphones } from "lucide-react";
import {
  useHowItWorksAnimation,
  animateStepHover,
  animateIconPulse,
} from "@/components/animations";

const icons = [Settings, Shield, Headphones];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const connectorsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize animations
  useHowItWorksAnimation({
    sectionRef,
    headerRef,
    stepsRef,
    connectorsRef,
  });

  const setConnectorRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      connectorsRef.current[index] = el;
    },
    []
  );

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Our Process"
            title="How it works"
            description="Three simple steps to reliable infrastructure"
          />
        </div>

        <div
          ref={stepsRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {howItWorks.map((step, index) => {
            const Icon = icons[index];
            return (
              <div
                key={step.step}
                className="relative group"
                onMouseEnter={(e) => animateStepHover(e.currentTarget, true)}
                onMouseLeave={(e) => animateStepHover(e.currentTarget, false)}
              >
                {/* Connector line (desktop only) */}
                {index < howItWorks.length - 1 && (
                  <div
                    ref={setConnectorRef(index)}
                    className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-teal to-teal/30"
                  />
                )}

                <div className="text-center relative">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-teal/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4" />

                  {/* Step number with icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal/10 to-teal/5 flex items-center justify-center border border-teal/10 group-hover:border-teal/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal/10 cursor-pointer"
                      onMouseEnter={(e) => animateIconPulse(e.currentTarget)}
                    >
                      <Icon className="h-10 w-10 text-teal transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-navy to-navy-light text-white text-sm font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="relative mt-6 text-xl font-bold text-navy group-hover:text-teal transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
