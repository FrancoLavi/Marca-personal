import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en" ? { eyebrow: "Projects", title: "Selected projects", description: "Digital solutions built to make what matters simpler.", link: "View all projects" } : { eyebrow: "Proyectos", title: "Algunos proyectos", description: "Soluciones digitales construidas para hacer más simple lo importante.", link: "Ver todos los proyectos" };
  return <section className="border-b border-line bg-surface py-20 sm:py-28"><Container><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><Link href={`/${locale}/proyectos`} className="shrink-0 text-sm font-semibold text-accent hover:text-ink">{copy.link} <span aria-hidden="true">→</span></Link></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div></Container></section>;
}
