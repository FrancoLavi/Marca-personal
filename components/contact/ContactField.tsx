import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContactFieldProps = { label: string; required?: boolean; id: string };

export function ContactLabel({ label, required, id }: ContactFieldProps) {
  return <label htmlFor={id} className="block text-sm font-semibold text-ink">{label}{required && <span aria-hidden="true"> *</span>}</label>;
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={`${id}-error`} className="mt-2 text-sm text-red-400" role="alert">{message}</p> : null;
}

export function ContactInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("mt-2 min-h-12 w-full rounded-lg border border-line bg-canvas px-4 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20", className)} {...props} />;
}

export function ContactSelect({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("mt-2 min-h-12 w-full rounded-lg border border-line bg-canvas px-4 text-base text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20", className)} {...props} />;
}

export function ContactTextarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("mt-2 min-h-36 w-full resize-y rounded-lg border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20", className)} {...props} />;
}
