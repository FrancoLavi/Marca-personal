import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { getLocalizedProject } from "@/lib/project-i18n";

export function ProjectCard({ project, locale = "es" }: { project: Project; locale?: "en" | "es" }) {
  const copy = getLocalizedProject(project, locale);
  return (
    <article className="group">
      <Link href={`/${locale}/proyectos/${project.slug}`} className="block">
        <ProjectVisual image={project.image} title={project.title} locale={locale} />
        <div className="mt-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{copy.category}</p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
            <span className="mt-1 text-lg text-accent opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">↗</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => <span key={technology} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-ink">{technology}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
