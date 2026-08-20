"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { contactChannels, getWhatsAppHref } from "@/constants/contact";
import { budgetOptions, projectTypes, type ContactFormErrors, type ContactFormValues } from "@/types/contact";
import { trackConversion } from "@/lib/analytics";
import { normalizeContactValues, validateContactValues } from "@/lib/contact-validation";
import { ContactInput, ContactLabel, ContactSelect, ContactTextarea, FieldError } from "@/components/contact/ContactField";
import { TrackedLink } from "@/components/ui/TrackedLink";

const initialValues: ContactFormValues = { name: "", email: "", organization: "", projectType: "", budget: "", message: "", website: "" };

export function ContactForm({ locale = "es" }: { locale?: "en" | "es" }) {
  const en = locale === "en";
  const labels = en
    ? { name: "Name", namePlaceholder: "Your name", organization: "Company or project", optional: "Optional", needs: "What do you need?", select: "Select an option", budget: "Do you have an approximate budget?", message: "Tell me a little about your idea", messagePlaceholder: "What would you like to build or what problem do you need to solve?", sending: "Sending...", submit: "Send inquiry", privacy: "I will use your information only to reply to your inquiry", fallback: "I couldn't send your message right now. Please try again.", whatsappFallback: "We couldn't send your inquiry. You can write to me directly on WhatsApp.", emailFallback: "You can also write to me by email." }
    : { name: "Nombre", namePlaceholder: "Tu nombre", organization: "Empresa o proyecto", optional: "Opcional", needs: "¿Qué necesitás?", select: "Seleccioná una opción", budget: "¿Tenés un presupuesto aproximado?", message: "Contame un poco sobre tu idea", messagePlaceholder: "¿Qué querés desarrollar o qué problema necesitás resolver?", sending: "Enviando...", submit: "Enviar consulta", privacy: "Usaré tus datos únicamente para responder a tu consulta", fallback: "No pude enviar tu consulta en este momento. Intentá nuevamente.", whatsappFallback: "No pudimos enviar tu consulta. Podés escribirme directamente por WhatsApp.", emailFallback: "También podés escribirme por email." };
  const projectOptionLabels: Record<string, string> = en ? { "Página web": "Website", "Aplicación web": "Web application", "Software a medida": "Custom software", "Automatización o integración": "Automation or integration", "Mejorar un sistema existente": "Improve an existing system", "Todavía no estoy seguro": "I'm not sure yet" } : {};
  const budgetOptionLabels: Record<string, string> = en ? { "Todavía no lo definí": "I haven't defined it yet", "Menos de USD 500": "Less than USD 500", "Más de USD 2.500": "More than USD 2,500" } : {};
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formStarted = useRef(false);
  const whatsappHref = getWhatsAppHref(locale);

  function handleFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackConversion("contact_form_started");
  }

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

    if (Object.keys(clientErrors).length > 0) {
      trackConversion("contact_form_error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(normalized) });
      const result = (await response.json()) as { ok: boolean; errors?: ContactFormErrors; message?: string };

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setServerMessage(result.message ?? labels.fallback);
        setStatus("error");
        trackConversion("contact_form_error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
      trackConversion("contact_form_success");
    } catch {
      setServerMessage(labels.fallback);
      setStatus("error");
      trackConversion("contact_form_error");
    }
  }

  if (status === "success") return <div className="rounded-2xl border border-[#b8dcd5] bg-[#eef8f6] p-6" role="status" aria-live="polite"><h2 className="text-xl font-semibold text-ink">{en ? "Thanks for reaching out!" : "¡Gracias por escribirme!"}</h2><p className="mt-3 text-sm leading-6 text-muted">{en ? "I received your message. I'll read it and reply personally." : "Recibí tu consulta. Voy a leerla y responderte personalmente."}</p></div>;

  return <form onFocus={handleFormStart} onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8" aria-describedby="contact-form-note"><div className="grid gap-6 sm:grid-cols-2"><div><ContactLabel id="name" label={labels.name} required /><ContactInput id="name" name="name" type="text" autoComplete="name" placeholder={labels.namePlaceholder} required value={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={(event) => updateValue("name", event.target.value)} /><FieldError id="name" message={errors.name} /></div><div><ContactLabel id="email" label="Email" required /><ContactInput id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required value={values.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={(event) => updateValue("email", event.target.value)} /><FieldError id="email" message={errors.email} /></div><div><ContactLabel id="organization" label={labels.organization} /><ContactInput id="organization" name="organization" type="text" autoComplete="organization" placeholder={labels.optional} value={values.organization} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} onChange={(event) => updateValue("organization", event.target.value)} /><FieldError id="organization" message={errors.organization} /></div><div><ContactLabel id="projectType" label={labels.needs} required /><ContactSelect id="projectType" name="projectType" required value={values.projectType} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined} onChange={(event) => updateValue("projectType", event.target.value)}><option value="">{labels.select}</option>{projectTypes.map((option) => <option key={option} value={option}>{projectOptionLabels[option] ?? option}</option>)}</ContactSelect><FieldError id="projectType" message={errors.projectType} /></div><div><ContactLabel id="budget" label={labels.budget} /><ContactSelect id="budget" name="budget" value={values.budget} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "budget-error" : undefined} onChange={(event) => updateValue("budget", event.target.value)}><option value="">{labels.optional}</option>{budgetOptions.map((option) => <option key={option} value={option}>{budgetOptionLabels[option] ?? option}</option>)}</ContactSelect><FieldError id="budget" message={errors.budget} /></div><div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue("website", event.target.value)} /></div></div><div className="mt-6"><ContactLabel id="message" label={labels.message} required /><ContactTextarea id="message" name="message" placeholder={labels.messagePlaceholder} required value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={(event) => updateValue("message", event.target.value)} /><FieldError id="message" message={errors.message} /></div><div className="mt-7 flex flex-col items-start gap-4"><button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? labels.sending : labels.submit}</button><p id="contact-form-note" className="text-xs leading-5 text-muted">{labels.privacy}</p>{status === "error" && <div className="space-y-2 text-sm" role="alert"><p className="text-red-700">{serverMessage || labels.fallback}</p>{whatsappHref && <TrackedLink href={whatsappHref} external eventName="click_whatsapp" target="_blank" rel="noreferrer" className="inline-flex font-semibold text-accent hover:text-ink">{labels.whatsappFallback} <span className="ml-2" aria-hidden="true">→</span></TrackedLink>}{contactChannels.email && <a href={`mailto:${contactChannels.email}`} className="block font-semibold text-accent hover:text-ink">{labels.emailFallback} <span aria-hidden="true">→</span></a>}</div>}</div></form>;
}
