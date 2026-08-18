import { Container } from "@/components/ui/Container";

export function AboutHero({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en" ? { eyebrow: "ABOUT ME", title: "Hi, I'm Franco.", description: "I'm a responsible, humble, and committed person. When I take on a project, I like to get truly involved, understand what is behind each need, and do everything I can to find a good solution." } : { eyebrow: "SOBRE MÍ", title: "Hola, soy Franco.", description: "Soy Franco. Me considero una persona responsable, humilde y comprometida. Cuando asumo un proyecto, me gusta involucrarme de verdad, entender lo que hay detrás de cada necesidad y hacer todo lo posible para encontrar una buena solución." };
  return <section className="border-b border-line bg-surface"><Container className="py-16 sm:py-20 lg:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{copy.eyebrow}</p><h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy.description}</p></Container></section>;
}
