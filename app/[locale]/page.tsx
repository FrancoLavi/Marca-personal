import HomePage from "@/app/page";

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
