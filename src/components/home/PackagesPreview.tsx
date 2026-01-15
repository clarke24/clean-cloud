"use client";

import { useRef } from "react";
import Link from "next/link";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import {
  usePackagesAnimation,
  animatePricingCardHover,
} from "@/components/animations";

export function PackagesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const discountRef = useRef<HTMLDivElement>(null);

  // Initialize animations
  usePackagesAnimation({
    sectionRef,
    headerRef,
    cardsContainerRef,
    discountRef,
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent packages"
            description="Choose the level of cover that fits your business"
          />
        </div>

        <div
          ref={cardsContainerRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative border-2 transition-colors duration-300 cursor-pointer ${
                pkg.popular
                  ? "border-teal shadow-lg scale-[1.02]"
                  : "border-border hover:border-teal/30"
              }`}
              onMouseEnter={(e) =>
                animatePricingCardHover(e.currentTarget, true, pkg.popular)
              }
              onMouseLeave={(e) =>
                animatePricingCardHover(e.currentTarget, false, pkg.popular)
              }
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal hover:bg-teal text-white px-4 shadow-md">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="text-center py-6 border-y border-border">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-navy">
                      £<span className="price-value" data-value={pkg.monthlyPrice}>
                        {pkg.monthlyPrice}
                      </span>
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Installation: £{pkg.installPrice}
                  </p>
                </div>

                {/* Features */}
                <ul className="py-6 space-y-3">
                  {pkg.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group/feature">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/feature:scale-110" />
                      <span className="text-sm text-navy/80">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 4 && (
                    <li className="text-sm text-teal font-medium">
                      +{pkg.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full btn-animate transition-all duration-200 ${
                    pkg.popular
                      ? "bg-teal hover:bg-teal-light text-white shadow-md hover:shadow-lg"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Multi-site discount note */}
        <div ref={discountRef} className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-medium text-navy">Multiple locations?</span>{" "}
            Get 10% off for 2-5 sites, 15% off for 6+.{" "}
            <Link
              href="/services#packages"
              className="text-teal hover:underline inline-flex items-center gap-1 group"
            >
              View full details
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
