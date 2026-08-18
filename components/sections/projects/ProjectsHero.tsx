import { Container } from "@/components/ui/Container";

export function ProjectsHero({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return <section className="border-b border-line bg-surface"><Container className="py-16 sm:py-20 lg:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{en ? "PROJECTS" : "PROYECTOS"}</p><h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">{en ? "Solutions that went from an idea to a product." : "Soluciones que pasaron de una idea a un producto."}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{en ? "A selection of projects where I combine development, design, and technology to turn concrete needs into digital solutions." : "Una selección de proyectos donde combino desarrollo, diseño y tecnología para convertir necesidades concretas en soluciones digitales."}</p></Container></section>;
}
