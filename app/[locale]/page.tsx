import { HomePageContent } from "@/components/pages/HomePageContent";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "home", "");
}
export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <HomePageContent locale={locale} />;
}
