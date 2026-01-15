"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Utensils, ArrowUpRight } from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-blue-light flex items-center justify-center shadow-lg shadow-blue/20">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-white">Hospitality</span>
                <span className="text-xl font-bold text-blue">Techs</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-white/40 text-xs">
              Managed infrastructure for hospitality venues across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-white/70 hover:text-blue transition-all duration-200 text-sm"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="text-white/60 text-sm hover:text-white/80 transition-colors">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-white/40">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                    <Phone className="h-4 w-4 text-blue" />
                  </div>
                  <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 p-3 -ml-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                    <Mail className="h-4 w-4 text-blue" />
                  </div>
                  <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 p-3 -ml-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white/50" />
                </div>
                <span className="text-white/50 text-sm">
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Hospitality Techs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link 
                href="/terms" 
                className="text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile spacer for sticky CTA */}
      <div className="h-20 md:hidden" />
    </footer>
  );
}
