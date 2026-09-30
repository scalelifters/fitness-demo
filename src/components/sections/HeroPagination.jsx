import React, { useEffect, useState } from 'react';

const totalDots = 6;

export default function HeroPagination() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const programsEl = document.getElementById('programs');
      if (programsEl) {
        const rect = programsEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveIdx(1);
        } else {
          setActiveIdx(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex flex-col items-center gap-[14px] fixed right-9 top-1/2 -translate-y-1/2 z-50">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          {i === activeIdx && (
            <span className="text-brand-lime text-lg font-extrabold tracking-[0.06em] mb-1">
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
          )}
          <span
            className={
              i === activeIdx
                ? 'w-[11px] h-[11px] rounded-full bg-brand-lime cursor-pointer transition-all duration-300'
                : 'w-[9px] h-[9px] rounded-full bg-gray-400/80 hover:bg-white cursor-pointer transition-all duration-300'
            }
          />
        </div>
      ))}
    </div>
  );
}