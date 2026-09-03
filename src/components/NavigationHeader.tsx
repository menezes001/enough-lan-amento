import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';

interface NavigationHeaderProps {
  onOpenVIP: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onOpenVIP }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FBF6E5]/90 backdrop-blur-md py-3.5 border-b border-[#8B1A1A]/10 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Identity / Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="ENOUGH Home"
        >
          <div className="w-8 h-8 rounded-sm overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
            <BrandLogo size={32} rounded="sm" alt="ENOUGH" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-xl tracking-[0.2em] font-medium text-[#1A1A1A]">
              ENOUGH
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#8B1A1A] -mt-1 font-body">
              Genesis
            </span>
          </div>
        </a>

        {/* Editorial Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-body tracking-[0.14em] uppercase text-[#1A1A1A]/70">
          <a
            href="#manifesto"
            className="hover:text-[#8B1A1A] transition-colors py-1"
          >
            Manifesto
          </a>
          <a
            href="#genesis"
            className="hover:text-[#8B1A1A] transition-colors py-1"
          >
            Genesis
          </a>
          <a
            href="#criacao"
            className="hover:text-[#8B1A1A] transition-colors py-1"
          >
            A Criação
          </a>
          <a
            href="#conceito"
            className="hover:text-[#8B1A1A] transition-colors py-1"
          >
            O Conceito
          </a>
          <a
            href="#experiencia"
            className="hover:text-[#8B1A1A] transition-colors py-1"
          >
            Experiência
          </a>
        </nav>

        {/* VIP Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenVIP}
            className="bg-[#8B1A1A] hover:bg-[#721515] active:bg-[#5C1010] text-[#FBF6E5] text-[11px] font-body font-medium uppercase tracking-[0.18em] py-2.5 px-4 sm:px-5 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            Grupo VIP
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
