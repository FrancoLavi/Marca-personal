import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { number: "01", title: "Entendemos el problema", description: "Conversamos sobre tu contexto, objetivos y las personas que van a usar la solución." },
  { number: "02", title: "Diseñamos la solución", description: "Ordenamos las ideas y definimos una propuesta clara, útil y posible de hacer crecer." },
  { number: "03", title: "Desarrollo", description: "Construyo el producto con entregas visibles y comunicación constante durante el proceso." },
  { number: "04", title: "Lanzamiento y mejora", description: "Publicamos, medimos lo importante y seguimos mejorando según las necesidades reales." },
];

export function ProcessSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en" ? { eyebrow: "Process", title: "How I work", description: "A simple process for turning a need into a solution that works.", steps: [{ number: "01", title: "Understand the problem", description: "We talk through your context, goals, and the people who will use the solution." }, { number: "02", title: "Design the solution", description: "We organize the ideas and define a clear, useful solution that can grow." }, { number: "03", title: "Development", description: "I build the product with visible deliveries and constant communication." }, { number: "04", title: "Launch and improve", description: "We launch, measure what matters, and keep improving based on real needs." }] } : { eyebrow: "Proceso", title: "Cómo trabajo", description: "Un proceso simple para convertir una necesidad en una solución que funcione.", steps };
  return <section className="border-b border-line py-20 sm:py-28"><Container><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-5"><div className="absolute left-0 right-0 top-0 hidden h-px bg-line md:block"><div className="motion-process-line h-full w-full bg-accent" /></div>{copy.steps.map((step) => <article key={step.number} className="relative border-l border-line pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-8"><span className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-[#0b1418] md:left-0 md:top-[-5px]" /><span className="text-sm font-semibold text-accent">{step.number}</span><h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.description}</p></article>)}</div></Container></section>;
}
