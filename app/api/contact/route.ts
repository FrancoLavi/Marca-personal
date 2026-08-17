import { Resend } from "resend";
import { normalizeContactValues, validateContactValues } from "@/lib/contact-validation";
import type { ContactFormValues } from "@/types/contact";

function readValues(body: unknown): ContactFormValues {
  if (!body || typeof body !== "object") {
    return { name: "", email: "", organization: "", projectType: "", budget: "", message: "", website: "" };
  }

  const payload = body as Record<string, unknown>;
  return {
    name: typeof payload.name === "string" ? payload.name : "",
    email: typeof payload.email === "string" ? payload.email : "",
    organization: typeof payload.organization === "string" ? payload.organization : "",
    projectType: typeof payload.projectType === "string" ? payload.projectType : "",
    budget: typeof payload.budget === "string" ? payload.budget : "",
    message: typeof payload.message === "string" ? payload.message : "",
    website: typeof payload.website === "string" ? payload.website : "",
  };
}

export async function POST(request: Request) {
  try {
    const values = normalizeContactValues(readValues(await request.json()));
    const errors = validateContactValues(values);

    if (values.website) return Response.json({ ok: true });
    if (Object.keys(errors).length > 0) return Response.json({ ok: false, errors }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !contactEmail || !fromEmail) {
      return Response.json({ ok: false, message: "El servicio de contacto no está configurado." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: values.email,
      subject: `Nueva consulta de ${values.name}`,
      text: [
        `Nombre: ${values.name}`,
        `Email: ${values.email}`,
        `Empresa o proyecto: ${values.organization || "No indicado"}`,
        `Tipo de proyecto: ${values.projectType}`,
        `Presupuesto: ${values.budget || "No indicado"}`,
        "",
        "Mensaje:",
        values.message,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Resend contact error:", result.error.name, result.error.message);
      return Response.json({ ok: false, message: "No se pudo enviar la consulta." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, message: "No se pudo enviar la consulta." }, { status: 500 });
  }
}
