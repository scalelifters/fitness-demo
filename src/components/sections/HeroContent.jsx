import React from 'react';
import { brand } from '../../brands';
import { ArrowUpRight, Play } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start w-full lg:max-w-[680px] z-20">
      {/* Kicker Badge */}
      <div className="flex items-center gap-3 lg:gap-5 mb-3 lg:mb-4">
        <span className="w-8 lg:w-14 h-[2px] lg:h-[3px] bg-brand-lime" />
        <span className="text-brand-lime text-sm lg:text-[17px] font-extrabold tracking-[0.14em] uppercase">
          Train Different
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display italic text-[76px] sm:text-[100px] lg:text-[150px] leading-[0.9] lg:leading-[0.88] tracking-[0.01em] uppercase select-none mb-2 lg:mb-5" style={{ WebkitTextStroke: '1.5px currentColor' }}>
        <span className="block text-white">Become</span>
        <span className="block text-brand-lime">Stronger</span>
      </h1>

      {/* Lime dash under headline (desktop) */}
      <div className="hidden lg:block w-14 h-[3px] bg-brand-lime mb-8" />

      {/* Description */}
      <p className="text-gray-100 text-[17px] lg:text-[19px] font-normal leading-[1.65] lg:leading-[1.75] mb-8 lg:mb-12">
        <span className="lg:hidden">
          A premium training environment<br />
          in the heart of {brand.area}.<br />
          Built for results. Built for you.
        </span>
        <span className="hidden lg:inline">
          A premium training environment in the heart of {brand.area}.<br />
          Built for results. Built for you.
        </span>
      </p>

      {/* Action Buttons */}
      <div className="w-full lg:w-auto flex flex-col lg:flex-row lg:items-center gap-3.5 lg:gap-6">
        {/* Primary CTA */}
        <a
          href="#join"
          className="group inline-flex items-center justify-between lg:justify-center gap-3 w-full lg:w-auto bg-brand-lime hover:bg-brand-limeHover text-black font-extrabold text-[15px] lg:text-[15px] uppercase tracking-[0.06em] px-6 lg:px-9 h-[64px] lg:h-[62px] rounded-[5px] transition-all active:scale-[0.98] duration-150"
        >
          <span className="flex-1 text-center lg:flex-none">Start Your Journey</span>
          <ArrowUpRight className="w-6 h-6 stroke-[2.5] transition-transform duration-200 lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5" />
        </a>

        {/* Secondary Video CTA */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-3 w-full lg:w-auto bg-transparent lg:bg-brand-card/90 hover:bg-white/5 lg:hover:bg-[#1a1d24] text-white border border-white/60 font-bold text-[15px] uppercase tracking-[0.06em] px-6 lg:px-9 h-[64px] lg:h-[62px] rounded-[5px] transition-all duration-150"
        >
          <Play className="w-[18px] h-[18px] fill-white text-white" />
          <span>Watch Video</span>
        </button>
      </div>
    </div>
  );
}