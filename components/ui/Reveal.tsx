"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const distance = direction === "up" ? { y: 34 } : direction === "left" ? { x: 34 } : { x: -34 };

      if (reduceMotion) {
        gsap.set(element, { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(element, { opacity: 0, ...distance }, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.85,
        delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    }, element);

    return () => context.revert();
  }, [delay, direction]);

  return <div ref={ref} className={cn("reveal", className)}>{children}</div>;
}
