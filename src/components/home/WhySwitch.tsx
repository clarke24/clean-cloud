"use client";

import { useRef, useEffect } from "react";
import { whySwitch } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Check, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhySwitch() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scrollContainer = document.querySelector(".snap-y");

    const ctx = gsap.context(() => {
      // Animate content
      gsap.set(contentRef.current, { opacity: 0, x: -40 });
      gsap.set(dashboardRef.current, { opacity: 0, x: 40, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scroller: scrollContainer,
        },
      });

      tl.to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      }).to(
        dashboardRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      );

      // Animate the uptime bars with stagger
      gsap.fromTo(
        barsRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            scroller: scrollContainer,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-off-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div ref={contentRef}>
            <SectionHeader
              eyebrow="Why Hospitality Techs"
              title="What competitors rarely offer"
              centered={false}
            />

            <div className="mt-10 space-y-5">
              {whySwitch.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue/10 to-blue-light/10 flex items-center justify-center group-hover:from-blue group-hover:to-blue-light transition-all duration-300">
                    <Check className="h-5 w-5 text-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal group-hover:text-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Dashboard */}
          <div ref={dashboardRef} className="relative">
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue/20 rounded-full blur-3xl blob-animation" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-light/15 rounded-full blur-3xl blob-animation" style={{ animationDelay: "3s" }} />

            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light p-6 md:p-8 shadow-2xl shadow-charcoal/20">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue/10 via-transparent to-blue-light/5" />
              
              {/* Mock monitoring dashboard */}
              <div className="relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-5 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-success animate-ping opacity-50" />
                    </div>
                    <span className="text-white font-medium text-sm">
                      All Systems Operational
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-blue-light" />
                </div>

                {/* Services list */}
                <div className="space-y-1">
                  {[
                    { name: "Primary Internet", status: "online", uptime: "99.9%" },
                    { name: "4G Failover", status: "standby", uptime: "Ready" },
                    { name: "POS Network", status: "online", uptime: "99.9%" },
                    { name: "Phone System", status: "online", uptime: "99.8%" },
                    { name: "Guest Wi-Fi", status: "online", uptime: "99.7%" },
                  ].map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 group-hover/item:scale-125 ${
                            service.status === "online"
                              ? "bg-success shadow-lg shadow-success/30"
                              : "bg-amber-400 shadow-lg shadow-amber-400/30"
                          }`}
                        />
                        <span className="text-white/80 text-sm font-medium">
                          {service.name}
                        </span>
                      </div>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                        service.status === "standby" 
                          ? "bg-amber-400/10 text-amber-400"
                          : "bg-white/5 text-white/60"
                      }`}>
                        {service.uptime}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Uptime graph */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/50 text-xs font-medium">30-day uptime</span>
                    <span className="text-blue-light text-sm font-bold">99.9%</span>
                  </div>
                  <div className="flex gap-1 items-end h-10">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        ref={(el) => (barsRef.current[i] = el)}
                        className={`flex-1 rounded-t-sm origin-bottom transition-all duration-200 hover:opacity-100 ${
                          i === 14 
                            ? "bg-amber-400/60 hover:bg-amber-400" 
                            : "bg-success/50 hover:bg-success"
                        }`}
                        style={{ 
                          height: `${70 + Math.random() * 30}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative offset card */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-blue/20 to-blue-light/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
