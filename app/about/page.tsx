import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.appName}`,
  description: `Learn about ${siteConfig.appName} — our story, mission, and passion for fresh fruits.`,
  keywords: ["fruits", "fruit shop", "fresh fruits", siteConfig.appName, "about us"],
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 via-green-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500 py-20">
        <div className="container mx-auto px-6 text-center text-white max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            At <strong>{siteConfig.appName}</strong>, we believe in bringing you the freshest, juiciest fruits straight from the farm to your table. Our passion for quality and sustainability drives everything we do.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16">
          <h2 className="text-3xl font-extrabold mb-8 text-green-900 border-b-4 border-yellow-400 inline-block pb-2">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission at <strong>{siteConfig.appName}</strong> is to provide our customers with the highest quality fresh fruits, harvested at peak ripeness and delivered with care. We partner directly with trusted local farmers who share our commitment to sustainable and organic farming practices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you’re craving tropical delights like mangoes and pineapples, or classic favorites like apples and bananas, we ensure every bite is bursting with flavor and nutrition. We want to make healthy eating easy, accessible, and delicious for everyone.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-green-800">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
            <li>🌱 100% fresh, pesticide-free and organic fruits</li>
            <li>🚚 Fast and reliable delivery to your doorstep</li>
            <li>🤝 Strong relationships with local farmers and suppliers</li>
            <li>💚 Dedicated to sustainability and eco-friendly packaging</li>
            <li>💰 Competitive pricing with seasonal offers and discounts</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you for choosing <strong>{siteConfig.appName}</strong> — we’re excited to be part of your journey to better health and happiness with nature’s sweetest gifts.
          </p>
        </div>
      </div>
    </section>
  );
}
