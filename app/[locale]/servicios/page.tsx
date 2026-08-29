import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export default async function LocalizedServicesPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ServicesPageContent locale={locale} />;
}
