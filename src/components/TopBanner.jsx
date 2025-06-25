import React from "react";

const TopBanner = () => (
  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-3 text-center overflow-hidden global-padding font-figtree">
    <div className="z-10 flex items-start justify-center gap-2 font-bold text-white text-[22px">
      <span className="text-lg">🚀</span>
      <span className="drop-shadow-lg text-[16px] md:text-[22px] font-extrabold">
        <span className="text-cyan-200 ">FRESH BEGINNINGS SALE:</span> Extra 25%
        OFF, Limited Spots - start your journey today!
      </span>
    </div>
  </div>
);

export default TopBanner;
