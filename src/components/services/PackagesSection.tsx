import Link from "next/link";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Packages"
          title="Choose your package"
          description="Everything you need in one simple monthly fee"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? "border-teal shadow-lg md:scale-[1.05]"
                  : "border-border hover:border-teal/30"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal hover:bg-teal text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="text-center py-6 border-y border-border">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-navy">
                      £{pkg.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-lg">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    One-time installation: £{pkg.installPrice}
                  </p>
                </div>

                {/* Features */}
                <ul className="py-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full ${
                    pkg.popular
                      ? "bg-teal hover:bg-teal-light text-white"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Multi-site discounts */}
        <div className="mt-16 bg-gradient-to-r from-teal/10 to-success/10 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy">
              Multi-site discounts
            </h3>
            <p className="mt-3 text-muted-foreground">
              Running multiple locations? We reward consistency.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
              {services.discounts.map((discount) => (
                <div
                  key={discount.locations}
                  className="bg-white rounded-xl p-6 shadow-sm flex-1 max-w-xs"
                >
                  <p className="text-4xl font-bold text-teal">
                    {discount.discount}%
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    off monthly fees
                  </p>
                  <p className="mt-4 font-semibold text-navy">
                    {discount.locations} locations
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Discounts applied to all locations. Installation fees remain the
              same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

