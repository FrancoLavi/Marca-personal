import type { Metadata } from "next";
import { ProjectDetailPageContent } from "@/components/pages/ProjectDetailPageContent";
import { getProjectBySlug, projects } from "@/data/projects";
import { getProjectMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? getProjectMetadata(project, "es", "/proyectos/" + slug) : { title: "Proyecto no encontrado" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectDetailPageContent slug={slug} />;
}
