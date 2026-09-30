import React from 'react';

export default function StatItem({ icon: Icon, title, subtitle, customIcon, bigger = false }) {
  return (
    <div className="flex items-center gap-4 lg:gap-4">
      <div className="flex-shrink-0 text-brand-lime">
        {customIcon ? (
          customIcon
        ) : (
          <Icon
            className={bigger ? 'w-8 h-8 lg:w-8 lg:h-8' : 'w-6 h-6 stroke-[1.8]'}
            strokeWidth={bigger ? 1.7 : 1.8}
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-extrabold text-[17px] sm:text-lg lg:text-[19px] uppercase tracking-[0.02em] leading-tight">
          {title}
        </span>
        <span className="text-gray-300 text-[15px] lg:text-[15px] font-normal mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}