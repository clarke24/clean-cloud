"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ServicesAnimationRefs {
  heroRef: RefObject<HTMLElement | null>;
  eyebrowRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  serviceMenuRef: RefObject<HTMLElement | null>;
  packagesHeaderRef: RefObject<HTMLDivElement | null>;
  packagesCardsRef: RefObject<HTMLDivElement | null>;
  packagesDiscountRef: RefObject<HTMLDivElement | null>;
  includedRef: RefObject<HTMLElement | null>;
  includedHeaderRef: RefObject<HTMLDivElement | null>;
  includedCardRef: RefObject<HTMLDivElement | null>;
  scopeRef: RefObject<HTMLElement | null>;
  scopeHeaderRef: RefObject<HTMLDivElement | null>;
  scopeCardsRef: RefObject<HTMLDivElement | null>;
  whyRef: RefObject<HTMLElement | null>;
}

export function useServicesAnimation(refs: ServicesAnimationRefs) {
  const {
    heroRef,
    eyebrowRef,
    headlineRef,
    descriptionRef,
    serviceMenuRef,
    packagesHeaderRef,
    packagesCardsRef,
    packagesDiscountRef,
    includedRef,
    includedHeaderRef,
    includedCardRef,
    scopeRef,
    scopeHeaderRef,
    scopeCardsRef,
    whyRef,
  } = refs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = document.querySelector(".snap-y");

      // Hero animation (on mount)
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      gsap.set(
        [eyebrowRef.current, headlineRef.current, descriptionRef.current],
        {
          opacity: 0,
          y: 30,
        }
      );

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

      // Service menu animation with scroll trigger
      gsap.set(serviceMenuRef.current, {
        opacity: 0,
        y: 40,
      });

      const menuTl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceMenuRef.current,
          scroller: scrollContainer || undefined,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      menuTl.to(serviceMenuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      // Packages section animation - same style as home page
      gsap.set(packagesHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const cards = packagesCardsRef.current?.children;
      if (cards) {
        gsap.set(cards, {
          opacity: 0,
          y: 50,
        });
      }

      gsap.set(packagesDiscountRef.current, {
        opacity: 0,
        y: 20,
      });

      const packagesTl = gsap.timeline({
        scrollTrigger: {
          trigger: packagesHeaderRef.current,
          scroller: scrollContainer || undefined,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power2.out",
        },
      });

      // Animate header
      packagesTl.to(packagesHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });

      // Animate cards - center card (popular) first, then sides
      if (cards && cards.length === 3) {
        // Animate center card first (the popular one)
        packagesTl.to(
          cards[1],
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power3.out",
          },
          "-=0.1"
        );

        // Then animate side cards together
        packagesTl.to(
          [cards[0], cards[2]],
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.15"
        );
      } else if (cards) {
        // Fallback: stagger all cards
        packagesTl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.1"
        );
      }

      // Animate discount note
      packagesTl.to(
        packagesDiscountRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
        },
        "-=0.1"
      );

      // Included section animation
      gsap.set([includedHeaderRef.current, includedCardRef.current], {
        opacity: 0,
        y: 40,
      });

      const includedTl = gsap.timeline({
        scrollTrigger: {
          trigger: includedRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      includedTl.to(includedHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      includedTl.to(
        includedCardRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.2"
      );

      // Scope section animation
      gsap.set(scopeHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const scopeCards = scopeCardsRef.current?.children;
      if (scopeCards) {
        gsap.set(scopeCards, {
          opacity: 0,
          y: 40,
          scale: 0.95,
        });
      }

      const scopeTl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      scopeTl.to(scopeHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      if (scopeCards) {
        scopeTl.to(
          scopeCards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: {
              amount: 0.4,
              from: "start",
            },
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );
      }

      // Why section animation
      gsap.set(whyRef.current, {
        opacity: 0,
        y: 40,
      });

      const whyTl = gsap.timeline({
        scrollTrigger: {
          trigger: whyRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      whyTl.to(whyRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });
    });

    return () => ctx.revert();
  }, [
    heroRef,
    eyebrowRef,
    headlineRef,
    descriptionRef,
    serviceMenuRef,
    packagesHeaderRef,
    packagesCardsRef,
    packagesDiscountRef,
    includedRef,
    includedHeaderRef,
    includedCardRef,
    scopeRef,
    scopeHeaderRef,
    scopeCardsRef,
    whyRef,
  ]);
}
