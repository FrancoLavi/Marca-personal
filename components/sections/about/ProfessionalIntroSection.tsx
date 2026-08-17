import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProfessionalIntroSection() {
  return <section className="border-y border-line bg-surface py-16 sm:py-20"><Container><div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:gap-24"><SectionHeading eyebrow="Mi perfil profesional" title="Una mirada integral para construir software útil." /><div className="text-base leading-8 text-muted sm:text-lg"><p>Soy Técnico Superior en Análisis de Sistemas y actualmente estoy enfocado en el desarrollo web, las aplicaciones y el software a medida.</p><p className="mt-5">Mi formación y experiencia trabajando con sistemas reales me enseñaron a mirar el software de punta a punta: entender una necesidad, pensar una solución, desarrollarla y considerar cómo va a ser utilizada por las personas.</p><p className="mt-5">También me importa que, al terminar un proyecto, la persona que estuvo del otro lado sienta que fue escuchada, que hubo confianza y que fue una buena experiencia trabajar conmigo.</p></div></div></Container></section>;
}
