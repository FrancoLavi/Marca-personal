type SectionHeadingProps = { eyebrow?: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span aria-hidden="true" className="text-muted/60">{"//"}</span>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
