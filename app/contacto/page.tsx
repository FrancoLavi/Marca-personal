import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactIntro } from "@/components/sections/contact/ContactIntro";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Contacto" };

export default function ContactPage({ locale = "es" }: { locale?: "en" | "es" }) {
  return <><ContactHero locale={locale} /><section className="py-16 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><ContactIntro locale={locale} /><ContactForm locale={locale} /></div></Container></section></>;
}
