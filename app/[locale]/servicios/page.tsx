import ServicesPage from "@/app/servicios/page";

export default async function LocalizedServicesPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}
