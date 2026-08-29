import { technologies } from "@/data/services";
import { Container } from "@/components/ui/Container";

export function TechnologiesSection({ locale = "es" }: { locale?: "en" | "es" }) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"><span className="text-muted/60">{"//"}</span>{locale === "en" ? "Technical foundation" : "Base técnica"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">{locale === "en" ? "Technologies I work with" : "Tecnologías con las que trabajo"}</h2>
          </div>
          <ul className="flex max-w-2xl flex-wrap gap-2" aria-label="Technologies">
            <li className="sr-only">Technologies:</li>
            {technologies.map((technology) => <li key={technology} className="rounded-full border border-line px-3.5 py-2 font-mono text-xs text-muted">{technology}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
