import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/projects/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectsCta } from "@/components/sections/projects/ProjectsCta";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.title, description: project.shortDescription } : { title: "Proyecto no encontrado" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <><ProjectDetail project={project} /><ProjectsCta /></>;
}
