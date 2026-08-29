import { CtaBanner } from "@/components/sections/CtaBanner";

export function AboutCta({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return (
    <CtaBanner
      locale={locale}
      eyebrow={en ? "Let's talk" : "Hablemos"}
      title={en ? "Do you have an idea or a problem that software could solve?" : "¿Tenés una idea o un problema que podría resolverse con software?"}
      description={en ? "Tell me what you need and we can explore the best way to move it forward." : "Contame qué necesitás y podemos analizar juntos cuál es la mejor forma de llevarlo adelante."}
      cta={en ? "Tell me about your project" : "Contame tu proyecto"}
    />
  );
}
