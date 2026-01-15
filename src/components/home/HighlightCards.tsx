"use client";

import { useRef } from "react";
import { highlightCards } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { DynamicIcon } from "@/components/shared/IconMap";
import { Card, CardContent } from "@/components/ui/card";
import {
  useHighlightCardsAnimation,
  animateCardHover,
} from "@/components/animations";

export function HighlightCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Initialize animations
  useHighlightCardsAnimation({
    sectionRef,
    headerRef,
    cardsRef,
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-off-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Benefits"
            title="Built for hospitality"
            description="Infrastructure that understands your business"
          />
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlightCards.map((card) => (
            <Card
              key={card.title}
              className="group bg-white border-0 shadow-sm transition-colors duration-300 cursor-pointer"
              onMouseEnter={(e) => animateCardHover(e.currentTarget, true)}
              onMouseLeave={(e) => animateCardHover(e.currentTarget, false)}
            >
              <CardContent className="p-6">
                <div className="icon-container w-14 h-14 rounded-xl bg-gradient-to-br from-teal/10 to-teal/5 flex items-center justify-center group-hover:from-teal group-hover:to-teal-light transition-colors duration-300">
                  <DynamicIcon
                    name={card.icon}
                    className="h-7 w-7 text-teal group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-teal transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
