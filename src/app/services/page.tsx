import { Metadata } from "next";
import ServicesPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Managed infrastructure packages for restaurants and cafés. Core network, failover, phones, hosting, and more. Simple pricing from £199/month.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}

