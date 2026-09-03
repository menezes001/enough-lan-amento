import React from 'react';
import { motion } from 'motion/react';
import { BrandMonogram } from './BrandMonogram.tsx';
import piecesImg from '../assets/images/genesis_pieces_macro_1788375030047.jpg';

interface Section03GenesisProps {
  onOpenVIP: () => void;
}

export const Section03Genesis: React.FC<Section03GenesisProps> = ({ onOpenVIP }) => {
  return (
    <section
      id="genesis"
      className="relative bg-[#8B1A1A] text-[#FBF6E5] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden"
    >
      {/* Large watermark ENOUGH monogram at low opacity */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] select-none">
        <BrandMonogram size={720} color="#FBF6E5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Identification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Small identification */}
            <div className="inline-flex items-center gap-2 border border-[#FBF6E5]/30 px-3 py-1">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#FBF6E5] font-body">
                COLEÇÃO 01
              </span>
            </div>

            {/* Title */}
            <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl text-[#FBF6E5] font-normal leading-[1] tracking-tight">
              Genesis
            </h2>

            {/* Sub-headline */}
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#FBF6E5] font-normal italic">
              Todo princípio carrega uma intenção.
            </h3>

            {/* Narrative text */}
            <div className="space-y-4 font-body text-sm sm:text-base text-[#FBF6E5]/85 leading-relaxed max-w-xl">
              <p>
                Genesis nasce de uma reflexão sobre origem, criação e identidade.
              </p>
              <p>
                Uma coleção que não pretende dizer quem você deveria ser.
              </p>
              <p className="text-lg sm:text-xl font-editorial italic text-[#FBF6E5] pt-2">
                Ela existe para lembrar quem você já é.
              </p>
            </div>

            {/* Direct VIP action */}
            <div className="pt-4">
              <button
                onClick={onOpenVIP}
                className="bg-[#FBF6E5] hover:bg-white text-[#8B1A1A] py-3.5 px-8 font-body font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Quero conhecer Genesis primeiro
              </button>
            </div>
          </motion.div>

          {/* Right Column: Partial Collection Photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-[#FBF6E5]/20 bg-[#FBF6E5]/5 p-3 sm:p-4">
              <div className="relative overflow-hidden">
                <img
                  src={piecesImg}
                  alt="Fotografia parcial das peças da Coleção Genesis"
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-3 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#FBF6E5]/70 font-body">
                <span>Vislumbre Parcial</span>
                <span>Genesis • 01</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section03Genesis;
