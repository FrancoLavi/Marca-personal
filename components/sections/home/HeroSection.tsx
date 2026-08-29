import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function HeroSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en"
    ? { eyebrow: "Tailored software development", title: "I turn ideas into digital solutions.", description: "I build websites, applications, and custom software that help professionals and businesses digitize processes, sell more, and work more efficiently.", cta: "Tell me about your project", projects: "View projects", status: "Idea in motion", statusDetail: "Simple · Scalable" }
    : { eyebrow: "Desarrollo de software a medida", title: "Transformo ideas en soluciones digitales.", description: "Desarrollo páginas web, aplicaciones y sistemas a medida que ayudan a profesionales y empresas a digitalizar procesos, vender más y trabajar de forma más eficiente.", cta: "Contame tu proyecto", projects: "Ver proyectos", status: "Idea en marcha", statusDetail: "Simple · Escalable" };

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        <div className="relative z-10 motion-rise-in">
          <p className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {copy.eyebrow}
          </p>
          <h1 className="max-w-2xl text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4rem]">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{copy.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={`/${locale}/contacto`} eventName="click_contact_hero" className="group inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-[#1a1006] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#f7b657]">
              {copy.cta} <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </TrackedLink>
            <Link href={`/${locale}/proyectos`} className="group inline-flex items-center justify-center rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/40">
              {copy.projects} <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <HeroVisual status={copy.status} statusDetail={copy.statusDetail} />
      </Container>
    </section>
  );
}

function HeroVisual({ status, statusDetail }: { status: string; statusDetail: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] motion-float-slow" aria-label="Editor de código mostrando la idea de un proyecto" role="img">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-card shadow-soft">
        <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-muted">proyecto.ts</span>
        </div>
        <div className="p-6 font-mono text-[13px] leading-7 sm:text-sm">
          <p><span className="text-[#c297ff]">type</span> <span className="text-[#f2a63d]">Proyecto</span> = {"{"}</p>
          <p className="pl-4"><span className="text-ink">idea</span>: <span className="text-[#8dd8a3]">string</span>;</p>
          <p className="pl-4"><span className="text-ink">impacto</span>: <span className="text-[#8dd8a3]">&quot;alto&quot;</span>;</p>
          <p>{"}"}</p>
          <p className="mt-3">&nbsp;</p>
          <p><span className="text-[#c297ff]">function</span> <span className="text-[#7fb7ff]">construir</span>(<span className="text-ink">p</span>: <span className="text-[#f2a63d]">Proyecto</span>) {"{"}</p>
          <p className="pl-4"><span className="text-[#c297ff]">return</span> <span className="text-[#7fb7ff]">lanzar</span>(p)<span className="motion-caret text-accent">▍</span></p>
          <p>{"}"}</p>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-4 rounded-xl border border-line bg-card px-4 py-3 shadow-soft sm:-right-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">✓</span>
          <div>
            <p className="text-xs font-semibold text-ink">{status}</p>
            <p className="mt-0.5 text-[11px] text-muted">{statusDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
