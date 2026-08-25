import { CtaBanner } from "@/components/sections/CtaBanner";

export function ServicesCta({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return (
    <CtaBanner
      locale={locale}
      eyebrow={en ? "Let's talk" : "Hablemos"}
      title={en ? "Do you have a project in mind?" : "¿Tenés un proyecto en mente?"}
      description={en ? "Tell me what you need, what problem you want to solve, or what idea you want to develop. We can explore the best way to move it forward." : "Contame qué necesitás, qué problema querés resolver o qué idea querés desarrollar. Podemos analizar cuál es la mejor forma de llevarlo adelante."}
      cta={en ? "Tell me about your project" : "Contame tu proyecto"}
    />
  );
}
