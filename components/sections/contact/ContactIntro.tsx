import { contactChannels, getWhatsAppHref } from "@/constants/contact";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function ContactIntro({ locale = "es" }: { locale?: "en" | "es" }) {
  const channels = [
    { label: "Email", value: contactChannels.email, href: contactChannels.email ? `mailto:${contactChannels.email}` : "" },
    { label: "LinkedIn", value: contactChannels.linkedIn, href: contactChannels.linkedIn },
    { label: "GitHub", value: contactChannels.github, href: contactChannels.github },
  ];

  const en = locale === "en";
  const whatsappHref = getWhatsAppHref(locale);
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{en ? "Let's talk about your project" : "Hablemos de tu proyecto"}</h2>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">{en ? "You don't need to have every detail defined. With a general idea of what you need, we can start a conversation and explore the best solution." : "No necesitás tener todo definido. Con una idea general alcanza para empezar."}</p>
      <p className="mt-5 text-sm text-muted">{en ? "I usually reply to every inquiry personally." : "Normalmente respondo personalmente cada consulta."}</p>
      {whatsappHref && (
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-sm font-medium text-ink">{en ? "Prefer to talk directly?" : "¿Preferís hablar directamente?"}</p>
          <TrackedLink href={whatsappHref} external eventName="click_whatsapp" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center text-sm font-semibold text-accent hover:text-ink">{en ? "Write to me on WhatsApp" : "Escribime por WhatsApp"} <span className="ml-2" aria-hidden="true">→</span></TrackedLink>
        </div>
      )}
      <div className="mt-10 border-t border-line pt-6">
        <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"><span className="text-muted/60">{"//"}</span>{en ? "You can also find me on" : "También podés encontrarme en"}</p>
        <ul className="mt-4 space-y-3">
          {channels.filter((channel) => channel.value).map((channel) => (
            <li key={channel.label}><a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined} className="text-sm font-medium text-ink hover:text-accent">{channel.label} <span aria-hidden="true">→</span></a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
