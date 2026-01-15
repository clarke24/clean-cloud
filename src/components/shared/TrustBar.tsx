import { Activity, Zap, Phone, Headphones } from "lucide-react";
import { trustPoints } from "@/lib/content";

const icons = [Activity, Zap, Phone, Headphones];

export function TrustBar() {
  return (
    <section className="bg-navy py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-16">
          {trustPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <div
                key={point.label}
                className="flex items-center gap-2 text-white/90"
              >
                <Icon className="h-5 w-5 text-teal" />
                <span className="text-sm font-medium">{point.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

