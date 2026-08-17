export function MenuIcon({ open }: { open: boolean }) {
  return <span className="relative block h-5 w-5" aria-hidden="true"><span className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`absolute left-0 top-2.5 block h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 block h-px w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} /></span>;
}
