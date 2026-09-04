import React from 'react';
import { motion } from 'motion/react';
import womanImg from '../assets/images/DSC-5844.jpg';

export const Section04Criacao: React.FC = () => {
  return (
    <section
      id="criacao"
      className="relative bg-[#FBF6E5] text-[#1A1A1A] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Container */}
              <div className="relative overflow-hidden border border-[#8B1A1A]/20 shadow-xl bg-[#FBF6E5]">
                <img
                  src={womanImg}
                  alt="Fotografia da Coleção Gênesis — A Criação"
                  className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Declaration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6 space-y-8 order-1 lg:order-2"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8B1A1A] font-body">
                PROPÓSITO & ORIGEM
              </span>
              <div className="w-10 h-px bg-[#8B1A1A]/30" />
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-tight">
              Você não foi improvisada.
            </h2>

            {/* Narrative text */}
            <div className="space-y-5 font-body text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-lg">
              <p>
                Nenhum detalhe da sua existência pegou o Criador de surpresa.
              </p>
              <p>
                Antes de qualquer comparação, padrão ou expectativa existir, você já havia sido pensada com intenção.
              </p>
            </div>

            {/* Highlight quote */}
            <div className="pt-4 border-l-2 border-[#8B1A1A] pl-6 space-y-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8B1A1A] font-body font-medium">
                A certeza que sustenta
              </p>
              <blockquote className="font-editorial text-2xl sm:text-3xl text-[#8B1A1A] font-normal italic leading-snug">
                “A criação carrega a intenção do Criador.”
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section04Criacao;
