import { featuredProjects, projects } from "@/data/projects";
import { MoreProjectsSection } from "@/components/sections/projects/MoreProjectsSection";
import { FeaturedProjectSection } from "@/components/sections/projects/FeaturedProjectSection";
import { ProjectsCta } from "@/components/sections/projects/ProjectsCta";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";

export function ProjectsPageContent({ locale = "es" }: { locale?: "en" | "es" }) {
  const featuredProject = featuredProjects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject?.slug);
  return <><ProjectsHero locale={locale} />{featuredProject && <FeaturedProjectSection project={featuredProject} locale={locale} />}<MoreProjectsSection projects={otherProjects} locale={locale} /><ProjectsCta locale={locale} /></>;
}
