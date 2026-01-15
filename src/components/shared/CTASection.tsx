import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/content";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to simplify your infrastructure?",
  description = "Get a free consultation and see how Hospitality Techs can keep your restaurant running smoothly.",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-teal hover:bg-teal-light text-white text-lg px-8"
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
            className="border-white text-white hover:bg-white hover:text-navy text-lg px-8"
          >
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

