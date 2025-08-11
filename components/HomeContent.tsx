"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function HomeContent() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-200 via-yellow-100 to-pink-200 flex items-center justify-center px-6 lg:px-20 overflow-hidden">
      {/* Center glowing radial background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[600px] h-[600px] rounded-full bg-yellow-300 opacity-20 filter blur-3xl animate-glowPulse" />
        <div className="w-[450px] h-[450px] rounded-full bg-pink-400 opacity-15 filter blur-2xl animate-glowPulse animation-delay-1500" />
        <div className="w-[350px] h-[350px] rounded-full bg-green-400 opacity-10 filter blur-2xl animate-glowPulse animation-delay-3000" />
      </div>

      {/* Floating colorful bubbles behind content */}
      {[...Array(12)].map((_, i) => {
        const size = 12 + Math.random() * 28;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="absolute rounded-full opacity-30 filter blur-sm animate-floatingBubble"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 75%)`,
              animationDelay: `${i * 800}ms`,
            }}
          />
        );
      })}

      {/* Content card with frosted glass */}
      <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 max-w-4xl w-full p-16 text-center select-none animate-floatUp">
        <h1 className="text-6xl font-extrabold mb-8 text-green-900 tracking-tight leading-tight text-shadow-glow">
          Welcome to{" "}
          <span className="text-yellow-400 drop-shadow-xl">{siteConfig.appName}</span>
        </h1>

        <p className="text-green-800 mb-16 text-2xl leading-relaxed font-semibold max-w-3xl mx-auto">
          🍏 Fresh, handpicked fruits delivered right to your doorstep. Taste nature’s best every day with our seasonal and tropical selections.
        </p>

        <ul className="max-w-3xl mx-auto mb-20 space-y-6 text-green-700 font-semibold text-left text-xl">
          <li>🛒 Easy & secure online ordering</li>
          <li>🌿 Organic & pesticide-free selections</li>
          <li>🚚 Fast & fresh home delivery</li>
          <li>💰 Seasonal discounts and offers</li>
        </ul>

        <Link
          href="/products"
          className="inline-block px-16 py-5 bg-yellow-400 text-green-900 font-extrabold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-pulse-slow"
          aria-label="Browse Products"
        >
          🍉 Explore Fresh Fruits
        </Link>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-glowPulse {
          animation: glowPulse 6s ease-in-out infinite;
        }

        @keyframes floatingBubble {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
        .animate-floatingBubble {
          animation: floatingBubble 8s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-floatUp {
          animation: floatUp 5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.75;
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .text-shadow-glow {
          text-shadow:
            0 0 6px rgba(255 223 71 / 0.8),
            0 0 10px rgba(255 223 71 / 0.5),
            0 0 15px rgba(255 223 71 / 0.3);
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
