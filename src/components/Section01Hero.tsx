import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';
import { BrandMonogram } from './BrandMonogram.tsx';
import heroImg from '../assets/images/genesis_hero_editorial_1788375011758.jpg';

interface Section01HeroProps {
  onOpenVIP: () => void;
}

export const Section01Hero: React.FC<Section01HeroProps> = ({ onOpenVIP }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen bg-[#FBF6E5] text-[#1A1A1A] pt-28 pb-16 sm:pb-24 px-6 sm:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background subtle grain */}
      <div className="absolute inset-0 bg-subtle-grain pointer-events-none opacity-60" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-7"
          >
            {/* Small subtle brand header */}
            <div className="flex items-center gap-3">
              <BrandLogo size={28} rounded="sm" alt="Logo ENOUGH" className="shadow-sm" />
              <div className="flex items-center gap-2">
                <span className="font-editorial text-sm font-semibold tracking-[0.25em] text-[#1A1A1A]">
                  ENOUGH
                </span>
                <span className="text-[#8B1A1A]/40 text-xs">•</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B1A1A] font-semibold font-body">
                  COLEÇÃO GENESIS
                </span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] text-[#1A1A1A] font-normal leading-[1.05] tracking-tight">
              Volte ao princípio.
            </h1>

            {/* Subtitle */}
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#1A1A1A]/85 font-normal leading-snug max-w-xl">
              Genesis é um convite para lembrar aquilo que sempre esteve em você.
            </p>

            {/* Complementary Manifesto Line */}
            <p className="font-body text-sm sm:text-base text-[#1A1A1A]/70 max-w-lg leading-relaxed pt-1">
              Uma coleção criada para mulheres que não precisam de mais para ser mais.
            </p>

            {/* CTA & Microcopy Group */}
            <div className="pt-3 space-y-3.5">
              <button
                onClick={onOpenVIP}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8B1A1A] hover:bg-[#721515] active:bg-[#5C1010] text-[#FBF6E5] py-4 px-8 sm:px-10 font-body font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                ENTRAR NO GRUPO VIP
              </button>

              <p className="text-[11px] sm:text-xs text-[#1A1A1A]/65 font-body tracking-wider flex items-center gap-2">
                <span>Acesso antecipado</span>
                <span>•</span>
                <span>condições exclusivas</span>
                <span>•</span>
                <span>brindes de lançamento</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame with subtle warm editorial border */}
              <div className="relative overflow-hidden shadow-2xl border border-[#8B1A1A]/15 bg-[#FBF6E5]">
                <img
                  src={heroImg}
                  alt="Mulher elegante usando joia da Coleção Genesis da ENOUGH"
                  className="w-full h-auto aspect-[3/4] object-cover filter contrast-[1.02] brightness-[0.99] transition-transform duration-700 hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Delicate caption watermark */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent p-5 text-[#FBF6E5] flex justify-between items-end">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#FBF6E5]/80 font-body">
                      Registro Editorial
                    </p>
                    <p className="font-editorial text-sm italic">
                      Genesis — O Lembrete
                    </p>
                  </div>
                  <BrandMonogram size={24} color="#FBF6E5" />
                </div>
              </div>

              {/* Decorative accent geometry */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-28 h-28 border-b border-l border-[#8B1A1A]/30 pointer-events-none" />
              <div className="hidden sm:block absolute -top-4 -right-4 w-28 h-28 border-t border-r border-[#8B1A1A]/30 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 pt-10 text-center flex justify-center"
      >
        <a
          href="#manifesto"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8B1A1A] hover:text-[#5C1010] transition-colors font-body font-medium"
        >
          <span>Conheça Genesis</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Section01Hero;
