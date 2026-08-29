import { Container } from "@/components/ui/Container";

export function AboutHero({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en"
    ? { eyebrow: "About me", title: "Hi, I'm Franco.", description: "I'm a responsible, humble, and committed person. When I take on a project, I like to get truly involved, understand what is behind each need, and do everything I can to find a good solution." }
    : { eyebrow: "Sobre mí", title: "Hola, soy Franco.", description: "Soy Franco. Me considero una persona responsable, humilde y comprometida. Cuando asumo un proyecto, me gusta involucrarme de verdad, entender lo que hay detrás de cada necesidad y hacer todo lo posible para encontrar una buena solución." };
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"><span className="text-muted/60">{"//"}</span>{copy.eyebrow}</p>
        <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl">{copy.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy.description}</p>
      </Container>
    </section>
  );
}
