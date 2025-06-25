import React from "react";

const FeatureList = ({ isVisible }) => (
  <div className="space-y-4">
    {[
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers",
    ].map((text, index) => (
      <div
        key={index}
        className={`flex items-start gap-4 transform transition-all duration-700 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
        style={{ transitionDelay: `${600 + index * 200}ms` }}
      >
        <div className="flex-shrink-0 mt-1">
          <div className="text-yellow-400 text-xl animate-pulse">✨</div>
        </div>
        <p className="text-white leading-relaxed drop-shadow-lg font-figtree text-[16px] font-semibold">
          {text}
        </p>
      </div>
    ))}
  </div>
);

export default FeatureList;
