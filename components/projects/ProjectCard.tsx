import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group"><Link href={`/proyectos/${project.slug}`} className="block"><ProjectVisual image={project.image} title={project.title} /><div className="mt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</p><div className="mt-2 flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">{project.title}</h3><span className="mt-1 text-lg text-accent opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">↗</span></div><p className="mt-2 text-sm leading-6 text-muted">{project.shortDescription}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((technology) => <span key={technology} className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-muted transition-colors duration-300 group-hover:bg-[#163a35]">{technology}</span>)}</div></div></Link></article>;
}
