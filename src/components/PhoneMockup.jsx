import Image from "next/image";
import React from "react";

const PhoneMockup = ({ isVisible }) => (
  <div
    className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-500 ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
    }`}
  >
    <div className="relative">
      {/* Enhanced Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 rounded-full blur-3xl scale-125 animate-pulse"></div>

      {/* Additional Glow Layers */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-purple-600/20 rounded-full blur-2xl scale-110 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 hover:rotate-1">
        <Image
          src="/phone-mockup-new.png"
          alt="Fametonic App Analytics Dashboard"
          width={500}
          height={600}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
          priority
        />
        {/* Animated Background Circles */}
        <div
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-sm opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-sm opacity-50 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
