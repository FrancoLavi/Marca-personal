import { AboutPageContent } from "@/components/pages/AboutPageContent";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "about", "/sobre-mi");
}
export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <AboutPageContent locale={locale} />;
}
