"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Utensils, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand - Compact */}
          <div className="space-y-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-blue-light flex items-center justify-center">
                <Utensils className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-white">Hospitality</span>
                <span className="text-base font-bold text-blue">Techs</span>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-tight max-w-xs">
              {siteConfig.missionStatement}
            </p>
            <p className="text-white/50 text-xs leading-tight max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/50">
              Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-blue transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Compact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/50">
              Coverage
            </h3>
            <ul className="space-y-1.5">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="text-white/60 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Compact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/50">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-white/60 hover:text-blue transition-colors text-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-blue/70 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-blue transition-colors text-sm"
                >
                  <Mail className="h-3.5 w-3.5 text-blue/70 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 mb-3">Follow us</p>
              <div className="flex gap-3">
                <a href="#" className="p-1.5 rounded-lg bg-white/5 hover:bg-blue/20 text-white/60 hover:text-blue transition-all">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="p-1.5 rounded-lg bg-white/5 hover:bg-blue/20 text-white/60 hover:text-blue transition-all">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="p-1.5 rounded-lg bg-white/5 hover:bg-blue/20 text-white/60 hover:text-blue transition-all">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - Slim */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-white/40">
              © {new Date().getFullYear()} Hospitality Techs
            </p>
            <div className="flex items-center gap-4 text-white/40">
              <Link 
                href="/privacy" 
                className="hover:text-white/70 transition-colors"
              >
                Privacy
              </Link>
              <span>•</span>
              <Link 
                href="/terms" 
                className="hover:text-white/70 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
