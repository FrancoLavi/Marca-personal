import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Container } from "@/components/ui/Container";
import { getLocalizedProject } from "@/lib/project-i18n";

export function ProjectDetail({ project, locale = "es" }: { project: Project; locale?: "en" | "es" }) {
  const en = locale === "en";
  const copy = getLocalizedProject(project, locale);
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20 lg:py-24">
          <Link href={`/${locale}/proyectos`} className="text-sm font-semibold text-accent hover:text-ink">← {en ? "Back to projects" : "Volver a proyectos"}</Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{copy.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-ink sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{copy.description}</p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <ProjectVisual image={project.image} title={project.title} featured />
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <figure key={screenshot.src} className={index === 0 ? "md:col-span-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
                    <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} className="h-auto w-full" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted">{screenshot.alt}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-2">
              <InfoBlock title={en ? "The problem" : "El problema"} text={copy.problem} />
              <InfoBlock title={en ? "The solution" : "La solución"} text={copy.solution} />
            </div>
            <div className="grid gap-12 pt-12 md:grid-cols-[1fr_0.8fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{en ? "Key features" : "Funcionalidades principales"}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {copy.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{feature}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{en ? "Technologies used" : "Tecnologías utilizadas"}</h2>
                <ul className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-line bg-surface px-3 py-2 text-sm text-muted">{technology}</li>)}</ul>
                {(project.liveUrl || project.repositoryUrl) && <div className="mt-8 flex flex-col items-start gap-3">{project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:text-ink">{en ? "Visit project" : "Visitar proyecto"} →</Link>}{project.repositoryUrl && <Link href={project.repositoryUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:text-ink">{en ? "View repository" : "Ver repositorio"} →</Link>}</div>}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return <div><h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{title}</h2><p className="mt-4 text-base leading-8 text-muted">{text}</p></div>;
}
