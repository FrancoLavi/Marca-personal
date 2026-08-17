import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group"><Link href={`/proyectos/${project.slug}`} className="block"><ProjectVisual image={project.image} title={project.title} /><div className="mt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-ink group-hover:text-accent">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{project.shortDescription}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((technology) => <span key={technology} className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-muted">{technology}</span>)}</div></div></Link></article>;
}
