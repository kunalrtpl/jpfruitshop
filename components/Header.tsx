"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold text-gray-800">
          {siteConfig.appName}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} className="text-gray-600 hover:text-gray-900">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 rounded bg-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setMenuOpen(false)} // close menu on link click
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
