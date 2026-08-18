import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Metadata } from "next";

const locales = ["en", "es"] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "es"
    ? { title: { default: "Franco Lavirgen | Desarrollo de software", template: "%s | Franco Lavirgen" }, description: "Desarrollo soluciones digitales a medida para personas, profesionales y empresas." }
    : { title: { default: "Franco Lavirgen | Software Developer", template: "%s | Franco Lavirgen" }, description: "I build tailored digital solutions for people, professionals, and businesses." };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return <div className="flex min-h-screen flex-col"><SiteHeader locale={locale as (typeof locales)[number]} /><main className="flex-1">{children}</main><SiteFooter locale={locale as (typeof locales)[number]} /></div>;
}
