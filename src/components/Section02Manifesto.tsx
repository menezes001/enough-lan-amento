import React from 'react';
import { motion } from 'motion/react';
import { GrapevineEngraving, SwallowEngraving } from './BrandEngravings.tsx';

export const Section02Manifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative bg-[#FBF6E5] text-[#1A1A1A] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Subtle decorative engraving watermark */}
        <div className="flex justify-between items-center mb-10 opacity-70">
          <div className="w-12 h-px bg-[#8B1A1A]/30" />
          <SwallowEngraving className="w-12 h-12 text-[#8B1A1A]" color="#8B1A1A" />
          <div className="w-12 h-px bg-[#8B1A1A]/30" />
        </div>

        {/* Section Identifier */}
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8B1A1A] font-body">
            MANIFESTO ENOUGH
          </span>
        </div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl text-center text-[#1A1A1A] font-normal leading-[1.15] mb-12 sm:mb-16"
        >
          Talvez o próximo começo não peça pressa. Peça origem.
        </motion.h2>

        {/* Poetic Stanzas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base sm:text-xl text-[#1A1A1A]/80 leading-relaxed text-center space-y-6 max-w-2xl mx-auto"
        >
          <p>
            Nem todo recomeço significa tornar-se uma nova pessoa.
          </p>
          <p>
            Às vezes, recomeçar é retirar tudo aquilo que o tempo colocou sobre nós e voltar a reconhecer a nossa essência.
          </p>
          
          <div className="py-4 space-y-2 text-[#8B1A1A] font-editorial text-xl sm:text-2xl italic">
            <p>Antes das comparações.</p>
            <p>Antes das cobranças.</p>
            <p>Antes de tentarem definir quem deveríamos ser.</p>
          </div>

          <p className="text-lg sm:text-2xl text-[#1A1A1A] font-medium pt-2">
            Já existia intenção.
          </p>
        </motion.div>

        {/* Isolated Standout Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-12 border-t border-[#8B1A1A]/15 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#8B1A1A] font-body mb-3">
            O princípio inabalável
          </p>
          <blockquote className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#8B1A1A] font-normal italic tracking-tight">
            “A origem permanece.”
          </blockquote>
        </motion.div>

        {/* Bottom Engraving detail */}
        <div className="mt-16 flex justify-center opacity-60">
          <GrapevineEngraving className="w-16 h-16 text-[#8B1A1A]" color="#8B1A1A" />
        </div>
      </div>
    </section>
  );
};

export default Section02Manifesto;
