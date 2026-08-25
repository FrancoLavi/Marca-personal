import Image from "next/image";

type ProjectVisualProps = { image: string; title: string; featured?: boolean; locale?: "en" | "es" };

export function ProjectVisual({ image, title, featured = false, locale = "es" }: ProjectVisualProps) {
  const alt = locale === "en" ? `Project preview: ${title}` : `Vista previa del proyecto ${title}`;

  if (image.startsWith("/")) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-line bg-card transition-[transform,border-color] duration-500 group-hover:-translate-y-1 group-hover:border-accent/30 ${featured ? "aspect-[1.9]" : "aspect-[1.32]"}`}>
        <Image src={image} alt={alt} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.025]" sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 33vw"} />
      </div>
    );
  }

  return (
    <div className={`relative flex aspect-[1.32] items-center justify-center overflow-hidden rounded-xl border border-line bg-card ${image}`} role="img" aria-label={alt}>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="font-mono text-xs text-muted">{title}</span>
      </div>
    </div>
  );
}
