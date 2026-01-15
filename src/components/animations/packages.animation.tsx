"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PackagesAnimationRefs {
  sectionRef: RefObject<HTMLElement | null>;
  headerRef: RefObject<HTMLDivElement | null>;
  cardsContainerRef: RefObject<HTMLDivElement | null>;
  discountRef: RefObject<HTMLDivElement | null>;
}

export function usePackagesAnimation(refs: PackagesAnimationRefs) {
  const { sectionRef, headerRef, cardsContainerRef, discountRef } = refs;

  useEffect(() => {
    // Find the scroll container
    const scrollContainer = document.querySelector(".snap-y");

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 30,
      });

      const cards = cardsContainerRef.current?.children;
      if (cards) {
        gsap.set(cards, {
          opacity: 0,
          y: 50,
        });
      }

      gsap.set(discountRef.current, {
        opacity: 0,
        y: 20,
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer || undefined,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power2.out",
        },
      });

      // Animate header
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      // Animate cards - center card (popular) first, then sides
      if (cards && cards.length === 3) {
        // Animate center card first (the popular one)
        tl.to(
          cards[1],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );

        // Then animate side cards together
        tl.to(
          [cards[0], cards[2]],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        );
      } else if (cards) {
        // Fallback: stagger all cards
        tl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      // Animate discount note
      tl.to(
        discountRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.2"
      );

      // Animate prices after cards are visible
      const prices = sectionRef.current?.querySelectorAll(".price-value");
      if (prices) {
        prices.forEach((price, index) => {
          const finalValue = parseInt(price.getAttribute("data-value") || "0");
          if (finalValue > 0) {
            gsap.fromTo(
              price,
              { textContent: 0 },
              {
                textContent: finalValue,
                duration: 1,
                delay: 0.8 + index * 0.15,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                  trigger: sectionRef.current,
                  scroller: scrollContainer || undefined,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, headerRef, cardsContainerRef, discountRef]);
}

// Premium hover animation for pricing cards
export function animatePricingCardHover(
  cardElement: HTMLElement,
  isEntering: boolean,
  isPopular: boolean
) {
  // Only lift non-popular cards since popular is already elevated
  const yOffset = isPopular ? -4 : -8;
  
  gsap.to(cardElement, {
    y: isEntering ? yOffset : 0,
    boxShadow: isEntering
      ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      : isPopular
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    duration: 0.3,
    ease: "power2.out",
  });

  // Animate the CTA button
  const button = cardElement.querySelector("button, a[role='button'], .btn-animate");
  if (button) {
    gsap.to(button, {
      scale: isEntering ? 1.02 : 1,
      duration: 0.2,
      ease: "power2.out",
    });
  }
}

// Animate checkmarks on hover
export function animateFeatureList(
  listElement: HTMLElement,
  isEntering: boolean
) {
  const checks = listElement.querySelectorAll("svg");
  
  gsap.to(checks, {
    scale: isEntering ? 1.2 : 1,
    duration: 0.2,
    stagger: 0.03,
    ease: "back.out(2)",
  });
}

