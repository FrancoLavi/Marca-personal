import { Container } from "@/components/ui/Container";

export function EducationSection() {
  return <section className="border-y border-line bg-surface py-16 sm:py-20"><Container><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Formación</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">Técnico Superior en Análisis de Sistemas</h2></div><p className="text-sm text-muted sm:text-right">Instituto Superior Juan XXIII</p></div></Container></section>;
}
