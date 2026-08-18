import ProjectDetailPage from "@/app/proyectos/[slug]/page";

export default async function LocalizedProjectDetailPage({ params }: { params: Promise<{ locale: "en" | "es"; slug: string }> }) {
  const { locale, slug } = await params;
  return <ProjectDetailPage locale={locale} params={Promise.resolve({ slug })} />;
}
