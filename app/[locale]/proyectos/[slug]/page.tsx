import { ProjectDetailPageContent } from "@/components/pages/ProjectDetailPageContent";

export default async function LocalizedProjectDetailPage({ params }: { params: Promise<{ locale: "en" | "es"; slug: string }> }) {
  const { locale, slug } = await params;
  return <ProjectDetailPageContent slug={slug} locale={locale} />;
}
