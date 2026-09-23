import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("es", "contact", "/contacto");

export default function ContactPage() {
  return <ContactPageContent />;
}
