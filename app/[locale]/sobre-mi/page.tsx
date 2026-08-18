import AboutPage from "@/app/sobre-mi/page";

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
