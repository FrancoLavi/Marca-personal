import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: "en" | "es" }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "projects", "/proyectos");
}
export default async function LocalizedProjectsPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ProjectsPageContent locale={locale} />;
}
