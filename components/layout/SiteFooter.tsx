import Link from "next/link";
import { navigationItems } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return <footer className="border-t border-line bg-surface"><Container className="flex flex-col gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p className="m-0">© {new Date().getFullYear()} Franco Lavirgen</p><nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-5 gap-y-2">{navigationItems.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">{item.label}</Link>)}</nav></Container></footer>;
}
