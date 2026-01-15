"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HighlightCardsAnimationRefs {
  sectionRef: RefObject<HTMLElement | null>;
  headerRef: RefObject<HTMLDivElement | null>;
  cardsRef: RefObject<HTMLDivElement | null>;
}

export function useHighlightCardsAnimation(refs: HighlightCardsAnimationRefs) {
  const { sectionRef, headerRef, cardsRef } = refs;

  useEffect(() => {
    // Find the scroll container (the snap-y div)
    const scrollContainer = document.querySelector(".snap-y");

    const ctx = gsap.context(() => {
      // Header animation
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 40,
      });

      // Cards animation - get children
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.set(cards, {
          opacity: 0,
          y: 60,
          scale: 0.95,
        });
      }

      // Create ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer || undefined,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Animate header with a slight bounce
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
      });

      // Animate cards with stagger - wave effect from left to right
      if (cards) {
        tl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: {
              amount: 0.6,
              from: "start",
            },
            ease: "back.out(1.4)",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, headerRef, cardsRef]);
}

// Hover animation for cards with icon glow
export function animateCardHover(
  cardElement: HTMLElement,
  isEntering: boolean
) {
  const icon = cardElement.querySelector(".icon-container");

  gsap.to(cardElement, {
    y: isEntering ? -8 : 0,
    boxShadow: isEntering
      ? "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    duration: 0.3,
    ease: "power2.out",
  });

  if (icon) {
    gsap.to(icon, {
      scale: isEntering ? 1.1 : 1,
      rotate: isEntering ? 5 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }
}

// Icon pulse animation on scroll reveal
export function animateIconReveal(iconElement: HTMLElement, delay: number) {
  gsap.fromTo(
    iconElement,
    { scale: 0, rotate: -45 },
    {
      scale: 1,
      rotate: 0,
      duration: 0.5,
      delay,
      ease: "back.out(2)",
    }
  );
}

