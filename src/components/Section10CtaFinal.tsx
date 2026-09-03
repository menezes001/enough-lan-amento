import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram.tsx';
import { BrandLogo } from './BrandLogo.tsx';

interface Section10CtaFinalProps {
  onOpenVIP: () => void;
}

export const Section10CtaFinal: React.FC<Section10CtaFinalProps> = ({ onOpenVIP }) => {
  return (
    <section className="relative bg-[#1A1A1A] text-[#FBF6E5] py-28 sm:py-44 px-6 sm:px-12 text-center overflow-hidden">
      {/* Subtle monogram watermark in deep dark backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] select-none">
        <BrandMonogram size={800} color="#FBF6E5" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-9">
        
        {/* Logo in Cream */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          {/* Official Logo Display */}
          <div className="w-16 h-16 rounded-md overflow-hidden shadow-2xl border border-[#CA9766]/30">
            <BrandLogo size={64} rounded="none" alt="ENOUGH" />
          </div>
          <span className="font-editorial text-2xl sm:text-3xl tracking-[0.25em] text-[#FBF6E5] mt-1">
            ENOUGH
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#CA9766] font-body">
            Coleção Genesis
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#FBF6E5] font-normal leading-[1.05] tracking-tight"
          >
            Todo começo tem uma origem.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-editorial text-3xl sm:text-5xl text-[#CA9766] font-normal italic"
          >
            Este é o nosso.
          </motion.p>
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-base sm:text-xl text-[#FBF6E5]/80 max-w-md mx-auto leading-relaxed"
        >
          Faça parte do primeiro capítulo da ENOUGH.
        </motion.p>

        {/* CTA Button & Microcopy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 space-y-4"
        >
          <button
            onClick={onOpenVIP}
            className="inline-flex items-center justify-center gap-3 bg-[#8B1A1A] hover:bg-[#a32222] active:bg-[#701515] text-[#FBF6E5] py-5 px-10 sm:px-14 font-body font-medium text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>Entrar no Grupo VIP</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="font-body text-xs sm:text-sm text-[#FBF6E5]/70 max-w-lg mx-auto leading-relaxed pt-1">
            Receba acesso antecipado à Coleção Genesis, condições exclusivas e brindes de lançamento.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Section10CtaFinal;
