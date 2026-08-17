import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ProjectsSection } from "@/components/sections/home/ProjectsSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";

export default function HomePage() {
  return <><HeroSection /><ServicesSection /><ProjectsSection /><ProcessSection /><FinalCtaSection /></>;
}
