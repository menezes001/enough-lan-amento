import React from 'react';
import { motion } from 'motion/react';
import { BrandMonogram } from './BrandMonogram.tsx';

export const Section05Conceito: React.FC = () => {
  return (
    <section
      id="conceito"
      className="relative bg-[#FBF6E5] text-[#1A1A1A] py-32 sm:py-48 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        {/* Subtle center emblem */}
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-[#8B1A1A]/5 flex items-center justify-center text-[#8B1A1A]">
            <BrandMonogram size={22} color="#8B1A1A" />
          </div>
        </div>

        {/* Concept Tag */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8B1A1A] font-body">
            O CONCEITO CENTRAL
          </span>
        </div>

        {/* Main Title Block with vast negative space */}
        <div className="space-y-4 sm:space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] font-normal leading-[1.05] tracking-tight"
          >
            A joia não é a identidade.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8B1A1A] font-normal italic tracking-tight"
          >
            É o lembrete.
          </motion.p>
        </div>

        {/* Explanatory Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-xl mx-auto pt-8 sm:pt-12 font-body text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed space-y-4"
        >
          <p>
            Não criamos peças para acrescentar valor a uma mulher.
          </p>
          <p className="text-xl sm:text-2xl text-[#1A1A1A] font-medium font-editorial not-italic">
            O valor já existe.
          </p>
          <p>
            Criamos símbolos que podem acompanhá-la todos os dias e lembrá-la daquilo que permanece.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section05Conceito;
