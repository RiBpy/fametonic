import React from "react";

const TopBanner = () => (
  <div className="bg-gradient-to-r from-red-500 via-purple-400 to-cyan-400 py-3 overflow-hidden global-padding font-figtree text-center">
    <div className="z-10 w-full space-x-1 font-bold text-white text-[22px">
      <span className="text-lg">🚀</span>
      <span className="text-[16px] md:text-[22px] font-extrabold">
        <span className="text-cyan-200 ">FRESH BEGINNINGS SALE:</span> Extra 25%
        OFF, Limited Spots - start your journey today!
      </span>
    </div>
  </div>
);

export default TopBanner;
