import { CtaBanner } from "@/components/sections/CtaBanner";

export function ProjectsCta({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  return (
    <CtaBanner
      locale={locale}
      eyebrow={en ? "Let's talk" : "Hablemos"}
      title={en ? "Do you have an idea you want to make real?" : "¿Tenés una idea que querés convertir en realidad?"}
      description={en ? "We can analyze your project and find the best way to turn it into a digital solution." : "Podemos analizar tu proyecto y encontrar la mejor forma de transformarlo en una solución digital."}
      cta={en ? "Tell me about your project" : "Contame tu proyecto"}
    />
  );
}
