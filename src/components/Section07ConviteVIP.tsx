import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Gift, MessageCircle } from 'lucide-react';

interface Section07ConviteVIPProps {
  onOpenVIP: () => void;
}

export const Section07ConviteVIP: React.FC<Section07ConviteVIPProps> = ({ onOpenVIP }) => {
  return (
    <section
      id="grupo-vip"
      className="relative bg-[#8B1A1A] text-[#FBF6E5] py-28 sm:py-40 px-6 sm:px-12 overflow-hidden"
    >
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
            Criamos um espaço reservado para quem deseja acompanhar Gênesis mais de perto.
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
              Conheça Gênesis antes da abertura oficial.
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
            <MessageCircle className="w-4 h-4 text-[#8B1A1A]" />
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
