import Link from "next/link";
import { getWhatsAppHref } from "@/constants/contact";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/ui/TrackedLink";

type CtaBannerProps = { locale: "en" | "es"; eyebrow: string; title: string; description: string; cta: string; showWhatsapp?: boolean; whatsappLabel?: string };

export function CtaBanner({ locale, eyebrow, title, description, cta, showWhatsapp = false, whatsappLabel }: CtaBannerProps) {
  const whatsappHref = showWhatsapp ? getWhatsAppHref(locale) : null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink px-6 py-14 sm:px-12 sm:py-16">
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-accent/15" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="text-accent/50">{"//"}</span>
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/contacto`} className="group inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-[#1a1006] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#f7b657]">
                {cta} <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              {whatsappHref && (
                <TrackedLink href={whatsappHref} external eventName="click_whatsapp" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,border-color] duration-200 hover:border-accent/40 hover:bg-white/5">
                  {whatsappLabel} <span className="ml-2" aria-hidden="true">↗</span>
                </TrackedLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
