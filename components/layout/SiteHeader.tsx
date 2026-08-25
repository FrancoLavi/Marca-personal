"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MenuIcon } from "@/components/ui/MenuIcon";

type Locale = "en" | "es";

const labels = {
  en: { home: "Home", services: "Services", projects: "Projects", about: "About me", cta: "Tell me about your project", menuOpen: "Open menu", menuClose: "Close menu", switch: "ES" },
  es: { home: "Inicio", services: "Servicios", projects: "Proyectos", about: "Sobre mí", cta: "Contame tu proyecto", menuOpen: "Abrir menú", menuClose: "Cerrar menú", switch: "EN" },
} as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = labels[locale];
  const navigation = [{ label: copy.home, href: `/${locale}` }, { label: copy.services, href: `/${locale}/servicios` }, { label: copy.projects, href: `/${locale}/proyectos` }, { label: copy.about, href: `/${locale}/sobre-mi` }];
  const alternateLocale = locale === "en" ? "es" : "en";
  const alternatePath = alternateLocale === "en" ? "/en" : "/es";
  const switchLocale = () => { document.cookie = `site-locale=${alternateLocale};path=/;max-age=31536000`; };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="group flex items-center gap-2.5 font-mono text-sm font-medium text-ink" onClick={() => setIsMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-accent transition-colors duration-300 group-hover:border-accent/50" aria-hidden="true">FL</span>
          <span className="hidden sm:inline">franco<span className="text-accent">.</span>lavirgen</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">{item.label}</Link>)}
          <Link href={alternatePath} onClick={switchLocale} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink">{copy.switch}</Link>
          <Link href={`/${locale}/contacto`} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#1a1006] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#f7b657]">{copy.cta}</Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href={`/${locale}/contacto`} aria-label={copy.cta} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-accent transition-colors hover:border-accent/50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13ZM8 8h8M8 12h5" /></svg>
          </Link>
          <button type="button" className="inline-flex items-center rounded-md p-2 text-ink" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            <span className="sr-only">{isMenuOpen ? copy.menuClose : copy.menuOpen}</span>
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line bg-canvas px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-ink">{item.label}</Link>)}
            <Link href={`/${locale}/contacto`} onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-[#1a1006] transition-colors hover:bg-[#f7b657]">{copy.cta}</Link>
            <Link href={alternatePath} onClick={() => { switchLocale(); setIsMenuOpen(false); }} className="rounded-lg px-3 py-3 font-mono text-sm font-semibold text-accent">{copy.switch === "ES" ? "Español" : "English"}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
