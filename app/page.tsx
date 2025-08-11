import { siteConfig } from "@/config/siteConfig";
import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: `Home | ${siteConfig.appName}`,
  description: `Discover the freshest fruits and best deals at ${siteConfig.appName} — your friendly online fruit shop!`,
  keywords: ["fruits", "fresh fruits", "fruit shop", siteConfig.appName, "ecommerce"],
};

export default function HomePage() {
  return <HomeContent />;
}
