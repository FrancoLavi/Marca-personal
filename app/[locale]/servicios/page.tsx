import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "services", "/servicios");
}
export default async function LocalizedServicesPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ServicesPageContent locale={locale} />;
}
