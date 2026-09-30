import React from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../layout/Navbar';
import HeroContent from './HeroContent';
import HeroStatsBar from './HeroStatsBar';
import HeroPagination from './HeroPagination';
import heroBg from '../../assets/hero_section_bg.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-brand-dark pt-20 lg:pt-24">
      {/*
        Background Layer:
        - Mobile: crisp image at top (~620px), long fade into pure black behind content
        - Desktop: image fills right side, dark vignette on left for text legibility
      */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={heroBg}
          alt="Gym athlete training"
          className="w-full h-full object-contain object-[0%_28%] lg:object-[0%_50%] opacity-100 scale-[1.80] lg:scale-125 -translate-x-20 lg:translate-x-0"
        />
        {/* Mobile: seamless dark gradient — starts transparent, gradually darkens to solid brand-dark at bottom. No hard line. */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(6,7,9,0.40) 40%, rgba(6,7,9,0.88) 55%, rgba(6,7,9,0.98) 78%, #060709 92%, #060709 100%)',
          }}
        />

        {/* Desktop: subtle darkening at very top + narrow left vignette only */}
        <div className="hidden lg:block absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark/80 to-transparent" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-brand-dark via-brand-dark/10 to-brand-dark/10" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-brand-dark via-brand-dark/100 to-brand-dark/10" />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Center Content */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-5 lg:px-10 pt-[20vh] lg:pt-20 pb-0 lg:pb-4 flex-1 flex flex-col justify-center lg:justify-end">
        <HeroContent />
        <HeroPagination />
        <HeroStatsBar />
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 pt-3 pb-2 lg:pt-5 lg:pb-4 flex justify-center items-center">
        <a
          href="#programs"
          className="text-brand-lime/90 hover:text-brand-lime transition-colors duration-200 animate-bounceDown"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-7 h-7 stroke-[2.2]" />
        </a>
      </div>
    </section>
  );
}