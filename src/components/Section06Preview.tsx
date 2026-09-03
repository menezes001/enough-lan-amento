import React from 'react';
import { motion } from 'motion/react';
import ringHandsImg from '../assets/images/genesis_ring_hands_1788375084460.jpg';
import piecesMacroImg from '../assets/images/genesis_pieces_macro_1788375030047.jpg';
import womanImg from '../assets/images/genesis_woman_creation_1788375050696.jpg';

export const Section06Preview: React.FC = () => {
  return (
    <section className="relative bg-[#FBF6E5] text-[#1A1A1A] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8B1A1A] font-body">
            VISLUMBRE DA COLEÇÃO
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#1A1A1A] font-normal tracking-tight">
            Design que carrega significado.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#1A1A1A]/70 max-w-xl mx-auto leading-relaxed pt-2">
            Cada detalhe de Genesis foi pensado para comunicar além do visível.
          </p>
        </div>

        {/* Editorial Asymmetric Photo Composition (No prices, no catalog feel) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Item 1: Ring on hands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 space-y-3"
          >
            <div className="relative overflow-hidden border border-[#8B1A1A]/15 bg-[#FBF6E5] shadow-lg group">
              <img
                src={ringHandsImg}
                alt="Close editorial de anel minimalista nas mãos com luz suave natural"
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/10 transition-colors duration-500" />
            </div>
            <div className="flex items-center justify-between text-[11px] font-body text-[#1A1A1A]/70 px-1">
              <span className="font-editorial italic text-[#8B1A1A] text-sm">O Toque e a Matéria</span>
              <span className="tracking-[0.15em] uppercase text-[10px]">Gênesis • Anel</span>
            </div>
          </motion.div>

          {/* Item 2: Macro of fine pieces & linen stone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-3 md:pt-12"
          >
            <div className="relative overflow-hidden border border-[#8B1A1A]/15 bg-[#FBF6E5] shadow-lg group">
              <img
                src={piecesMacroImg}
                alt="Macro do metal e joias repousando sobre pedra e linho cru"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/10 transition-colors duration-500" />
            </div>
            <div className="flex items-center justify-between text-[11px] font-body text-[#1A1A1A]/70 px-1">
              <span className="font-editorial italic text-[#8B1A1A] text-sm">Luz Natural & Sombras Vivas</span>
              <span className="tracking-[0.15em] uppercase text-[10px]">Origem • Elementos</span>
            </div>
          </motion.div>

        </div>

        {/* Gallery Quote Strip */}
        <div className="mt-16 sm:mt-24 py-8 border-y border-[#8B1A1A]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] italic">
              Sem excessos. Sem ruídos. Apenas o essencial.
            </p>
            <p className="font-body text-xs text-[#1A1A1A]/60 mt-1 uppercase tracking-wider">
              A semijoia como expressão tangível de um valor imutável
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#8B1A1A] border border-[#8B1A1A]/30 px-4 py-2 font-body font-medium">
              Peças Limitadas de Lançamento
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section06Preview;
