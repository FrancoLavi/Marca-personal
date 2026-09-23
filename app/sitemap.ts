import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

const locales = ["es", "en"] as const;
const pages = ["", "/servicios", "/proyectos", "/sobre-mi", "/contacto", "/privacidad", "/terminos", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = locales.flatMap((locale) => pages.map((page) => ({
    url: absoluteUrl(`/${locale}${page}`),
    changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
    priority: page === "" ? 1 : 0.7,
  })));

  const projectPages = locales.flatMap((locale) => projects.map((project) => ({
    url: absoluteUrl(`/${locale}/proyectos/${project.slug}`),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  })));

  return [...localizedPages, ...projectPages];
}
