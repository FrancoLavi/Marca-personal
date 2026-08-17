import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const services = [
  { icon: "web" as const, title: "Desarrollo Web", description: "Sitios modernos, rápidos y adaptados a cualquier dispositivo." },
  { icon: "software" as const, title: "Software a medida", description: "Aplicaciones creadas específicamente para resolver procesos y necesidades de cada negocio." },
  { icon: "commerce" as const, title: "E-commerce", description: "Tiendas online con catálogo, carrito, pagos y herramientas de administración." },
  { icon: "automation" as const, title: "Automatizaciones", description: "Integraciones y automatizaciones para reducir tareas manuales y mejorar procesos." },
];

export function ServicesSection() {
  return <section className="border-b border-line py-20 sm:py-28"><Container><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><SectionHeading eyebrow="Servicios" title="Soluciones para llevar tu idea al siguiente nivel" /><Link href="/servicios" className="group shrink-0 text-sm font-semibold text-accent transition-colors hover:text-ink">Ver todos los servicios <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <article key={service.title} className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#38645d] hover:shadow-soft"><span className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" /><ServiceIcon name={service.icon} /><h3 className="mt-6 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{service.description}</p></article>)}</div></Container></section>;
}
