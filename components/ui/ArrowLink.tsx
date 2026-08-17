import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return <Link className={cn("group inline-flex items-center gap-2 text-sm font-semibold text-ink", className)} {...props}>{children}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></Link>;
}
