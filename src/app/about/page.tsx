import { Metadata } from "next";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { aboutValues, aboutProcess } from "@/lib/content";
import { Check, X, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Hospitality Techs exists because restaurants deserve stable, reliable technology. Learn about our mission and values.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Restaurants deserve{" "}
            <span className="text-gradient">reliable tech</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            We started Hospitality Techs because we saw too many restaurants
            struggling with unreliable internet, confusing phone systems, and
            finger-pointing between providers.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-6 text-muted-foreground">
                <p className="text-xl leading-relaxed">
                  Picture this: It's a busy Saturday night. Cards aren't going
                  through. The Wi-Fi is down. Customers are frustrated. You
                  call your ISP—they blame the router. You call the IT guy—he
                  blames the ISP. Meanwhile, you're losing money.
                </p>
                <p className="leading-relaxed">
                  This happens every day in restaurants across the UK. The
                  problem isn't just bad technology—it's that nobody owns the
                  problem. Hospitality venues end up with a patchwork of
                  consumer-grade equipment, multiple providers, and no clear
                  accountability.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-charcoal">
                    We built Hospitality Techs to fix this.
                  </strong>{" "}
                  One provider for your entire infrastructure layer. One number
                  to call. One team that owns the problem from end to end.
                </p>
                <p className="leading-relaxed">
                  We install business-grade equipment designed for busy
                  hospitality environments. We configure it properly—with
                  failover, prioritisation, and remote monitoring. And when
                  something goes wrong, we fix it. No finger-pointing. No
                  runaround.
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-blue/10 to-blue-light/10 rounded-2xl p-6 md:p-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
                    <User className="h-8 w-8 text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">
                    Founder's Note
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    "After years of watching restaurants struggle with IT
                    headaches, I knew there had to be a better way. Hospitality Techs
                    is that better way—infrastructure that actually works, from
                    people who understand hospitality."
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
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What we stand for"
            description="The principles that guide everything we do"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scope"
            title="What we do (and don't do)"
            description="We're laser-focused on infrastructure. That's our expertise."
          />

          <div className="mt-12 bg-gradient-to-br from-off-white to-white rounded-2xl border-2 border-border overflow-hidden">
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
                    "Internet & network",
                    "Wi-Fi systems",
                    "4G/5G failover",
                    "Business phones",
                    "Website hosting",
                    "Email & domains",
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
                    "POS software bugs",
                    "Card terminals",
                    "Printers",
                    "Personal devices",
                    "Kitchen equipment",
                    "CCTV or AV",
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
      <section className="py-20 md:py-28 bg-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How we work"
            description="From first call to ongoing support"
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-[1.1rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue via-blue/50 to-blue/20" />

            <div className="space-y-12">
              {aboutProcess.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-8 ${
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
        title="Ready to make the switch?"
        description="Book a free consultation and see how we can simplify your infrastructure."
      />
      <Footer />
    </>
  );
}
