import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("es", "about", "/sobre-mi");

export default function AboutPage() {
  return <AboutPageContent />;
}
