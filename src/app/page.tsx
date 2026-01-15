import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HighlightCards } from "@/components/home/HighlightCards";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { WhySwitch } from "@/components/home/WhySwitch";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/shared/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-[100dvh] overflow-y-auto scroll-smooth">
      {/* Hero takes full viewport and snaps */}
      <Hero />
      
      {/* Rest of content snaps as one unit */}
      <div id="main-content" className="snap-start">
        <HowItWorks />
        <HighlightCards />
        <PackagesPreview />
        <WhySwitch />
        <FAQ />
        <CTASection />
        <Footer />
        </div>
    </div>
  );
}
