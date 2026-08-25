import { CtaBanner } from "@/components/sections/CtaBanner";

export function FinalCtaSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const copy = locale === "en"
    ? { eyebrow: "Let's talk", title: "Do you have an idea or a process that could work better?", description: "Tell me what you need and we can explore the best way to turn it into a digital solution.", cta: "Tell me about your project", whatsapp: "Write on WhatsApp" }
    : { eyebrow: "Hablemos", title: "¿Tenés una idea o un proceso que podría funcionar mejor?", description: "Contame qué necesitás y podemos analizar juntos la mejor forma de convertirlo en una solución digital.", cta: "Contame tu proyecto", whatsapp: "Escribime por WhatsApp" };

  return <CtaBanner locale={locale} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} cta={copy.cta} showWhatsapp whatsappLabel={copy.whatsapp} />;
}
