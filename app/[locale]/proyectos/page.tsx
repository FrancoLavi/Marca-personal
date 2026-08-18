import ProjectsPage from "@/app/proyectos/page";

export default async function LocalizedProjectsPage({ params }: { params: Promise<{ locale: "en" | "es" }> }) {
  const { locale } = await params;
  return <ProjectsPage locale={locale} />;
}
