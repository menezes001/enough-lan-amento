import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';

interface BrandFooterProps {
  onOpenVIP: () => void;
}

export const BrandFooter: React.FC<BrandFooterProps> = ({ onOpenVIP }) => {
  return (
    <footer className="bg-[#141414] text-[#FBF6E5] border-t border-[#FBF6E5]/10 py-16 sm:py-20 px-6 sm:px-12 font-body text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm overflow-hidden shadow-sm shrink-0 border border-[#CA9766]/20">
                <BrandLogo size={32} rounded="none" alt="ENOUGH" />
              </div>
              <span className="font-editorial text-xl tracking-[0.2em] text-[#FBF6E5]">
                ENOUGH
              </span>
            </div>

            <p className="font-editorial italic text-base text-[#FBF6E5]/80 max-w-sm">
              “A joia não é a identidade. É o lembrete.”
            </p>

            <p className="text-[11px] text-[#FBF6E5]/50 max-w-md leading-relaxed">
              Marca brasileira de semijoias autorais fundamentadas em significado, retorno à essência e o reconhecimento de que menos é mais quando aquilo que se tem já é suficiente.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#CA9766] font-semibold">
              Navegação
            </p>
            <ul className="space-y-2 text-[#FBF6E5]/70 text-xs">
              <li>
                <a href="#manifesto" className="hover:text-[#FBF6E5] transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#genesis" className="hover:text-[#FBF6E5] transition-colors">
                  Coleção Genesis
                </a>
              </li>
              <li>
                <a href="#criacao" className="hover:text-[#FBF6E5] transition-colors">
                  A Criação
                </a>
              </li>
              <li>
                <a href="#conceito" className="hover:text-[#FBF6E5] transition-colors">
                  O Conceito
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#FBF6E5] transition-colors">
                  Experiência ENOUGH
                </a>
              </li>
            </ul>
          </div>

          {/* Group VIP Link */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#CA9766] font-semibold">
              Comunidade VIP
            </p>
            <p className="text-[#FBF6E5]/70 text-xs leading-relaxed">
              Espaço reservado no WhatsApp para acesso antecipado, condições exclusivas e brindes de lançamento.
            </p>
            <button
              onClick={onOpenVIP}
              className="inline-block text-[#CA9766] hover:text-[#FBF6E5] transition-colors uppercase tracking-[0.18em] text-[11px] font-semibold border-b border-[#CA9766]/50 pb-0.5"
            >
              Entrar no Grupo VIP →
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#FBF6E5]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FBF6E5]/40">
          <p>© {new Date().getFullYear()} ENOUGH. Todos os direitos reservados. Genesis — Coleção 01.</p>
          <p className="font-editorial italic text-xs text-[#FBF6E5]/60">
            O essencial permanece.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BrandFooter;
