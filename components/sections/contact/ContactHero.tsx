import { Container } from "@/components/ui/Container";

export function ContactHero({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en" ? { eyebrow: "CONTACT", title: "Tell me what's on your mind.", description: "If you have an idea, need to improve a process, or want to build a digital solution, tell me a little about the project and we can explore how to move it forward." } : { eyebrow: "CONTACTO", title: "Contame qué tenés en mente.", description: "Si tenés una idea, necesitás mejorar un proceso o querés desarrollar una solución digital, contame un poco sobre el proyecto y podemos analizar cómo llevarlo adelante." };
  return <section className="border-b border-line bg-surface"><Container className="py-16 sm:py-20 lg:py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{copy.eyebrow}</p><h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy.description}</p></Container></section>;
}
