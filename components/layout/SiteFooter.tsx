import Link from "next/link";
import { navigationItems } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";

export function SiteFooter({ locale }: { locale: "en" | "es" }) {
  const navigation = locale === "en" ? [{ label: "Home", href: "" }, { label: "Services", href: "/servicios" }, { label: "Projects", href: "/proyectos" }, { label: "About me", href: "/sobre-mi" }] : navigationItems;
  return <footer className="border-t border-line bg-surface"><Container className="flex flex-col gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p className="m-0">© {new Date().getFullYear()} Franco Lavirgen</p><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">{navigation.map((item) => <Link key={item.href} href={`/${locale}${item.href}`} className="transition-colors hover:text-ink">{item.label}</Link>)}</nav></Container></footer>;
}
