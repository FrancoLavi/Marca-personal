import type { Project } from "@/types/project";
import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";
import { getLocalizedProject } from "@/lib/project-i18n";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function SiteStructuredData() {
  return (
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Person", "@id": `${siteUrl}/#person`, name: siteName, url: siteUrl, jobTitle: "Software Developer", email: "francolavi123@gmail.com", knowsAbout: ["Web development", "Custom software", "E-commerce", "Automation", "API integrations"] },
        { "@type": "ProfessionalService", "@id": `${siteUrl}/#business`, name: siteName, url: siteUrl, description: "Desarrollo de software a medida para profesionales y empresas.", founder: { "@id": `${siteUrl}/#person` }, areaServed: "Worldwide", serviceType: "Software development" },
        { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: siteName, publisher: { "@id": `${siteUrl}/#person` }, inLanguage: ["es-AR", "en-US"] },
      ],
    }} />
  );
}

export function ProjectStructuredData({ project, locale }: { project: Project; locale: "en" | "es" }) {
  const copy = getLocalizedProject(project, locale);
  const projectUrl = absoluteUrl(`/${locale}/proyectos/${project.slug}`);

  return (
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      description: copy.description,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      url: project.liveUrl || projectUrl,
      image: absoluteUrl(project.image),
      creator: { "@type": "Person", name: siteName, url: siteUrl },
      keywords: project.technologies.join(", "),
    }} />
  );
}
