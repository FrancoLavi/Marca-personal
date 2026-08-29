import type { ServiceIconName } from "@/types/service";

const iconPaths: Record<ServiceIconName, string> = {
  web: "M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-9ZM8 20h8M12 16v4M7 8h10M7 11h4",
  software: "M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-13ZM8 8h8M8 12h5M8 16h3",
  commerce: "M4 5h16l-1.5 8h-13L4 5Zm0 0L3 3M7 17.5A1.5 1.5 0 1 0 7 20.5a1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
  automation: "M12 4v3m0 10v3M4 12h3m10 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1m-7.2 7.2-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-canvas text-accent transition-[transform,border-color] duration-300 group-hover:-rotate-3 group-hover:border-accent/40" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d={iconPaths[name]} />
      </svg>
    </span>
  );
}
