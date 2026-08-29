import { ContactPageContent } from "@/components/pages/ContactPageContent";

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ContactPageContent locale={locale} />;
}
