"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackConversion, type ConversionEvent } from "@/lib/analytics";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  href: string;
  eventName: ConversionEvent;
  external?: boolean;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function TrackedLink({ href, eventName, external = false, onClick, children, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackConversion(eventName);
    onClick?.(event);
  }

  if (external) {
    return <a href={href} {...props} onClick={handleClick}>{children}</a>;
  }

  return <Link href={href} {...props} onClick={handleClick}>{children}</Link>;
}
