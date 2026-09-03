import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface StickyMobileCTAProps {
  onOpenVIP: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenVIP }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 450px (beyond hero fold)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBF6E5]/95 backdrop-blur-md border-t border-[#8B1A1A]/20 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <div className="shrink-0 w-8 h-8 rounded-sm overflow-hidden shadow-sm">
              <BrandLogo size={32} rounded="sm" alt="ENOUGH" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#8B1A1A]">
                  COLEÇÃO
                </span>
                <span className="font-editorial text-sm font-semibold text-[#1A1A1A]">
                  Genesis
                </span>
              </div>
              <p className="text-[11px] text-[#1A1A1A]/70 truncate font-body">
                Acesso antecipado VIP
              </p>
            </div>

            <button
              onClick={onOpenVIP}
              className="shrink-0 bg-[#8B1A1A] hover:bg-[#721515] active:bg-[#5C1010] text-[#FBF6E5] text-[11px] font-body font-medium uppercase tracking-[0.14em] py-2.5 px-3.5 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>Entrar no Grupo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
