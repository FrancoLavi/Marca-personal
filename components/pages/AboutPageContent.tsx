import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutTechnologiesSection } from "@/components/sections/about/AboutTechnologiesSection";
import { EducationSection } from "@/components/sections/about/EducationSection";
import { ExperienceSection } from "@/components/sections/about/ExperienceSection";
import { IntroductionSection } from "@/components/sections/about/IntroductionSection";
import { PrinciplesSection } from "@/components/sections/about/PrinciplesSection";
import { ProfessionalIntroSection } from "@/components/sections/about/ProfessionalIntroSection";

export function AboutPageContent({ locale = "es" }: { locale?: "en" | "es" }) {
  return <><AboutHero locale={locale} /><IntroductionSection locale={locale} /><ProfessionalIntroSection locale={locale} /><ExperienceSection locale={locale} /><PrinciplesSection locale={locale} /><EducationSection locale={locale} /><AboutTechnologiesSection locale={locale} /><AboutCta locale={locale} /></>;
}
