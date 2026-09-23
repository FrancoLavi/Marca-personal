import { ContactPageContent } from "@/components/pages/ContactPageContent";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "contact", "/contacto");
}
export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ContactPageContent locale={locale} />;
}
