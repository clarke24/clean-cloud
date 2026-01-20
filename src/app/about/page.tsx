import { Metadata } from "next";
import AboutPageClient from "./page.client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Hospitality Techs exists because restaurants deserve stable, reliable technology. Learn about our mission and values.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
