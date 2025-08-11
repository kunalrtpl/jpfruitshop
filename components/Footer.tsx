"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-8">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-wide">{siteConfig.appName}</h3>
          <p className="text-sm text-gray-400 mt-2">{siteConfig.description}</p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-300 mb-2">
            <a href={`tel:${siteConfig.contactNumber}`} className="hover:text-white">{siteConfig.contactNumber}</a>
          </p>
          <p className="text-gray-300 mb-4">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              <FaFacebook className="text-xl" />
            </a>
            <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              <FaTwitter className="text-xl" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-white">{siteConfig.appName}</span>. All rights reserved.
      </div>
    </footer>
  );
}
