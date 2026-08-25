import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ServicesHero({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en"
    ? { eyebrow: "Services", title: "Software designed to solve real needs.", description: "From a simple website to a complete management system, I build digital solutions adapted to each project's needs and processes.", cta: "Tell me about your project" }
    : { eyebrow: "Servicios", title: "Software pensado para resolver necesidades reales.", description: "Desde una página web hasta un sistema de gestión completo, desarrollo soluciones digitales adaptadas a las necesidades y procesos de cada proyecto.", cta: "Contame tu proyecto" };

  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"><span className="text-muted/60">{"//"}</span>{copy.eyebrow}</p>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy.description}</p>
          </div>
          <Link href={`/${locale}/contacto`} className="inline-flex shrink-0 items-center justify-center self-start rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-[#1a1006] transition-colors hover:bg-[#f7b657] lg:self-end">{copy.cta} <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </Container>
    </section>
  );
}
