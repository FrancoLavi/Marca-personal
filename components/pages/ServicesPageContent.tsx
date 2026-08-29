import { ApproachSection } from "@/components/sections/services/ApproachSection";
import { ServicesCta } from "@/components/sections/services/ServicesCta";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesListSection } from "@/components/sections/services/ServicesListSection";
import { TechnologiesSection } from "@/components/sections/services/TechnologiesSection";

export function ServicesPageContent({ locale = "es" }: { locale?: "en" | "es" }) {
  return <><ServicesHero locale={locale} /><ServicesListSection locale={locale} /><ApproachSection locale={locale} /><TechnologiesSection locale={locale} /><ServicesCta locale={locale} /></>;
}
