import { principles } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrinciplesSection() {
  return <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Forma de trabajo" title="Mi forma de abordar un proyecto" description="Algunas ideas que guían las decisiones cuando convierto una necesidad en software." /><div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">{principles.map((principle) => <article key={principle.number} className="border-t border-line pt-5"><span className="text-sm font-semibold text-accent">{principle.number}</span><h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink">{principle.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-muted">{principle.description}</p></article>)}</div></Container></section>;
}
