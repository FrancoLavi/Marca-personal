import Link from "next/link";

export function PrivacyNotice({ locale }: { locale: "en" | "es" }) {
  return (
    <p className="mt-4 text-xs leading-5 text-muted">
      {locale === "en" ? "Before sending this inquiry, you can read the" : "Antes de enviar esta consulta, podés leer la"}{" "}
      <Link href={`/${locale}/privacidad`} className="underline decoration-line underline-offset-2 hover:text-ink">
        {locale === "en" ? "privacy policy" : "política de privacidad"}
      </Link>{locale === "en" ? "." : "."}
    </p>
  );
}
