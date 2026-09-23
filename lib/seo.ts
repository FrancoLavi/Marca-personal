import type { Metadata } from "next";
import type { Project } from "@/types/project";

export const siteUrl = "https://franco-lavirgen-web.vercel.app";
export const siteName = "Franco Lavirgen";

type Locale = "en" | "es";
type PageKey = "home" | "services" | "projects" | "about" | "contact";

const pageCopy: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  es: {
    home: { title: "Desarrollo de software a medida", description: "Desarrollo páginas web, aplicaciones y sistemas a medida para profesionales, emprendimientos y empresas." },
    services: { title: "Servicios de desarrollo de software", description: "Páginas web, aplicaciones, e-commerce, automatizaciones e integraciones para convertir necesidades reales en soluciones digitales." },
    projects: { title: "Proyectos de software y aplicaciones web", description: "Una selección de proyectos de e-commerce, plataformas de capacitación, integraciones y aplicaciones web." },
    about: { title: "Sobre Franco Lavirgen", description: "Conocé a Franco Lavirgen, desarrollador de software enfocado en crear soluciones digitales claras, útiles y a medida." },
    contact: { title: "Contacto", description: "Contame sobre tu idea, proceso o proyecto y analicemos juntos la mejor forma de convertirlo en una solución digital." },
  },
  en: {
    home: { title: "Tailored software development", description: "I build websites, applications, and custom software for professionals, startups, and businesses." },
    services: { title: "Software development services", description: "Websites, applications, e-commerce, automations, and integrations that turn real needs into digital solutions." },
    projects: { title: "Software and web application projects", description: "A selection of e-commerce, training platforms, integrations, and web applications." },
    about: { title: "About Franco Lavirgen", description: "Meet Franco Lavirgen, a software developer focused on building clear, useful, tailored digital solutions." },
    contact: { title: "Contact", description: "Tell me about your idea, process, or project and let’s explore the best way to turn it into a digital solution." },
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getPageMetadata(locale: Locale, page: PageKey, path: string): Metadata {
  const copy = pageCopy[locale][page];
  const url = absoluteUrl(`/${locale}${path}`);
  const alternatePath = path || "/";

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        es: absoluteUrl(`/es${alternatePath}`),
        en: absoluteUrl(`/en${alternatePath}`),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: copy.title,
      description: copy.description,
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
    },
  };
}

export function getProjectMetadata(project: Project, locale: Locale, path: string): Metadata {
  const copy = project.translations?.[locale] ?? project;
  const title = project.title;
  const description = copy.shortDescription ?? project.shortDescription;
  const url = absoluteUrl(path);
  return { title, description, alternates: { canonical: url }, openGraph: { type: "article", url, siteName, title, description, images: [{ url: absoluteUrl(project.image), alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [absoluteUrl(project.image)] } };
}
export type { Locale, PageKey };
