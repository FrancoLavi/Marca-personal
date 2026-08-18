import { technologyGroups } from "@/data/about";
import { Container } from "@/components/ui/Container";

export function AboutTechnologiesSection({ locale = "es" }: { locale?: "en" | "es" }) {
  const names = locale === "en" ? ["Frontend", "Backend", "Data", "Tools"] : ["Frontend", "Backend", "Datos", "Herramientas"];
  return <section className="py-16 sm:py-20"><Container><p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{locale === "en" ? "Technical foundation" : "Base técnica"}</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">{locale === "en" ? "Tools I work with" : "Herramientas con las que trabajo"}</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{technologyGroups.map((group, index) => <div key={group.name}><h3 className="text-sm font-semibold text-ink">{names[index]}</h3><ul className="mt-3 space-y-2">{group.tools.map((tool) => <li key={tool} className="text-sm text-muted">{tool}</li>)}</ul></div>)}</div></Container></section>;
}
