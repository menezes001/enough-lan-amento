import React from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo.tsx';

export const Section09FraseManifesto: React.FC = () => {
  return (
    <section className="relative bg-[#FBF6E5] text-[#1A1A1A] py-36 sm:py-52 px-6 sm:px-12 flex items-center justify-center text-center overflow-hidden border-t border-[#8B1A1A]/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] font-normal italic leading-[1.1] tracking-tight"
        >
          Você não precisa de mais para ser mais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="pt-6 flex flex-col items-center justify-center gap-3"
        >
          <div className="w-9 h-9 rounded-sm overflow-hidden shadow-sm">
            <BrandLogo size={36} rounded="sm" alt="ENOUGH" />
          </div>
          <span className="font-editorial text-xl sm:text-2xl md:text-3xl tracking-[0.35em] text-[#8B1A1A] font-normal">
            ENOUGH
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Section09FraseManifesto;
