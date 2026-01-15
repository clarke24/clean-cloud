"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuoteCalculator() {
  const [locations, setLocations] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("uptime");

  const getDiscount = (locationCount: number): number => {
    if (locationCount >= 6) return 15;
    if (locationCount >= 2) return 10;
    return 0;
  };

  const pkg = services.packages.find((p) => p.id === selectedPackage);
  const discount = getDiscount(locations);
  const monthlyPerSite = pkg ? pkg.monthlyPrice * (1 - discount / 100) : 0;
  const monthlyTotal = monthlyPerSite * locations;
  const installTotal = pkg ? pkg.installPrice * locations : 0;

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-teal/20 shadow-xl">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal/10 mx-auto mb-4">
              <Calculator className="h-8 w-8 text-teal" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Quick Quote Calculator
            </h2>
            <p className="text-muted-foreground mt-2">
              See your estimated monthly cost in seconds
            </p>
          </CardHeader>

          <CardContent className="pt-0 px-6 md:px-12 pb-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                {/* Number of locations */}
                <div>
                  <Label className="text-sm font-semibold text-navy mb-3 block">
                    Number of locations
                  </Label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setLocations(Math.max(1, locations - 1))}
                      className="w-12 h-12 rounded-lg border-2 border-border hover:border-teal text-navy font-bold text-xl transition-colors"
                      aria-label="Decrease locations"
                    >
                      −
                    </button>
                    <span className="text-3xl font-bold text-navy w-12 text-center">
                      {locations}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLocations(locations + 1)}
                      className="w-12 h-12 rounded-lg border-2 border-border hover:border-teal text-navy font-bold text-xl transition-colors"
                      aria-label="Increase locations"
                    >
                      +
                    </button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-success font-medium mt-3">
                      🎉 {discount}% multi-site discount applied!
                    </p>
                  )}
                </div>

                {/* Package selection */}
                <div>
                  <Label className="text-sm font-semibold text-navy mb-3 block">
                    Select package
                  </Label>
                  <div className="grid gap-3">
                    {services.packages.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPackage(p.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedPackage === p.id
                            ? "border-teal bg-teal/5"
                            : "border-border hover:border-teal/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-navy">
                            {p.name}
                          </span>
                          <span className="text-teal font-bold">
                            £{p.monthlyPrice}/mo
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {p.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-lg font-semibold text-white/80 mb-6">
                  Your Estimate
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Package</span>
                    <span className="font-semibold">{pkg?.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Locations</span>
                    <span className="font-semibold">{locations}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/70">Discount</span>
                      <span className="font-semibold text-success">
                        -{discount}%
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Per site/month</span>
                    <span className="font-semibold">
                      £{monthlyPerSite.toFixed(0)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Monthly total</span>
                    <span className="text-3xl font-bold text-teal">
                      £{monthlyTotal.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Installation (one-time)</span>
                    <span className="font-semibold">£{installTotal}</span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full mt-8 bg-teal hover:bg-teal-light text-white"
                >
                  <Link href="/contact">
                    Get Your Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

