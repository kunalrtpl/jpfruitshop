import ProductClient from "./ProductClient";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Fresh Fruits | ${siteConfig.appName}`,
  description: `Explore fresh and juicy fruits at ${siteConfig.appName} — your best fruit store online.`,
  keywords: ["fruits", "fresh fruits", "fruit shop", siteConfig.appName, "ecommerce"],
};

export default function ProductsPage() {
  // This is a server component, just loads metadata + client UI
  return <ProductClient />;
}
