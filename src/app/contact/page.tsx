import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import ContactPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hospitality Techs for a free consultation. We'll assess your infrastructure needs and provide a custom quote.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
