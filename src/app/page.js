"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureList from "@/components/FeatureList";
import ChevronRight from "@/components/ui/ChevronRight";
import Button from "@/components/ui/Button";
import "./globals.css";

export default function FametonicLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top Banner */}
      <TopBanner />

      {/* Navbar */}
      <Navbar isVisible={isVisible} />

      {/* Main Content */}
      <main className="global-padding py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Main Heading */}
              <div className="space-y-1 font-urbanist">
                <h1 className="text-[25px] md:text-[35px] font-extrabold md:font-bold leading-tight ">
                  <span className="text-white drop-shadow-2xl">
                    Want to Turn Social Media Into a Profitable Career?
                  </span>
                </h1>
                <h2 className="text-[25px] md:text-[35px] font-extrabold md:font-bold drop-shadow-2xl text-[#00E7F9] shadowed-text">
                  Discover your way to success with Fametonic:
                </h2>
              </div>

              {/* Feature List */}
              <FeatureList isVisible={isVisible} />

              {/* CTA Button */}

              <div
                className={`transform transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="w-full sm:w-max space-y-[10px]">
                  <Button
                    customClassName="group relative bg-gradient-to-r from-[#FC004E] to-[#FC004E] hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-[99px] rounded-xl transition-all duration-300 transform hover:scale-105 shadowed-button w-full sm:w-max"
                    Children={
                      <p className="relative z-10 flex items-center justify-center gap-2 font-figtree text-[20px] font-bold">
                        GET STARTED <ChevronRight />
                      </p>
                    }
                  />
                  <div className="text-white">
                    <p className="text-[12px]  font-figtree text-center">
                      1-minute quiz for personalized Insights
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Text */}
              <div className=" text-gray-500 space-y-2 font-figtree">
                <p className="text-[12px] font-medium">
                  By clicking <b>&quot;Get Started&quot;</b>, you agree with
                  Terms and Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] font-medium">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
            {/* Right Content - Phone Mockup */}
            <PhoneMockup isVisible={isVisible} />
          </div>
        </div>
      </main>
    </div>
  );
}
