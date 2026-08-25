import { principles } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrinciplesSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  const items = en
    ? [{ number: "01", title: "Understand before building", description: "I start by understanding the problem, the users, and the project's real goal." }, { number: "02", title: "Keep things simple", description: "A good solution does not need unnecessary complexity. I prioritize clear, maintainable, easy-to-use software." }, { number: "03", title: "Think end to end", description: "I consider the user experience as well as the logic, data, and integrations behind the system." }, { number: "04", title: "Build to evolve", description: "I aim to create a solid foundation that allows improvements and new features over time." }]
    : principles;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={en ? "How I work" : "Forma de trabajo"} title={en ? "My approach to a project" : "Mi forma de abordar un proyecto"} description={en ? "A few ideas that guide my decisions when turning a need into software." : "Algunas ideas que guían las decisiones cuando convierto una necesidad en software."} />
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {items.map((principle) => (
            <article key={principle.number} className="border-t border-line pt-5">
              <span className="font-mono text-sm font-semibold text-accent">{principle.number}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink">{principle.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
