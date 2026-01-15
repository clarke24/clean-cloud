"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

export interface NavbarAnimationRefs {
  navRef: RefObject<HTMLElement | null>;
  logoRef: RefObject<HTMLAnchorElement | null>;
  linksRef: RefObject<HTMLDivElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
}

export function useNavbarAnimation(refs: NavbarAnimationRefs) {
  const { navRef, logoRef, linksRef, ctaRef } = refs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(logoRef.current, {
        opacity: 0,
        x: -20,
      });

      gsap.set(linksRef.current?.children || [], {
        opacity: 0,
        y: -10,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        scale: 0.9,
      });

      // Create timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      // Animate logo
      tl.to(logoRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
      });

      // Animate nav links with stagger
      tl.to(
        linksRef.current?.children || [],
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
        },
        "-=0.3"
      );

      // Animate CTA button
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
        },
        "-=0.2"
      );
    }, navRef);

    return () => ctx.revert();
  }, [navRef, logoRef, linksRef, ctaRef]);
}

// Hover animation for nav links
export function animateNavLinkHover(element: HTMLElement, isEntering: boolean) {
  gsap.to(element, {
    y: isEntering ? -2 : 0,
    duration: 0.2,
    ease: "power2.out",
  });
}

// Logo hover animation
export function animateLogoHover(element: HTMLElement, isEntering: boolean) {
  gsap.to(element, {
    scale: isEntering ? 1.02 : 1,
    duration: 0.3,
    ease: "power2.out",
  });
}

