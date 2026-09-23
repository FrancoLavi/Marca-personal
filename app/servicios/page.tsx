import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("es", "services", "/servicios");

export default function ServicesPage() {
  return <ServicesPageContent />;
}
