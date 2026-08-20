export const contactChannels = {
  email: "francolavi123@gmail.com",
  whatsapp: "+54 9 291 442 1914",
  linkedIn: "",
  github: "",
} as const;

const whatsappMessages = {
  en: "Hi Franco, I saw your website and I'd like to ask you about a project.",
  es: "Hola Franco, vi tu página y quería consultarte por un proyecto.",
} as const;

export function getWhatsAppHref(locale: "en" | "es") {
  const phone = contactChannels.whatsapp.replace(/\D/g, "");
  if (!phone) return null;

  return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessages[locale])}`;
}
