import type { Metadata } from "next";
import { ProjectDetailPageContent } from "@/components/pages/ProjectDetailPageContent";
import { getProjectBySlug, projects } from "@/data/projects";
import { getProjectMetadata } from "@/lib/seo";

type LocalizedProjectPageProps = { params: Promise<{ locale: "en" | "es"; slug: string }> };

export function generateStaticParams() {
  return projects.flatMap((project) => ["en", "es"].map((locale) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? getProjectMetadata(project, locale, "/" + locale + "/proyectos/" + slug) : { title: locale === "es" ? "Proyecto no encontrado" : "Project not found" };
}
export default async function LocalizedProjectDetailPage({ params }: { params: Promise<{ locale: "en" | "es"; slug: string }> }) {
  const { locale, slug } = await params;
  return <ProjectDetailPageContent slug={slug} locale={locale} />;
}
