import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Gift } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram.tsx';

interface Section07ConviteVIPProps {
  onOpenVIP: () => void;
}

export const Section07ConviteVIP: React.FC<Section07ConviteVIPProps> = ({ onOpenVIP }) => {
  return (
    <section
      id="grupo-vip"
      className="relative bg-[#8B1A1A] text-[#FBF6E5] py-28 sm:py-40 px-6 sm:px-12 overflow-hidden"
    >
      {/* Subtle brand monogram watermark */}
      <div className="absolute left-[-8%] bottom-[-10%] pointer-events-none opacity-[0.05] select-none">
        <BrandMonogram size={640} color="#FBF6E5" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Top Tag */}
        <div>
          <span className="inline-block text-[10px] uppercase tracking-[0.35em] font-semibold text-[#FBF6E5]/85 border-b border-[#FBF6E5]/30 pb-1 font-body">
            ANTES DO LANÇAMENTO
          </span>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#FBF6E5] font-normal leading-[1.1] tracking-tight max-w-3xl mx-auto"
        >
          Alguns começos são melhores quando vividos primeiro.
        </motion.h2>

        {/* Narrative Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl mx-auto font-body text-base sm:text-lg text-[#FBF6E5]/85 leading-relaxed space-y-3"
        >
          <p>
            Criamos um espaço reservado para quem deseja acompanhar Genesis mais de perto.
          </p>
          <p>
            No grupo VIP da ENOUGH, você terá acesso antecipado ao lançamento e benefícios preparados especialmente para este momento.
          </p>
        </motion.div>

        {/* Three Exclusive Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 text-left max-w-4xl mx-auto"
        >
          {/* Benefit 1 */}
          <div className="border border-[#FBF6E5]/25 p-7 sm:p-8 bg-[#FBF6E5]/[0.03] space-y-3 transition-colors hover:bg-[#FBF6E5]/[0.07]">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FBF6E5] font-body">
                01
              </span>
              <Sparkles className="w-4 h-4 text-[#FBF6E5]/70" />
            </div>
            <h3 className="font-editorial text-2xl text-[#FBF6E5] font-normal">
              Acesso antecipado
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#FBF6E5]/75 leading-relaxed">
              Conheça Genesis antes da abertura oficial.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="border border-[#FBF6E5]/25 p-7 sm:p-8 bg-[#FBF6E5]/[0.03] space-y-3 transition-colors hover:bg-[#FBF6E5]/[0.07]">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FBF6E5] font-body">
                02
              </span>
              <ShieldCheck className="w-4 h-4 text-[#FBF6E5]/70" />
            </div>
            <h3 className="font-editorial text-2xl text-[#FBF6E5] font-normal">
              Condições exclusivas
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#FBF6E5]/75 leading-relaxed">
              Benefícios e descontos reservados às participantes do grupo.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="border border-[#FBF6E5]/25 p-7 sm:p-8 bg-[#FBF6E5]/[0.03] space-y-3 transition-colors hover:bg-[#FBF6E5]/[0.07]">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FBF6E5] font-body">
                03
              </span>
              <Gift className="w-4 h-4 text-[#FBF6E5]/70" />
            </div>
            <h3 className="font-editorial text-2xl text-[#FBF6E5] font-normal">
              Brindes especiais
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#FBF6E5]/75 leading-relaxed">
              Surpresas preparadas para celebrar o início da ENOUGH.
            </p>
          </div>
        </motion.div>

        {/* Conversion Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pt-8 space-y-3.5"
        >
          <button
            onClick={onOpenVIP}
            className="inline-flex items-center justify-center gap-3.5 bg-[#FBF6E5] hover:bg-white active:bg-[#FBF6E5]/90 text-[#8B1A1A] py-5 px-8 sm:px-14 font-body font-medium text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 shadow-2xl hover:shadow-xl cursor-pointer"
          >
            {/* Discreet WhatsApp Icon SVG */}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-[#8B1A1A]"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.05 7.6C8.84 7.6 8.5 7.68 8.2 8C7.91 8.32 7.08 9.1 7.08 10.68C7.08 12.26 8.23 13.78 8.39 14C8.55 14.21 10.63 17.42 13.82 18.8C14.58 19.12 15.17 19.32 15.63 19.47C16.39 19.71 17.08 19.67 17.63 19.59C18.24 19.5 19.5 18.83 19.76 18.1C20.03 17.36 20.03 16.73 19.95 16.6C19.87 16.47 19.67 16.39 19.36 16.23C19.05 16.07 17.53 15.32 17.25 15.22C16.97 15.12 16.77 15.07 16.56 15.38C16.36 15.7 15.77 16.39 15.59 16.6C15.41 16.8 15.23 16.83 14.92 16.67C14.61 16.51 13.62 16.19 12.44 15.14C11.53 14.33 10.91 13.33 10.73 13.02C10.55 12.71 10.71 12.54 10.87 12.39C11.01 12.25 11.18 12.02 11.34 11.84C11.5 11.66 11.55 11.53 11.65 11.32C11.75 11.11 11.7 10.93 11.63 10.77C11.55 10.61 10.96 9.17 10.71 8.57C10.47 7.99 10.22 8.07 10.04 8.06C9.87 8.05 9.68 8.05 9.48 8.05L9.05 7.6Z" />
            </svg>
            <span>Quero entrar no grupo VIP</span>
          </button>

          <p className="text-xs text-[#FBF6E5]/70 font-body tracking-wider">
            Entrada gratuita pelo WhatsApp.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Section07ConviteVIP;
