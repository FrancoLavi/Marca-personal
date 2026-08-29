import { AboutPageContent } from "@/components/pages/AboutPageContent";

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <AboutPageContent locale={locale} />;
}
