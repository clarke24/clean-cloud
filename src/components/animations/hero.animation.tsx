"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

export interface HeroAnimationRefs {
  heroRef: RefObject<HTMLElement | null>;
  eyebrowRef: RefObject<HTMLDivElement | null>;
  line1Ref: RefObject<HTMLSpanElement | null>;
  line2Ref: RefObject<HTMLSpanElement | null>;
  line3Ref: RefObject<HTMLSpanElement | null>;
  underlineRef: RefObject<HTMLSpanElement | null>;
  subheadlineRef: RefObject<HTMLParagraphElement | null>;
  promiseRef: RefObject<HTMLParagraphElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
  scrollRef: RefObject<HTMLButtonElement | null>;
  trustBarRef: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation(refs: HeroAnimationRefs) {
  const {
    heroRef,
    eyebrowRef,
    line1Ref,
    line2Ref,
    line3Ref,
    underlineRef,
    subheadlineRef,
    promiseRef,
    ctaRef,
    scrollRef,
    trustBarRef,
  } = refs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the master timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Set initial states
      gsap.set(
        [
          eyebrowRef.current,
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          subheadlineRef.current,
          promiseRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(scrollRef.current, {
        opacity: 0,
      });

      gsap.set(underlineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(trustBarRef.current, {
        opacity: 0,
        y: 20,
      });

      // Animate eyebrow badge
      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      });

      // Animate headline lines with faster stagger
      tl.to(
        line1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.15"
      );

      tl.to(
        line2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.2"
      );

      // "We just sort it." - lands with a slight overshoot
      tl.to(
        line3Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.15"
      );

      // Underline draws in after text lands
      tl.to(
        underlineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.inOut",
        },
        "-=0.1"
      );

      // Animate subheadline
      tl.to(
        subheadlineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.35"
      );

      // Animate promise line
      tl.to(
        promiseRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
        },
        "-=0.15"
      );

      // Animate CTA buttons
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.1"
      );

      // Animate trust bar
      tl.to(
        trustBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.2"
      );

      // Animate scroll indicator
      tl.to(
        scrollRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      );

      // Underline shimmer effect - repeating
      gsap.to(underlineRef.current, {
        backgroundPosition: "200% center",
        duration: 2,
        repeat: -1,
        ease: "none",
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [
    heroRef,
    eyebrowRef,
    line1Ref,
    line2Ref,
    line3Ref,
    underlineRef,
    subheadlineRef,
    promiseRef,
    ctaRef,
    scrollRef,
    trustBarRef,
  ]);
}

