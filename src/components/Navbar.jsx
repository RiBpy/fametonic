import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const commonMenuClasses =
    "text-[#A9A9A9] hover:text-white hover:scale-[1.15] transition-all duration-300 font-medium";

  return (
    <nav className="relative z-50 global-padding py-6 font-figtree">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-between">
        {/* Logo */}
        <div
          className={`transform transition-all duration-1000 md:translate-x-0 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:transform-none ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
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
          <a href="#" className={commonMenuClasses}>
            About us
          </a>
          <a href="#" className={commonMenuClasses}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2 ml-auto relative z-10"
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
          <a href="#" className={`block ${commonMenuClasses} `}>
            About us
          </a>
          <a href="#" className={`block ${commonMenuClasses} `}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
