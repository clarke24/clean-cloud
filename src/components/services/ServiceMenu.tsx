"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Wifi,
  Zap,
  Phone,
  Globe,
  Mail,
  HardDrive,
  Monitor,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Gift,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ElementType> = {
  "core-network": Wifi,
  failover: Zap,
  phones: Phone,
  website: Globe,
  "email-domain": Mail,
  backup: HardDrive,
  "managed-device": Monitor,
};

export function ServiceMenu() {
  const [expandedService, setExpandedService] = useState<string | null>(
    "core-network"
  );

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we offer"
          title="Services menu"
          description="Everything you need to keep your restaurant connected and running smoothly"
        />

        <div className="mt-16 space-y-4">
          {services.menu.map((service) => {
            const Icon = serviceIcons[service.id] || Wifi;
            const isExpanded = expandedService === service.id;

            return (
              <Card
                key={service.id}
                className={cn(
                  "border-2 transition-all duration-300 overflow-hidden",
                  service.mandatory
                    ? "border-teal bg-gradient-to-r from-teal/5 to-transparent"
                    : isExpanded
                      ? "border-teal/50 shadow-lg"
                      : "border-border hover:border-teal/30"
                )}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                        service.mandatory || isExpanded
                          ? "bg-teal text-white"
                          : "bg-teal/10 text-teal"
                      )}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold text-navy">
                          {service.title}
                        </h3>
                        {service.mandatory && (
                          <Badge className="bg-teal hover:bg-teal text-white">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-1">
                        {service.description}
                      </p>
                      <p className="text-sm font-semibold text-teal mt-2">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                      isExpanded
                        ? "bg-teal text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <CardContent className="px-6 md:px-8 pb-8 pt-0">
                      <div className="border-t border-border pt-8">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* What you get */}
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-navy mb-4">
                              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                                <Check className="h-4 w-4 text-teal" />
                              </div>
                              What you get
                            </h4>
                            <ul className="space-y-3">
                              {service.whatYouGet?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5"
                                >
                                  <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-navy/80">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What it means for you */}
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-navy mb-4">
                              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                <Lightbulb className="h-4 w-4 text-amber-600" />
                              </div>
                              What this means for you
                            </h4>
                            <ul className="space-y-3">
                              {service.whatItMeans?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                                  <span className="text-sm text-navy/80">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What's included */}
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-navy mb-4">
                              <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                                <Gift className="h-4 w-4 text-success" />
                              </div>
                              Included
                            </h4>
                            <ul className="space-y-3">
                              {service.included?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5"
                                >
                                  <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-navy/80">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* Extra value section */}
                            {service.extraValue && (
                              <div className="mt-4 p-3 bg-teal/5 rounded-lg border border-teal/20">
                                <p className="text-sm font-medium text-teal mb-2">
                                  {service.extraValue.title}:
                                </p>
                                <ul className="space-y-1">
                                  {service.extraValue.items.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-xs text-navy/70 flex items-center gap-1.5"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-teal" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Note if present */}
                        {service.note && (
                          <div className="mt-6 flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                            <Info className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                              {service.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View all expanded button */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() =>
              setExpandedService(expandedService ? null : "core-network")
            }
            className="text-navy border-navy hover:bg-navy hover:text-white"
          >
            {expandedService ? "Collapse details" : "Expand all details"}
          </Button>
        </div>
      </div>
    </section>
  );
}
