import React from 'react';
import { Star, MapPin, Users, Clock } from 'lucide-react';
import StatItem from '../ui/StatItem';
import { brand } from '../../brands';

// Custom Barbell Icon to perfectly match the design
function DumbbellIcon({ className = 'w-7 h-7 lg:w-6 lg:h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 5.5v13M17.5 5.5v13M3 8.5v7M21 8.5v7M6.5 12h11M3 12h3.5M17.5 12H21" />
    </svg>
  );
}

const stats = [
  { icon: Star, title: brand.rating, subtitle: brand.reviews },
  { icon: MapPin, title: brand.area.toUpperCase(), subtitle: 'Prime Location' },
  { icon: Users, title: brand.members, subtitle: 'Happy Members' },
  { dumbbell: true, title: 'PREMIUM', subtitle: 'Equipment' },
  { icon: Clock, title: brand.hours, subtitle: 'Open All Days' },
];

export default function HeroStatsBar() {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-12 lg:mt-20 z-20">
      <div className="bg-[#101317]/95 border border-white/15 rounded-[16px] px-5 py-5 lg:px-4 lg:py-7 backdrop-blur-md shadow-2xl">
        {/*
          Desktop: 5 columns divided with vertical separators
          Mobile: 2-column grid with row dividers (last item full-width)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-0 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => {
            const isLast = i === stats.length - 1;
            const isLeftCol = i % 2 === 0;
            return (
              <div
                key={stat.title}
                className={[
                  'flex items-center',
                  isLast
                    ? 'col-span-2 lg:col-span-1 pt-4 lg:pt-0 mt-1 lg:mt-0 justify-center'
                    : 'pb-4 lg:pb-0 border-b border-white/10 lg:border-0',
                  !isLast && !isLeftCol && 'border-l border-white/10 lg:border-0 pl-4 lg:pl-6',
                  !isLast && isLeftCol && 'pr-4 lg:pr-6',
                  i > 1 && 'pt-4 lg:pt-0',
                  'lg:px-6 lg:justify-center',
                ].join(' ')}
              >
                <StatItem
                  icon={stat.icon}
                  customIcon={stat.dumbbell ? <DumbbellIcon /> : undefined}
                  bigger={true}
                  title={stat.title}
                  subtitle={stat.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}