"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { aboutValues, aboutProcess } from "@/lib/content";
import { Check, X, User } from "lucide-react";
import { useAboutAnimation } from "@/components/animations";

export default function AboutPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const storyBoxRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const valueHeaderRef = useRef<HTMLDivElement>(null);
  const valuesGridRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLElement>(null);
  const scopeHeaderRef = useRef<HTMLDivElement>(null);
  const scopeBoxRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const processHeaderRef = useRef<HTMLDivElement>(null);
  const processStepsRef = useRef<HTMLDivElement>(null);

  useAboutAnimation({
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
  });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-16 pb-20 md:pt-24 md:pb-28 gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p ref={eyebrowRef} className="text-blue font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Hospitality deserves{" "}
            <span className="text-gradient">reliable technology</span>
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section ref={storyRef} className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div ref={storyContentRef} className="md:col-span-3 space-y-5 text-muted-foreground">
              <p className="text-base leading-relaxed">
                We started Hospitality Techs because hospitality businesses deserve infrastructure that simply works. Too often, venues face unreliable internet, finger-pointing between providers, and no single owner of the problem.
              </p>
              
              <div className="bg-teal/5 border-l-4 border-teal px-4 py-3 rounded">
                <p className="text-sm font-semibold text-charcoal mb-1">The problem:</p>
                <p className="text-sm">Payments fail. Wi-Fi drops. Many different providers, no responsibility. Your issue.</p>
              </div>

              <p className="leading-relaxed">
                <strong className="text-charcoal">One provider. One number. One accountable team.</strong> We manage your entire infrastructure layer — network, Wi-Fi, failover, phones, websites, and email. When something breaks, we fix it. No finger-pointing. No runaround.
              </p>

              <p className="leading-relaxed">
                Our clients don't need to understand the technology. They just need it to work.
              </p>
            </div>

            <div className="md:col-span-2">
              <div ref={founderRef} className="bg-gradient-to-br from-blue/10 to-blue-light/10 rounded-2xl p-6 md:p-8 sticky top-8">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
                  <User className="h-8 w-8 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  Founder's Note
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  "Hospitality Techs was built to protect non-technical restaurateurs."
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  "We bring the power of great tech — without the jargon, stress, or surprise costs."
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "Our partner-first approach means we get to know your business and support you for the long haul. Simple. Reliable. Built for hospitality."
                </p>

                <p className="text-sm font-semibold text-charcoal">
                  [Founder Name]
                </p>
                <p className="text-xs text-muted-foreground">
                  Founder, Hospitality Techs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 md:py-28 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={valueHeaderRef}>
            <SectionHeader
              eyebrow="Our Values"
              title="What guides everything we do"
              description=""
            />
          </div>

          <div ref={valuesGridRef} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/10 to-blue-light/10 flex items-center justify-center mb-5">
                    <span className="text-xl font-bold text-blue">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we do / don't do */}
      <section ref={scopeRef} className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div ref={scopeHeaderRef}>
            <SectionHeader
              eyebrow="Scope"
              title="What we manage — and what we don't"
              description="We are deliberately focused on infrastructure. That's where we add the most value."
            />
          </div>

          <div ref={scopeBoxRef} className="mt-12 bg-gradient-to-br from-off-white to-white rounded-2xl border-2 border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* What we do */}
              <div className="p-8 md:p-10">
                <h3 className="text-lg font-bold text-charcoal flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  We manage
                </h3>
                <ul className="space-y-3">
                  {[
                    "Internet & network infrastructure",
                    "Managed Wi-Fi systems",
                    "4G/5G failover connectivity",
                    "Business phone systems",
                    "Website hosting",
                    "Email & domain management",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-charcoal/80"
                    >
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we don't do */}
              <div className="p-8 md:p-10 bg-muted/30 md:border-l border-t md:border-t-0 border-border">
                <h3 className="text-lg font-bold text-charcoal flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="h-4 w-4 text-muted-foreground" />
                  </div>
                  We don't manage
                </h3>
                <ul className="space-y-3">
                  {[
                    "POS software issues",
                    "Card terminals",
                    "Printers",
                    "Personal devices",
                    "Kitchen equipment",
                    "CCTV or AV systems",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-20 md:py-28 bg-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div ref={processHeaderRef}>
            <SectionHeader
              eyebrow="Our Process"
              title="How we work"
              description="From first call to ongoing support"
            />
          </div>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-[1.1rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue via-blue/50 to-blue/20" />

            <div ref={processStepsRef} className="space-y-12">
              {aboutProcess.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-8 process-step ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg shadow-blue/25">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to simplify your infrastructure?"
        description="Book a free consultation and see how Hospitality Techs can remove the technology stress from your business."
      />
      <Footer />
    </>
  );
}
