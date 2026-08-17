import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ServicesCta() {
  return <section className="py-20 sm:py-28"><Container><div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 sm:px-12 sm:py-16"><div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" /><div className="absolute -right-2 top-4 h-36 w-36 rounded-full border border-white/10" /><div className="relative max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#75c7bb]">Hablemos</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">¿Tenés un proyecto en mente?</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/65">Contame qué necesitás, qué problema querés resolver o qué idea querés desarrollar. Podemos analizar cuál es la mejor forma de llevarlo adelante.</p><Link href="/contacto" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#dcefeb]">Contame tu proyecto <span className="ml-2" aria-hidden="true">→</span></Link></div></div></Container></section>;
}
