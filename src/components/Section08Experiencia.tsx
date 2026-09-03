import React from 'react';
import { motion } from 'motion/react';
import packagingImg from '../assets/images/genesis_packaging_box_1788375067488.jpg';

export const Section08Experiencia: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="relative bg-[#FBF6E5] text-[#1A1A1A] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Packaging Still Life Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <div className="relative border border-[#8B1A1A]/20 bg-[#FBF6E5] shadow-2xl p-3 sm:p-4">
              <img
                src={packagingImg}
                alt="Embalagem minimalista da marca ENOUGH com caixa rígida, fita e cartão de autenticidade"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="pt-3 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/60 font-body">
                <span>Experiência Tátil</span>
                <span>Caixa • Fita • Cartão de Intenção</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Meaning & Intention */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6 space-y-7"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8B1A1A] font-body">
                A EXPERIÊNCIA FÍSICA
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-tight">
              O significado continua depois da escolha.
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-lg">
              <p>
                Da peça à embalagem, cada detalhe existe com intenção.
              </p>
              <p>
                Porque aquilo que carregamos conosco também pode nos lembrar daquilo que não queremos esquecer.
              </p>
            </div>

            {/* Tactical brand elements list */}
            <div className="grid grid-cols-2 gap-4 py-3 text-xs font-body text-[#1A1A1A]/70 uppercase tracking-wider border-y border-[#8B1A1A]/15">
              <div className="space-y-1.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full" />
                  <span>Caixa rígida em tom creme</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full" />
                  <span>Monograma em baixo relevo</span>
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full" />
                  <span>Cartão com tipografia poética</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full" />
                  <span>Certificado de autenticidade</span>
                </p>
              </div>
            </div>

            {/* Standout quote */}
            <div className="pt-2 border-l-2 border-[#8B1A1A] pl-5">
              <blockquote className="font-editorial text-2xl sm:text-3xl text-[#8B1A1A] font-normal italic leading-snug">
                “O valor não está no que se soma, mas no que permanece.”
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section08Experiencia;
