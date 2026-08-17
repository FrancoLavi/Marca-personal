import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/types/project";

export function MoreProjectsSection({ projects }: { projects: Project[] }) {
  return <section className="border-t border-line bg-surface py-20 sm:py-28"><Container><p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Explorá más</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">Más proyectos</h2>{projects.length > 0 ? <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p className="mt-6 max-w-xl text-base leading-7 text-muted">Este espacio queda preparado para sumar nuevos casos y soluciones a medida a medida que el portfolio crezca.</p>}</Container></section>;
}
