import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("es", "projects", "/proyectos");

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
