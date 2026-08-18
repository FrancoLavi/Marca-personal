import ContactPage from "@/app/contacto/page";

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale} />;
}
