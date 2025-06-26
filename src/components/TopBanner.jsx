import Image from "next/image";
import React from "react";

const TopBanner = () => (
  <div className="bg-gradient-to-r from-[#E91E63] from-0% via-[#8B5CF6] via-75% to-[#06B6D4] to-100% py-3 overflow-hidden global-padding font-figtree text-center">
    <div className="z-10 w-full font-bold text-white text-[22px] flex items-center gap-2 justify-center">
      <Image src="/rocket.png" className="size-[24px]" alt="Rocket Icon" width={24} height={24} />
      <span className="text-[16px] md:text-[22px] font-extrabold">
        <span className="text-[#00E7F9] ">FRESH BEGINNINGS SALE:</span> Extra
        25% OFF, Limited Spots - start your journey today!
      </span>
    </div>
  </div>
);

export default TopBanner;
