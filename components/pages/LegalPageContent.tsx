import { Container } from "@/components/ui/Container";
import { getLegalPage, type LegalPageKey } from "@/data/legal";

export function LegalPageContent({ locale, page }: { locale: "en" | "es"; page: LegalPageKey }) {
  const content = getLegalPage(locale, page);
  return (
    <article>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{content.intro}</p>
          <p className="mt-6 text-sm text-muted">{locale === "es" ? "Última actualización" : "Last updated"}: {content.updated}</p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
