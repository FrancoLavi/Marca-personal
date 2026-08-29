import { HomePageContent } from "@/components/pages/HomePageContent";

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <HomePageContent locale={locale} />;
}
