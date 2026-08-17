import Image from "next/image";

type ProjectVisualProps = { image: string; title: string; featured?: boolean };

export function ProjectVisual({ image, title, featured = false }: ProjectVisualProps) {
  if (image.startsWith("/")) {
    return <div className={`relative overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-soft ${featured ? "aspect-[1.9]" : "aspect-[1.32]"}`}><Image src={image} alt={`Vista previa del proyecto ${title}`} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.025]" sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 33vw"} /></div>;
  }

  return <div className={`relative aspect-[1.32] overflow-hidden rounded-2xl border border-line bg-white p-4 ${image} ${featured ? "sm:p-5" : ""}`} role="img" aria-label={`Vista previa del proyecto ${title}`}><div className="h-full rounded-xl bg-[#17282d]/70 p-4 shadow-sm"><div className="flex items-center justify-between"><span className="h-2 w-20 rounded-full bg-white/15" /><span className="h-5 w-5 rounded-full bg-accent/20" /></div><div className="mt-5 grid h-[calc(100%-2rem)] grid-cols-[0.7fr_1fr] gap-3"><div className="rounded-lg bg-white/[0.04] p-3"><span className="block h-2 w-12 rounded-full bg-white/15" /><span className="mt-3 block h-2 w-16 rounded-full bg-white/10" /><span className="mt-3 block h-2 w-10 rounded-full bg-white/10" /></div><div className="rounded-lg bg-[#1d2b31] p-3 shadow-sm"><div className="flex h-full items-end gap-1.5"><span className="h-1/2 flex-1 rounded-t bg-accent/30" /><span className="h-3/4 flex-1 rounded-t bg-accent/60" /><span className="h-2/5 flex-1 rounded-t bg-white/15" /><span className="h-full flex-1 rounded-t bg-accent/40" /></div></div></div></div></div>;
}
