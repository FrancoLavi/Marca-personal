import { services } from "@/data/services";
import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServicesListSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow={en ? "Solutions" : "Soluciones"} title={en ? "A solution for every challenge" : "Una solución para cada desafío"} description={en ? "Each service can be adapted to your project's stage, size, and goals." : "Cada servicio puede adaptarse al momento, tamaño y objetivos de tu proyecto."} /><div className="mt-12 grid gap-5 lg:grid-cols-2">{services.map((service, index) => <ServiceDetailCard key={service.title} service={service} featured={index === 0} locale={locale} />)}</div></Container></section>;
}

function ServiceDetailCard({ service, featured, locale }: { service: Service; featured: boolean; locale: "en" | "es" }) {
  const en = locale === "en";
  const translations: Record<string, { title: string; description: string; examples: string[] }> = {
    "Desarrollo Web": { title: "Web Development", description: "Modern, fast websites designed for every device, built to communicate your value and turn visitors into clients.", examples: ["Business websites", "Landing pages", "Professional websites", "Web portals and applications"] },
    "Software a medida": { title: "Custom Software", description: "Systems designed specifically to digitize processes and solve the particular needs of a business.", examples: ["Management systems", "Customer management", "Inventory control", "Sales management", "Admin dashboards", "Internal tools"] },
    "E-commerce": { title: "E-commerce", description: "Online stores ready to sell products and manage the core operations of a business.", examples: ["Product catalog", "Shopping cart", "Online payments", "Order management", "Product administration", "External integrations"] },
    "Automatizaciones e integraciones": { title: "Automations and integrations", description: "Automation of repetitive tasks and integrations between tools to reduce manual work and improve processes.", examples: ["API integrations", "Process automation", "Automatic notifications", "Information processing", "External tool integrations"] },
    "Mejora de software existente": { title: "Existing software improvements", description: "I can also work on existing applications to add features, solve problems, or modernize parts of the system.", examples: ["New features", "Bug fixes", "Integrations", "Interface improvements", "Optimization and maintenance"] },
  };
  const translated = translations[service.title];
  const copy = en && translated ? translated : service;
  return <article className={`rounded-2xl border border-line p-6 sm:p-8 ${featured ? "bg-ink text-white lg:col-span-2" : "bg-white"}`}><div className="flex flex-col gap-7 sm:flex-row sm:justify-between"><div className="max-w-xl"><div className={featured ? "text-[#75c7bb]" : "text-accent"}><ServiceIcon name={service.icon} /></div><p className={`mt-6 text-xs font-semibold uppercase tracking-[0.14em] ${featured ? "text-white/55" : "text-muted"}`}>0{services.indexOf(service) + 1}</p><h2 className={`mt-2 text-2xl font-semibold tracking-[-0.03em] ${featured ? "text-white" : "text-ink"}`}>{copy.title}</h2><p className={`mt-4 max-w-xl text-base leading-7 ${featured ? "text-white/65" : "text-muted"}`}>{copy.description}</p></div><div className={`sm:min-w-[240px] sm:max-w-[280px] ${featured ? "text-white/75" : "text-muted"}`}><p className={`text-xs font-semibold uppercase tracking-[0.14em] ${featured ? "text-[#75c7bb]" : "text-accent"}`}>{en ? "Examples" : "Ejemplos"}</p><ul className="mt-4 space-y-2.5 text-sm">{copy.examples.map((example) => <li key={example} className="flex gap-2"><span className={featured ? "text-[#75c7bb]" : "text-accent"} aria-hidden="true">•</span><span>{example}</span></li>)}</ul></div></div></article>;
}
