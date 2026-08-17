"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { budgetOptions, projectTypes, type ContactFormErrors, type ContactFormValues } from "@/types/contact";
import { normalizeContactValues, validateContactValues } from "@/lib/contact-validation";
import { ContactInput, ContactLabel, ContactSelect, ContactTextarea, FieldError } from "@/components/contact/ContactField";

const initialValues: ContactFormValues = { name: "", email: "", organization: "", projectType: "", budget: "", message: "", website: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function updateValue(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = normalizeContactValues(values);
    const clientErrors = validateContactValues(normalized);
    delete clientErrors.website;
    setErrors(clientErrors);
    setServerMessage("");
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(normalized) });
      const result = (await response.json()) as { ok: boolean; errors?: ContactFormErrors; message?: string };
      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setServerMessage(result.message ?? "No pude enviar tu consulta en este momento. Intentá nuevamente.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setValues(initialValues);
    } catch {
      setServerMessage("No pude enviar tu consulta en este momento. Intentá nuevamente.");
      setStatus("error");
    }
  }

  if (status === "success") return <div className="rounded-2xl border border-[#b8dcd5] bg-[#eef8f6] p-6" role="status" aria-live="polite"><h2 className="text-xl font-semibold text-ink">¡Gracias por escribirme!</h2><p className="mt-3 text-sm leading-6 text-muted">Recibí tu consulta. Voy a leerla y responderte personalmente.</p></div>;

  return <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8" aria-describedby="contact-form-note"><div className="grid gap-6 sm:grid-cols-2"><div><ContactLabel id="name" label="Nombre" required /><ContactInput id="name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required value={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={(event) => updateValue("name", event.target.value)} /><FieldError id="name" message={errors.name} /></div><div><ContactLabel id="email" label="Email" required /><ContactInput id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required value={values.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={(event) => updateValue("email", event.target.value)} /><FieldError id="email" message={errors.email} /></div><div><ContactLabel id="organization" label="Empresa o proyecto" /><ContactInput id="organization" name="organization" type="text" autoComplete="organization" placeholder="Opcional" value={values.organization} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} onChange={(event) => updateValue("organization", event.target.value)} /><FieldError id="organization" message={errors.organization} /></div><div><ContactLabel id="projectType" label="¿Qué necesitás?" required /><ContactSelect id="projectType" name="projectType" required value={values.projectType} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined} onChange={(event) => updateValue("projectType", event.target.value)}><option value="">Seleccioná una opción</option>{projectTypes.map((option) => <option key={option} value={option}>{option}</option>)}</ContactSelect><FieldError id="projectType" message={errors.projectType} /></div><div><ContactLabel id="budget" label="¿Tenés un presupuesto aproximado?" /><ContactSelect id="budget" name="budget" value={values.budget} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "budget-error" : undefined} onChange={(event) => updateValue("budget", event.target.value)}><option value="">Opcional</option>{budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}</ContactSelect><FieldError id="budget" message={errors.budget} /></div><div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} /></div></div><div className="mt-6"><ContactLabel id="message" label="Contame un poco sobre tu idea" required /><ContactTextarea id="message" name="message" placeholder="¿Qué querés desarrollar o qué problema necesitás resolver?" required value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={(event) => updateValue("message", event.target.value)} /><FieldError id="message" message={errors.message} /></div><div className="mt-7 flex flex-col items-start gap-4"><button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? "Enviando..." : "Enviar consulta"}</button><p id="contact-form-note" className="text-xs leading-5 text-muted">Usaré tus datos únicamente para responder a tu consulta.</p>{status === "error" && <p className="text-sm text-red-700" role="alert">{serverMessage || "No pude enviar tu consulta en este momento. Intentá nuevamente."}</p>}</div></form>;
}
