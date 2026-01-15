"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HowItWorksAnimationRefs {
  sectionRef: RefObject<HTMLElement | null>;
  headerRef: RefObject<HTMLDivElement | null>;
  stepsRef: RefObject<HTMLDivElement | null>;
  connectorsRef: RefObject<(HTMLDivElement | null)[]>;
}

export function useHowItWorksAnimation(refs: HowItWorksAnimationRefs) {
  const { sectionRef, headerRef, stepsRef, connectorsRef } = refs;

  useEffect(() => {
    // Find the scroll container (the snap-y div)
    const scrollContainer = document.querySelector('.snap-y');
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 30,
      });

      // Steps animation - get children
      const steps = stepsRef.current?.children;
      if (steps) {
        gsap.set(steps, {
          opacity: 0,
          y: 40,
        });
      }

      // Connectors animation
      const connectors = connectorsRef.current?.filter(Boolean) || [];
      gsap.set(connectors, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Create ScrollTrigger timeline with custom scroller
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer || undefined,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Animate header
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      // Animate steps with stagger
      if (steps) {
        tl.to(
          steps,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
          },
          "-=0.3"
        );
      }

      // Animate connectors drawing in
      if (connectors.length > 0) {
        tl.to(
          connectors,
          {
            scaleX: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.inOut",
          },
          "-=0.8"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, headerRef, stepsRef, connectorsRef]);
}

// Hover animation for step cards
export function animateStepHover(element: HTMLElement, isEntering: boolean) {
  gsap.to(element, {
    y: isEntering ? -8 : 0,
    scale: isEntering ? 1.02 : 1,
    duration: 0.3,
    ease: "power2.out",
  });
}

// Icon pulse animation
export function animateIconPulse(element: HTMLElement) {
  gsap.to(element, {
    scale: 1.1,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut",
  });
}

