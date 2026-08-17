import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ServicesHero() {
  return <section className="border-b border-line bg-surface"><Container className="py-16 sm:py-20 lg:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">SERVICIOS</p><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">Software pensado para resolver necesidades reales.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Desde una página web hasta un sistema de gestión completo, desarrollo soluciones digitales adaptadas a las necesidades y procesos de cada proyecto.</p></div><Link href="/contacto" className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent lg:self-end">Contame tu proyecto <span className="ml-2" aria-hidden="true">→</span></Link></div></Container></section>;
}
