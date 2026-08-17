import { featuredProjects, projects } from "@/data/projects";
import { MoreProjectsSection } from "@/components/sections/projects/MoreProjectsSection";
import { FeaturedProjectSection } from "@/components/sections/projects/FeaturedProjectSection";
import { ProjectsCta } from "@/components/sections/projects/ProjectsCta";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";

export const metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  const featuredProject = featuredProjects[0];
  const otherProjects = projects.filter((project) => project.slug !== featuredProject?.slug);
  return <><ProjectsHero />{featuredProject && <FeaturedProjectSection project={featuredProject} />}<MoreProjectsSection projects={otherProjects} /><ProjectsCta /></>;
}
