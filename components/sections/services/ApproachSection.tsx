import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ApproachSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <SectionHeading
            eyebrow={en ? "Approach" : "Enfoque"}
            title={en ? "Not every project needs the same solution." : "No todos los proyectos necesitan la misma solución."}
            description={en ? "Before building, I seek to understand the problem, the users, and the project's goal. From there, we can define a solution that makes sense technically and commercially." : "Antes de desarrollar, busco entender el problema, los usuarios y el objetivo del proyecto. A partir de eso podemos definir una solución que tenga sentido tanto técnica como comercialmente."}
          />
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3 border-b border-line pb-4 font-mono text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                enfoque.md
              </div>
              <ol className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><span className="font-mono text-accent">01</span><span className="text-ink">{en ? "Understand the problem" : "Entender el problema"}</span></li>
                <li className="flex gap-3"><span className="font-mono text-accent">02</span><span className="text-ink">{en ? "Define the users" : "Definir los usuarios"}</span></li>
                <li className="flex gap-3"><span className="font-mono text-accent">03</span><span className="text-ink">{en ? "Design what makes sense" : "Diseñar lo que tiene sentido"}</span></li>
              </ol>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-line bg-card px-4 py-3 shadow-soft sm:-left-7">
              <p className="text-xs font-semibold text-ink">{en ? "Problem → Solution" : "Problema → Solución"}</p>
              <p className="mt-1 text-[11px] text-muted">{en ? "A fit for your business" : "Con sentido para tu negocio"}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
