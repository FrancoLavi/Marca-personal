"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MenuIcon } from "@/components/ui/MenuIcon";

type Locale = "en" | "es";

const labels = {
  en: { home: "Home", services: "Services", projects: "Projects", about: "About me", cta: "Tell me about your project", menuOpen: "Open menu", menuClose: "Close menu", switch: "Español" },
  es: { home: "Inicio", services: "Servicios", projects: "Proyectos", about: "Sobre mí", cta: "Contame tu proyecto", menuOpen: "Abrir menú", menuClose: "Cerrar menú", switch: "English" },
} as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = labels[locale];
  const navigation = [{ label: copy.home, href: `/${locale}` }, { label: copy.services, href: `/${locale}/servicios` }, { label: copy.projects, href: `/${locale}/proyectos` }, { label: copy.about, href: `/${locale}/sobre-mi` }];
  const alternateLocale = locale === "en" ? "es" : "en";
  const alternatePath = alternateLocale === "en" ? "/en" : "/es";
  const switchLocale = () => { document.cookie = `site-locale=${alternateLocale};path=/;max-age=31536000`; };
  return <header className="border-b border-line bg-[#0b1418]/95 backdrop-blur"><Container className="flex h-20 items-center justify-between"><Link href={`/${locale}`} className="group flex items-center gap-2 text-base font-semibold tracking-tight text-ink" onClick={() => setIsMenuOpen(false)}><span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />Franco Lavirgen</Link><nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">{navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">{item.label}</Link>)}<Link href={`/${locale}/contacto`} className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#071512] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#70d1bf]">{copy.cta}</Link><Link href={alternatePath} onClick={switchLocale} className="text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink">{copy.switch}</Link></nav><button type="button" className="inline-flex items-center rounded-md p-2 text-ink md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}><span className="sr-only">{isMenuOpen ? copy.menuClose : copy.menuOpen}</span><MenuIcon open={isMenuOpen} /></button></Container>{isMenuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line bg-[#0b1418] px-5 py-4 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-ink">{item.label}</Link>)}<Link href={`/${locale}/contacto`} onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-[#071512] transition-colors hover:bg-[#70d1bf]">{copy.cta}</Link><Link href={alternatePath} onClick={() => { switchLocale(); setIsMenuOpen(false); }} className="rounded-lg px-3 py-3 text-sm font-semibold text-accent">{copy.switch}</Link></div></nav>}</header>;
}
