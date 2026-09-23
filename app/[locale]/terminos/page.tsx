import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "terms", "/terminos");
}

export default async function TermsPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <LegalPageContent locale={locale} page="terms" />;
}
