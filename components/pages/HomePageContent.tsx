import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ProjectsSection } from "@/components/sections/home/ProjectsSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";

export function HomePageContent({ locale = "es" }: { locale?: "en" | "es" }) {
  return <><HeroSection locale={locale} /><ServicesSection locale={locale} /><ProjectsSection locale={locale} /><ProcessSection locale={locale} /><FinalCtaSection locale={locale} /></>;
}
