import type { Project } from "@/types/project";

export function getLocalizedProject(project: Project, locale: "en" | "es") {
  const translation = project.translations?.[locale];
  if (!translation) return project;
  return { ...project, ...translation };
}
