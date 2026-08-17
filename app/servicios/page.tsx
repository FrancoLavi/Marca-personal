import { ApproachSection } from "@/components/sections/services/ApproachSection";
import { ServicesCta } from "@/components/sections/services/ServicesCta";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesListSection } from "@/components/sections/services/ServicesListSection";
import { TechnologiesSection } from "@/components/sections/services/TechnologiesSection";

export const metadata = { title: "Servicios" };

export default function ServicesPage() {
  return <><ServicesHero /><ServicesListSection /><ApproachSection /><TechnologiesSection /><ServicesCta /></>;
}
