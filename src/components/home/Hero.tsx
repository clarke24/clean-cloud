"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Activity, Zap, Phone, Headphones } from "lucide-react";
import { useHeroAnimation } from "@/components/animations";

const trustPoints = [
  { label: "24/7 Monitoring", icon: Activity },
  { label: "Automatic Failover", icon: Zap },
  { label: "Business Phones", icon: Phone },
  { label: "Fast Support", icon: Headphones },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const promiseRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  // Initialize animations
  useHeroAnimation({
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
  });

  const handleScrollDown = () => {
    const nextSection = document.getElementById("main-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] flex flex-col gradient-hero overflow-hidden snap-start snap-always"
    >
      {/* Fun animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue/15 rounded-full blur-3xl blob-animation" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-blue/10 rounded-full blur-3xl blob-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-blue-light/10 rounded-full blur-3xl blob-animation" style={{ animationDelay: "4s" }} />
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #36454F 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main content - flex-1 to take available space */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}              >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              Managed tech for hospitality
            </div>

            {/* Main headline - The Hook */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight">
              <span ref={line1Ref} className="block">
                Your ISP blames the router.
              </span>
              <span ref={line2Ref} className="block">
                Your IT guy blames the ISP.
              </span>
              <span ref={line3Ref} className="relative block w-fit">
                <span className="text-gradient">We just fix it.</span>
                {/* Animated underline */}
                <span
                  ref={underlineRef}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-1.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #1E90FF 0%, #4DA6FF 40%, #87CEEB 50%, #4DA6FF 60%, #1E90FF 100%)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Internet, phones, Wi-Fi—managed by one team who actually owns the
              problem.{" "}
              <span className="text-charcoal font-medium">
                When broadband fails, backup kicks in. You keep trading.
              </span>
            </p>

            {/* Key promise */}
            <p
              ref={promiseRef}
              className="mt-4 text-base md:text-lg text-charcoal/80 font-medium"
            >
              One number. One team.{" "}
              <span className="text-blue" style={{ fontWeight: 900 }}>
                Sorted.
              </span>
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue text-white text-base md:text-lg px-6 md:px-8 h-12 md:h-14 shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/35 transition-all duration-300 hover:-translate-y-1 rounded-xl"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white text-base md:text-lg px-6 md:px-8 h-12 md:h-14 transition-all duration-300 hover:-translate-y-1 rounded-xl"
              >
                <Link href="/services#packages">See Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar - at the bottom */}
      <div ref={trustBarRef} className="relative bg-charcoal py-4 md:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-12 lg:gap-x-16">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-white/90"
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-blue" />
                  <span className="text-xs md:text-sm font-medium">
                    {point.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator - above trust bar */}
      <button
        ref={scrollRef}
        onClick={handleScrollDown}
        className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to content"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] md:text-xs text-charcoal/40 uppercase tracking-widest group-hover:text-charcoal/60 transition-colors">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-charcoal/40 smooth-bounce group-hover:text-charcoal/60 transition-colors" />
        </div>
      </button>
    </section>
  );
}
