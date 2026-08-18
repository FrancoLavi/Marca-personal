import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Container } from "@/components/ui/Container";
import { getLocalizedProject } from "@/lib/project-i18n";

export function FeaturedProjectSection({ project, locale = "es" }: { project: Project; locale?: "en" | "es" }) {
  const en = locale === "en";
  const copy = getLocalizedProject(project, locale);
  return <section className="py-20 sm:py-28"><Container><div className="mb-10"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{en ? "Featured project" : "Proyecto destacado"}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">{project.title}</h2></div><div className="grid gap-8 rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"><ProjectVisual image={project.image} title={project.title} featured locale={locale} /><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{copy.category}</p><p className="mt-4 text-lg leading-8 text-ink">{copy.shortDescription}</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><InfoBlock title={en ? "Problem" : "Problema"} text={copy.problem} /><InfoBlock title={en ? "Solution" : "Solución"} text={copy.solution} /></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={`/${locale}/proyectos/${project.slug}`} className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">{en ? "View full case" : "Ver caso completo"} <span className="ml-2" aria-hidden="true">→</span></Link>{project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-ink">{en ? "Visit project" : "Visitar proyecto"}</Link>}</div></div></div></Container></section>;
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return <div><h3 className="text-sm font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>;
}
