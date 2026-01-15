"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X, Phone, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/content";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  useNavbarAnimation,
  animateNavLinkHover,
  animateLogoHover,
} from "@/components/animations";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Refs for animations
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Initialize animations
  useNavbarAnimation({
    navRef,
    logoRef,
    linksRef,
    ctaRef,
  });

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-xl border-b border-charcoal/5" />
        
        {/* Fun gradient accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-blue-light to-blue" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              ref={logoRef}
              href="/"
              className="flex items-center gap-2 group"
              onMouseEnter={(e) => animateLogoHover(e.currentTarget, true)}
              onMouseLeave={(e) => animateLogoHover(e.currentTarget, false)}
            >
              <div className="flex items-center relative">
                {/* Logo icon/mark */}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue to-blue-light flex items-center justify-center mr-2.5 shadow-lg shadow-blue/25 group-hover:shadow-xl group-hover:shadow-blue/35 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Utensils className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="text-xl font-bold text-charcoal tracking-tight">
                  Hospitality
                </span>
                <span className="text-xl font-bold text-blue tracking-tight ml-1">
                  Techs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div ref={linksRef} className="hidden md:flex md:items-center md:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-xl",
                    pathname === item.href
                      ? "text-blue"
                      : "text-charcoal/70 hover:text-charcoal hover:bg-blue/5"
                  )}
                  onMouseEnter={(e) => animateNavLinkHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavLinkHover(e.currentTarget, false)}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} className="hidden md:block">
              <Button
                asChild
                className="bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue text-white shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/35 transition-all duration-300 hover:-translate-y-0.5 rounded-xl"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-charcoal hover:bg-blue/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-charcoal/5 shadow-lg transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 px-4 text-base font-medium transition-all duration-200 rounded-xl",
                  pathname === item.href
                    ? "text-blue bg-blue/5"
                    : "text-charcoal/70 hover:text-charcoal hover:bg-blue/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue text-white rounded-xl"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA - hidden on home page */}
      {pathname !== "/" && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-charcoal to-charcoal-light p-4 flex gap-3 border-t border-white/10">
          <Button
            asChild
            variant="outline"
            className="flex-1 border-white/30 text-white hover:bg-white hover:text-charcoal backdrop-blur-sm rounded-xl"
          >
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </a>
          </Button>
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue text-white rounded-xl"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      )}

      {/* Spacer for fixed navbar - not needed on home page */}
      {pathname !== "/" && <div className="h-16" />}
    </>
  );
}
