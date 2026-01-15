import { Metadata } from "next";
import { ServiceMenu } from "@/components/services/ServiceMenu";
import { PackagesSection } from "@/components/services/PackagesSection";
import { QuoteCalculator } from "@/components/services/QuoteCalculator";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Check, X, Shield, ArrowRight } from "lucide-react";
import { allServicesInclude, whatWeDontDo } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Managed infrastructure packages for restaurants and cafés. Core network, failover, phones, hosting, and more. Simple pricing from £199/month.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
            Services & Pricing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Infrastructure that{" "}
            <span className="text-gradient">just works</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            We manage the technology layer so you can focus on running your
            restaurant. Simple packages, transparent pricing.
          </p>
        </div>
      </section>

      <ServiceMenu />
      <PackagesSection />
      <QuoteCalculator />

      {/* What's included across all services */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Standard"
            title="Included with every service"
            description="No matter which services you choose, you always get:"
          />

          <div className="mt-12">
            <Card className="border-2 border-teal/20 bg-gradient-to-br from-teal/5 to-transparent">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {allServicesInclude.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-teal" />
                      </div>
                      <span className="text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scope section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scope"
            title="What we do (and don't do)"
            description="We're specialists in infrastructure. Here's exactly what's included—and what isn't."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* What we do */}
            <Card className="border-2 border-success/20 bg-success/5">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-navy flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-success" />
                  </div>
                  What we manage
                </h3>
                <ul className="space-y-3">
                  {[
                    "Internet connection and router",
                    "Wi-Fi network and access points",
                    "Network segmentation and security",
                    "4G/5G failover systems",
                    "Business phone system",
                    "Website hosting",
                    "Email and domain management",
                    "Configuration backups",
                    "Office device management (optional)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                      <span className="text-navy/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What we don't do */}
            <Card className="border-2 border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-navy flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <X className="h-5 w-5 text-muted-foreground" />
                  </div>
                  Outside our scope
                </h3>
                <ul className="space-y-3">
                  {whatWeDontDo.items.map((item) => (
                    <li key={item.item} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-navy/80">{item.item}</span>
                        <span className="text-xs text-muted-foreground block">
                          {item.reason}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground border-t border-border pt-4">
                  {whatWeDontDo.intro}
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-muted-foreground">
            Need something specific? We&apos;re happy to discuss your requirements.{" "}
            <Link href="/contact" className="text-teal hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Why this approach */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why we focus on infrastructure
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            By specialising in the connectivity layer—not trying to fix every tech problem—we can deliver a service that&apos;s 
            <span className="text-white font-medium"> reliable, predictable, and fairly priced</span>. 
            You get experts who truly understand your network, not generalists spreading thin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Ready to simplify?"
        description="Get a free site survey and custom quote for your restaurant."
      />
      <Footer />
    </>
  );
}
