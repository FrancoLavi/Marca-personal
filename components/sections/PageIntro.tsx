import { Container } from "@/components/ui/Container";

type PageIntroProps = { eyebrow: string; title: string; description: string };

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return <section className="border-b border-line bg-surface"><Container className="py-20 sm:py-28"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p><h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p></Container></section>;
}
