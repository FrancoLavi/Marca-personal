import { services } from "@/data/services";
import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServicesListSection() {
  return <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Soluciones" title="Una solución para cada desafío" description="Cada servicio puede adaptarse al momento, tamaño y objetivos de tu proyecto." /><div className="mt-12 grid gap-5 lg:grid-cols-2">{services.map((service, index) => <ServiceDetailCard key={service.title} service={service} featured={index === 0} />)}</div></Container></section>;
}

function ServiceDetailCard({ service, featured }: { service: Service; featured: boolean }) {
  return <article className={`rounded-2xl border border-line p-6 sm:p-8 ${featured ? "bg-ink text-white lg:col-span-2" : "bg-white"}`}><div className="flex flex-col gap-7 sm:flex-row sm:justify-between"><div className="max-w-xl"><div className={featured ? "text-[#75c7bb]" : "text-accent"}><ServiceIcon name={service.icon} /></div><p className={`mt-6 text-xs font-semibold uppercase tracking-[0.14em] ${featured ? "text-white/55" : "text-muted"}`}>0{services.indexOf(service) + 1}</p><h2 className={`mt-2 text-2xl font-semibold tracking-[-0.03em] ${featured ? "text-white" : "text-ink"}`}>{service.title}</h2><p className={`mt-4 max-w-xl text-base leading-7 ${featured ? "text-white/65" : "text-muted"}`}>{service.description}</p></div><div className={`sm:min-w-[240px] sm:max-w-[280px] ${featured ? "text-white/75" : "text-muted"}`}><p className={`text-xs font-semibold uppercase tracking-[0.14em] ${featured ? "text-[#75c7bb]" : "text-accent"}`}>Ejemplos</p><ul className="mt-4 space-y-2.5 text-sm">{service.examples.map((example) => <li key={example} className="flex gap-2"><span className={featured ? "text-[#75c7bb]" : "text-accent"} aria-hidden="true">•</span><span>{example}</span></li>)}</ul></div></div></article>;
}
