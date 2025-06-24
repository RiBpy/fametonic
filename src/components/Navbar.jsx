import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-50 global-padding py-6 font-figtree">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <Image
            src="/fametonic-logo.png"
            alt="Fametonic"
            width={120}
            height={60}
            className="h-12 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            About us
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
