import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import MobileNavModal from './MobileNavModal';
import { brand } from '../../brands';

const navLinks = [
  { name: 'HOME', href: '#home', active: true },
  { name: 'PROGRAMS', href: '#programs' },
  { name: 'TRAINERS', href: '#trainers' },
  { name: 'TRANSFORMATIONS', href: '#transformations' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-5 py-4 lg:px-10 lg:py-5 max-w-[1536px] mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-brand-dark/70 border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 lg:gap-4 group">
          <img
            src={brand.logo}
            alt={`${brand.name} Logo`}
            className="w-12 h-12 lg:w-[54px] lg:h-[54px] object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[0.03em] text-lg lg:text-[21px] leading-tight uppercase text-white group-hover:text-brand-lime transition-colors">
              {brand.name}
            </span>
            <span className="text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] text-gray-400 uppercase mt-0.5">
              {brand.city}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[15px] tracking-[0.02em] uppercase font-semibold transition-colors pb-0.5 ${
                isActive
                  ? 'text-brand-lime font-bold'
                  : 'text-gray-100 hover:text-brand-lime'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-brand-lime rounded-full" />
              )}
            </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#trial"
            className="inline-flex items-center gap-2.5 bg-brand-lime hover:bg-brand-limeHover text-black text-[13px] font-extrabold uppercase tracking-[0.08em] px-7 h-[50px] rounded-[5px] transition-transform active:scale-95 duration-150"
          >
            <span>Book A Free Trial</span>
            <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex lg:hidden items-center justify-center w-[52px] h-[52px] bg-brand-lime rounded-[5px] text-black hover:bg-brand-limeHover transition-colors focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-7 h-7 stroke-[2.5]" />
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileNavModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
