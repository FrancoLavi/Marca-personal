import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";

export default async function LocalizedProjectsPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ProjectsPageContent locale={locale} />;
}
