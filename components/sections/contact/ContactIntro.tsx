import { contactChannels } from "@/constants/contact";

export function ContactIntro() {
  const channels = [
    { label: "Email", value: contactChannels.email, href: contactChannels.email ? `mailto:${contactChannels.email}` : "" },
    { label: "LinkedIn", value: contactChannels.linkedIn, href: contactChannels.linkedIn },
    { label: "GitHub", value: contactChannels.github, href: contactChannels.github },
  ];

  return <div><h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Hablemos de tu proyecto</h2><p className="mt-4 max-w-md text-base leading-7 text-muted">No hace falta que tengas todos los detalles definidos. Con una idea general de lo que necesitás podemos empezar a conversar y evaluar la mejor solución.</p><p className="mt-5 text-sm text-muted">Normalmente respondo personalmente cada consulta.</p><div className="mt-10 border-t border-line pt-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">También podés encontrarme en</p><ul className="mt-4 space-y-3">{channels.filter((channel) => channel.value).map((channel) => <li key={channel.label}><a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined} className="text-sm font-medium text-ink hover:text-accent">{channel.label} <span aria-hidden="true">→</span></a></li>)}</ul></div></div>;
}
