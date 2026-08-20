import Link from "next/link";
import { contactChannels, getWhatsAppHref } from "@/constants/contact";
import { navigationItems } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function SiteFooter({ locale }: { locale: "en" | "es" }) {
  const navigation = locale === "en" ? [{ label: "Home", href: "" }, { label: "Services", href: "/servicios" }, { label: "Projects", href: "/proyectos" }, { label: "About me", href: "/sobre-mi" }] : navigationItems;
  const whatsappHref = getWhatsAppHref(locale);
  const contactLabel = locale === "en" ? "Contact" : "Contacto";
  const emailLabel = "Email";

  return <footer className="border-t border-line bg-surface"><Container className="flex flex-col gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p className="m-0">© {new Date().getFullYear()} Franco Lavirgen</p><div className="flex flex-wrap items-center gap-x-5 gap-y-2"><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">{navigation.map((item) => <Link key={item.href} href={`/${locale}${item.href}`} className="transition-colors hover:text-ink">{item.label}</Link>)}</nav><Link href={`/${locale}/contacto`} className="font-medium text-accent transition-colors hover:text-ink">{contactLabel}</Link>{whatsappHref && <TrackedLink href={whatsappHref} external eventName="click_whatsapp" target="_blank" rel="noreferrer" className="font-medium text-accent transition-colors hover:text-ink">WhatsApp</TrackedLink>}{contactChannels.email && <a href={`mailto:${contactChannels.email}`} className="font-medium text-accent transition-colors hover:text-ink">{emailLabel}</a>}</div></Container></footer>;
}
