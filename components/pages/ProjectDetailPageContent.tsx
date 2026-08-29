import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/projects/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";
import { ProjectsCta } from "@/components/sections/projects/ProjectsCta";

export function ProjectDetailPageContent({ slug, locale = "es" }: { slug: string; locale?: "en" | "es" }) {
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <><ProjectDetail project={project} locale={locale} /><ProjectsCta locale={locale} /></>;
}
