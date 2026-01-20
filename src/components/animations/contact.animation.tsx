"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ContactAnimationRefs {
  heroRef: RefObject<HTMLElement | null>;
  eyebrowRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  contentRef: RefObject<HTMLElement | null>;
  formSectionRef: RefObject<HTMLDivElement | null>;
  infoBarsRef: RefObject<HTMLDivElement | null>;
}

export function useContactAnimation(refs: ContactAnimationRefs) {
  const {
    heroRef,
    eyebrowRef,
    headlineRef,
    descriptionRef,
    contentRef,
    formSectionRef,
    infoBarsRef,
  } = refs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation (on mount, no scroll trigger)
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Set initial states
      gsap.set(
        [eyebrowRef.current, headlineRef.current, descriptionRef.current],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Animate hero elements
      heroTl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      });

      heroTl.to(
        headlineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.1)",
        },
        "-=0.2"
      );

      heroTl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.2"
      );

      // Content section animation with ScrollTrigger
      const scrollContainer = document.querySelector(".snap-y");

      gsap.set(formSectionRef.current, {
        opacity: 0,
        y: 40,
      });

      // Get info cards
      const infoCards = infoBarsRef.current?.children;
      if (infoCards) {
        gsap.set(infoCards, {
          opacity: 0,
          y: 30,
          scale: 0.95,
        });
      }

      // Content scroll animation
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Animate form section
      contentTl.to(formSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      // Animate info cards with stagger
      if (infoCards) {
        contentTl.to(
          infoCards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: {
              amount: 0.5,
              from: "start",
            },
            ease: "back.out(1.3)",
          },
          "-=0.3"
        );
      }
    });

    return () => ctx.revert();
  }, [
    heroRef,
    eyebrowRef,
    headlineRef,
    descriptionRef,
    contentRef,
    formSectionRef,
    infoBarsRef,
  ]);
}
