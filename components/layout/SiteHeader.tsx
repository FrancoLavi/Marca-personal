"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";
import { MenuIcon } from "@/components/ui/MenuIcon";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="border-b border-line bg-white/95 backdrop-blur"><Container className="flex h-20 items-center justify-between"><Link href="/" className="text-base font-semibold tracking-tight text-ink" onClick={() => setIsMenuOpen(false)}>Franco Lavirgen</Link><nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">{navigationItems.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">{item.label}</Link>)}<Link href="/contacto" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent">Contame tu proyecto</Link></nav><button type="button" className="inline-flex items-center rounded-md p-2 text-ink md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}><span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span><MenuIcon open={isMenuOpen} /></button></Container>{isMenuOpen && <nav id="mobile-navigation" aria-label="Navegación móvil" className="border-t border-line bg-white px-5 py-4 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{navigationItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted hover:bg-surface hover:text-ink">{item.label}</Link>)}<Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white">Contame tu proyecto</Link></div></nav>}</header>;
}
