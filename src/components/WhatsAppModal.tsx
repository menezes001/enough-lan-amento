import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ShieldCheck, Sparkles, Gift, Edit3, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
  onUpdateLink: (newLink: string) => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  whatsappLink,
  onUpdateLink,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempLink, setTempLink] = useState(whatsappLink);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleOpenWhatsApp = () => {
    // Open the VIP group invite
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSaveCustomLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempLink.trim()) {
      onUpdateLink(tempLink.trim());
      setIsEditing(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappLink);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FBF6E5] text-[#1A1A1A] rounded-none border border-[#8B1A1A]/20 shadow-2xl p-6 sm:p-10 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#1A1A1A]/60 hover:text-[#8B1A1A] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Brand Monogram */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-md overflow-hidden shadow-sm mb-3">
                <BrandLogo size={56} rounded="sm" alt="ENOUGH" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8B1A1A] font-semibold mb-1">
                ENOUGH • COLEÇÃO GENESIS
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-tight">
                Grupo VIP de Lançamento
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/75 mt-2 font-body max-w-sm mx-auto leading-relaxed">
                Um espaço silencioso e reservado no WhatsApp para quem deseja vivenciar o princípio de Genesis em primeira mão.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3.5 mb-8 border-y border-[#8B1A1A]/15 py-5 font-body">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#8B1A1A]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide uppercase text-[#1A1A1A]">
                    01 — Acesso antecipado
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                    Conheça a Coleção Genesis antes da abertura oficial ao público.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#8B1A1A]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide uppercase text-[#1A1A1A]">
                    02 — Condições exclusivas
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                    Valores e condições especiais reservados às participantes do grupo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#8B1A1A]">
                  <Gift className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide uppercase text-[#1A1A1A]">
                    03 — Brindes especiais
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                    Surpresas preparadas com intenção para celebrar o nascimento da marca.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="space-y-3 text-center">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full bg-[#8B1A1A] hover:bg-[#721515] active:bg-[#5C1010] text-[#FBF6E5] py-4 px-6 font-body font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <span>Entrar no Grupo VIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#1A1A1A]/60 tracking-wider">
                Entrada gratuita pelo WhatsApp • Sem spam ou notificações invasivas.
              </p>
            </div>

            {/* Custom Link Configuration for Brand Admin */}
            <div className="mt-6 pt-4 border-t border-[#8B1A1A]/10">
              {!isEditing ? (
                <div className="flex items-center justify-between text-[11px] text-[#1A1A1A]/60">
                  <span className="truncate max-w-[240px] font-mono text-[10px]">
                    {whatsappLink}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="hover:text-[#8B1A1A] transition-colors underline cursor-pointer"
                    >
                      {copiedNotification ? 'Copiado!' : 'Copiar'}
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="hover:text-[#8B1A1A] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Alterar link</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveCustomLink} className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B1A1A] font-semibold">
                    Link do Grupo VIP (WhatsApp Invite):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={tempLink}
                      onChange={(e) => setTempLink(e.target.value)}
                      placeholder="https://chat.whatsapp.com/..."
                      className="flex-1 bg-white border border-[#8B1A1A]/30 text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#8B1A1A]"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#8B1A1A] text-[#FBF6E5] text-xs px-3 py-1.5 flex items-center gap-1 hover:bg-[#721515]"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Salvar</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTempLink(whatsappLink);
                        setIsEditing(false);
                      }}
                      className="text-xs px-2 py-1.5 text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;
