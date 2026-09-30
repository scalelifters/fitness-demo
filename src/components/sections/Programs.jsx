import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ropeVideo from '../../assets/rope-bg.mp4';
import icon1 from '../../assets/programs-card1.png';
import icon2 from '../../assets/programs-card2.png';
import icon3 from '../../assets/programs-card3.png';
import icon4 from '../../assets/programs-card4.png';

export default function Programs() {
  return (
    <section id="programs" className="relative h-auto lg:h-screen lg:min-h-[800px] w-full flex flex-col justify-start lg:justify-end overflow-hidden bg-black pb-6 lg:pb-10">
      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 right-0 h-[550px] lg:h-auto lg:inset-0 z-0 pointer-events-none">
        {/* Looping background video */}
        <video 
          src={ropeVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-[65%_center] lg:object-contain lg:object-[90%_center] opacity-90 lg:opacity-80"
        />
        
        {/* Gradients for text legibility and edge blending */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[85%] lg:w-[65%] bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-[#000000]/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-5 lg:px-10 flex-1 flex flex-col justify-start lg:justify-end pt-28 lg:pt-24">
        
        <div className="flex w-full justify-between items-start mb-12 lg:mb-10">
            <div className="flex flex-col items-start w-full lg:max-w-[900px] z-20">
                {/* Kicker Badge */}
                <div className="flex items-center gap-3 lg:gap-5 mb-2 lg:mb-3">
                    <span className="w-8 lg:w-14 h-[2px] lg:h-[3px] bg-brand-lime" />
                    <span className="text-brand-lime text-sm lg:text-[16px] font-extrabold tracking-[0.14em] uppercase">
                    Programs
                    </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-display italic text-[47px] sm:text-[60px] lg:text-[120px] xl:text-[130px] leading-[0.95] lg:leading-[0.88] tracking-[0.01em] uppercase select-none mb-3 lg:mb-4" style={{ WebkitTextStroke: '1.5px currentColor' }}>
                    <span className="block text-white">Real Programs</span>
                    <span className="block text-brand-lime">Real Results</span>
                </h2>

                {/* Description */}
                <p className="text-gray-100 text-[15px] lg:text-[18px] font-normal leading-[1.6] lg:leading-[1.7] max-w-[290px] sm:max-w-[720px]">
                    Choose a program that fits your goals. Backed by expertise, built for real progress.
                </p>
            </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <ProgramCard 
                title="Strength Training"
                desc="Build strength. Build discipline."
                icon={<img src={icon1} alt="Strength Training" className="w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] object-contain" />}
                imgSrc="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
                backInfo="Focus on compound movements like squats, deadlifts, and presses. Build muscle mass, increase bone density, and boost your metabolism."
            />
            <ProgramCard 
                title="Weight Loss"
                desc="A stronger, leaner you."
                icon={<img src={icon2} alt="Weight Loss" className="w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] object-contain" />}
                imgSrc="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                backInfo="High-intensity cardio combined with circuit training. Designed to burn maximum calories and improve cardiovascular health."
            />
            <ProgramCard 
                title="Functional Fitness"
                desc="Move better. Live better."
                icon={<img src={icon3} alt="Functional Fitness" className="w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] object-contain" />}
                imgSrc="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop"
                backInfo="Train your body for everyday activities. Improve your balance, agility, and core strength to move effortlessly and prevent injuries."
            />
            <ProgramCard 
                title="Wellness & Lifestyle"
                desc="A healthier, happier you."
                icon={<img src={icon4} alt="Wellness & Lifestyle" className="w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] object-contain" />}
                imgSrc="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
                backInfo="A holistic approach combining mobility work, stretching, and mindful recovery. Enhance your flexibility, reduce stress, and improve overall well-being."
            />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, desc, icon, imgSrc, backInfo }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
          className="group relative h-[250px] lg:h-[280px] w-full rounded-xl bg-transparent cursor-pointer [perspective:1000px]"
          onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 ease-out will-change-transform [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl border border-white/20 bg-brand-dark overflow-hidden transition-all duration-300 lg:group-hover:border-brand-lime/50 lg:group-hover:shadow-[0_0_30px_rgba(198,248,6,0.1)]">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                        <img 
                            src={imgSrc} 
                            alt={title}
                            className="w-full h-full object-cover opacity-[0.8] transition-all duration-700 lg:group-hover:scale-110 lg:group-hover:opacity-[0.5] grayscale lg:group-hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent lg:h-[120%] lg:top-auto" />

                    {/* Content */}
                    <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                        {/* Icon and Line */}
                        <div className="flex items-center w-full mb-3 lg:mb-4">
                            <div className="shrink-0 mr-4">
                                {icon}
                            </div>
                            <div className="h-[1px] flex-1 bg-white/15 lg:group-hover:bg-brand-lime/30 transition-colors duration-300"></div>
                        </div>
                        
                        {/* Text and Button */}
                        <div className="flex flex-row items-end justify-between gap-3">
                            <div className="flex-1">
                                <h3 className="text-white font-display text-[24px] lg:text-[26px] leading-none tracking-[0.02em] uppercase mb-1.5 lg:group-hover:text-brand-lime transition-colors duration-300">
                                    {title}
                                </h3>
                                <p className="text-gray-300 text-[13px] lg:text-[14px] leading-tight font-sans">
                                    {desc}
                                </p>
                            </div>
                            
                            <button type="button" className="shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0c0f] border border-white/15 flex items-center justify-center lg:group-hover:bg-brand-lime lg:group-hover:border-brand-lime transition-all duration-300">
                                <ArrowUpRight className="w-[18px] h-[18px] lg:w-5 lg:h-5 text-white lg:group-hover:text-black transition-colors duration-300" strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-brand-lime/30 bg-brand-card p-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(198,248,6,0.05)]">
                    <h3 className="text-brand-lime font-display text-[26px] lg:text-[28px] uppercase mb-4">{title}</h3>
                    <p className="text-gray-300 text-[15px] leading-relaxed font-sans">{backInfo}</p>
                </div>
            </div>
        </div>
    );
}
