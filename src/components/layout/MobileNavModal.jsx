import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function MobileNavModal({ isOpen, onClose, navLinks, activeSection }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#060709] flex flex-col justify-between p-6 lg:hidden transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Header dropping down from top */}
      <div
        className={`flex items-center justify-between border-b border-brand-border/60 pb-5 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        <span className="text-sm font-bold tracking-widest text-brand-lime uppercase">
          Menu
        </span>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-brand-card border border-white/60 flex items-center justify-center text-white hover:text-brand-lime hover:rotate-90 transition-all duration-300"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav links cascading down from top */}
      <nav className="flex flex-col items-center justify-center gap-6 py-8">
        {navLinks.map((link, i) => (
          <div
            key={link.name}
            className={`transition-all duration-300 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
            style={{ transitionDelay: visible ? `${50 + i * 40}ms` : '0ms' }}
          >
            <a
              href={link.href}
              onClick={onClose}
              className={`group relative inline-block text-2xl font-extrabold tracking-wider uppercase transition-colors ${
                (activeSection === link.href.substring(1)) ? 'text-brand-lime' : 'text-white hover:text-brand-lime'
              }`}
            >
              {link.name}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 bg-brand-lime group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        ))}
      </nav>

      {/* CTA dropping down last */}
      <div
        className={`pt-6 border-t border-brand-border/60 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: visible ? '200ms' : '0ms' }}
      >
        <a
          href="#trial"
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-limeHover text-black font-extrabold uppercase py-4 h-[60px] rounded-full tracking-[0.06em] text-[15px] transition-all active:scale-95 duration-200"
        >
          <span>Book A Free Trial</span>
          <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
}
