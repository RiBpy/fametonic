import React from "react";

const TopBanner = () => (
  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-3 text-center relative overflow-hidden global-padding font-figtree">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-400/20 animate-pulse"></div>
    <div className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base font-bold text-white text-[22px">
      <span className="text-lg">🚀</span>
      <span className="drop-shadow-lg">
        <span className="text-cyan-200">FRESH BEGINNINGS SALE:</span> Extra 25%
        OFF, Limited Spots - start your journey today!
      </span>
    </div>
  </div>
);

export default TopBanner;
