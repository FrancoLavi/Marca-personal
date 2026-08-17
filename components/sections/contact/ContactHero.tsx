import { Container } from "@/components/ui/Container";

export function ContactHero() {
  return <section className="border-b border-line bg-surface"><Container className="py-16 sm:py-20 lg:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">CONTACTO</p><h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">Contame qué tenés en mente.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Si tenés una idea, necesitás mejorar un proceso o querés desarrollar una solución digital, contame un poco sobre el proyecto y podemos analizar cómo llevarlo adelante.</p></Container></section>;
}
