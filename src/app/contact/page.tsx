import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hospitality Techs for a free consultation. We'll assess your infrastructure needs and provide a custom quote.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Let's <span className="text-gradient">talk</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to simplify your infrastructure? Get in touch and we'll
            arrange a free site survey and custom quote.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send us an enquiry
              </h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy">Get in touch</h2>

              {/* Contact cards */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="text-muted-foreground hover:text-teal transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon–Fri, 9am–6pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted-foreground hover:text-teal transition-colors break-all"
                      >
                        {siteConfig.email}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Service Areas</h3>
                      <p className="text-muted-foreground">
                        {siteConfig.serviceAreas.slice(0, 3).join(", ")}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        + {siteConfig.serviceAreas.length - 3} more regions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Installation info */}
              <Card className="border-2 border-teal/20 bg-teal/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        Installation Window
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        We schedule installations during{" "}
                        <strong>quiet hours</strong> to minimise disruption to
                        your service.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Typical slots: Early morning (6–9am) or late evening
                        (9pm–midnight)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response time */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">What happens next</h3>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        <li>1. We'll call within 24 hours</li>
                        <li>2. Free site survey at your convenience</li>
                        <li>3. Custom proposal within 3 days</li>
                        <li>4. Installation at a time that suits you</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

