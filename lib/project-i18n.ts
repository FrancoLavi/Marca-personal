import type { Project } from "@/types/project";

export function getLocalizedProject(project: Project, locale: "en" | "es") {
  const translation = project.translations?.[locale];
  if (!translation) return project;
  const screenshotAlt: Record<string, string> = {
    "/projects/e-commerce-catalogo-current.jpg": "Updated ErcLav openings catalog.",
    "/projects/e-commerce-producto-current.jpg": "Updated detail of a metal security door with size and finish selection.",
    "/projects/steamquest-dashboard.png": "SteamQuest main screen with recommendations and missions for exploring a Steam library.",
  };
  return { ...project, ...translation, screenshots: project.screenshots?.map((screenshot) => ({ ...screenshot, alt: screenshotAlt[screenshot.src] ?? screenshot.alt })) };
}
