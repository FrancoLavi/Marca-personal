import { HomePageContent } from "@/components/pages/HomePageContent";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("es", "home", "");
export default function HomePage() {
  return <HomePageContent />;
}
