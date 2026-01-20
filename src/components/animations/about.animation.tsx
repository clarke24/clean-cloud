"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AboutAnimationRefs {
  heroRef: RefObject<HTMLElement | null>;
  eyebrowRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  storyRef: RefObject<HTMLElement | null>;
  storyContentRef: RefObject<HTMLDivElement | null>;
  storyBoxRef: RefObject<HTMLDivElement | null>;
  founderRef: RefObject<HTMLDivElement | null>;
  valuesRef: RefObject<HTMLElement | null>;
  valueHeaderRef: RefObject<HTMLDivElement | null>;
  valuesGridRef: RefObject<HTMLDivElement | null>;
  scopeRef: RefObject<HTMLElement | null>;
  scopeHeaderRef: RefObject<HTMLDivElement | null>;
  scopeBoxRef: RefObject<HTMLDivElement | null>;
  processRef: RefObject<HTMLElement | null>;
  processHeaderRef: RefObject<HTMLDivElement | null>;
  processStepsRef: RefObject<HTMLDivElement | null>;
}

export function useAboutAnimation(refs: AboutAnimationRefs) {
  const {
    heroRef,
    eyebrowRef,
    headlineRef,
    storyRef,
    storyContentRef,
    storyBoxRef,
    founderRef,
    valuesRef,
    valueHeaderRef,
    valuesGridRef,
    scopeRef,
    scopeHeaderRef,
    scopeBoxRef,
    processRef,
    processHeaderRef,
    processStepsRef,
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

      gsap.set([eyebrowRef.current, headlineRef.current], {
        opacity: 0,
        y: 30,
      });

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

      // Story section animation
      gsap.set([storyContentRef.current, storyBoxRef.current, founderRef.current], {
        opacity: 0,
        y: 40,
      });

      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: storyRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      storyTl.to(storyContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      storyTl.to(
        founderRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Values section animation
      gsap.set(valueHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const valuesCards = valuesGridRef.current?.children;
      if (valuesCards) {
        gsap.set(valuesCards, {
          opacity: 0,
          y: 40,
          scale: 0.95,
        });
      }

      const valuesTl = gsap.timeline({
        scrollTrigger: {
          trigger: valuesRef.current,
          scroller: scrollContainer || undefined,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      valuesTl.to(valueHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      if (valuesCards) {
        valuesTl.to(
          valuesCards,
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

      // Scope section animation
      gsap.set(scopeHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(scopeBoxRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.98,
      });

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

      scopeTl.to(
        scopeBoxRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
        },
        "-=0.2"
      );

      // Process section animation
      gsap.set(processHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const processSteps = processStepsRef.current?.querySelectorAll(".process-step");
      if (processSteps) {
        gsap.set(processSteps, {
          opacity: 0,
          y: 40,
          x: (index: number) => (index % 2 === 0 ? -40 : 40),
        });
      }

      const processTl = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          scroller: scrollContainer || undefined,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      processTl.to(processHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      if (processSteps) {
        processTl.to(
          processSteps,
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "start",
            },
            ease: "power3.out",
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
    storyRef,
    storyContentRef,
    storyBoxRef,
    founderRef,
    valuesRef,
    valueHeaderRef,
    valuesGridRef,
    scopeRef,
    scopeHeaderRef,
    scopeBoxRef,
    processRef,
    processHeaderRef,
    processStepsRef,
  ]);
}
