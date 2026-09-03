/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import NavigationHeader from './components/NavigationHeader.tsx';
import Section01Hero from './components/Section01Hero.tsx';
import Section02Manifesto from './components/Section02Manifesto.tsx';
import Section03Genesis from './components/Section03Genesis.tsx';
import Section04Criacao from './components/Section04Criacao.tsx';
import Section05Conceito from './components/Section05Conceito.tsx';
import Section06Preview from './components/Section06Preview.tsx';
import Section07ConviteVIP from './components/Section07ConviteVIP.tsx';
import Section08Experiencia from './components/Section08Experiencia.tsx';
import Section09FraseManifesto from './components/Section09FraseManifesto.tsx';
import Section10CtaFinal from './components/Section10CtaFinal.tsx';
import BrandFooter from './components/BrandFooter.tsx';
import StickyMobileCTA from './components/StickyMobileCTA.tsx';
import WhatsAppModal from './components/WhatsAppModal.tsx';

export default function App() {
  const [isVIPModalOpen, setIsVIPModalOpen] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState<string>(() => {
    return localStorage.getItem('enough_whatsapp_vip_link') || 'https://chat.whatsapp.com/ENOUGH-Genesis-VIP';
  });

  const handleUpdateWhatsappLink = (newLink: string) => {
    setWhatsappLink(newLink);
    localStorage.setItem('enough_whatsapp_vip_link', newLink);
  };

  const handleOpenVIP = () => {
    setIsVIPModalOpen(true);
  };

  const handleCloseVIP = () => {
    setIsVIPModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBF6E5] text-[#1A1A1A] font-body selection:bg-[#8B1A1A] selection:text-[#FBF6E5] relative">
      {/* Navigation Header */}
      <NavigationHeader onOpenVIP={handleOpenVIP} />

      {/* Main Sections */}
      <main>
        {/* SEÇÃO 01 — HERO */}
        <Section01Hero onOpenVIP={handleOpenVIP} />

        {/* SEÇÃO 02 — MANIFESTO */}
        <Section02Manifesto />

        {/* SEÇÃO 03 — GENESIS */}
        <Section03Genesis onOpenVIP={handleOpenVIP} />

        {/* SEÇÃO 04 — A CRIAÇÃO */}
        <Section04Criacao />

        {/* SEÇÃO 05 — O CONCEITO ENOUGH */}
        <Section05Conceito />

        {/* SEÇÃO 06 — PREVIEW DA COLEÇÃO */}
        <Section06Preview />

        {/* SEÇÃO 07 — CONVITE PARA O GRUPO VIP */}
        <Section07ConviteVIP onOpenVIP={handleOpenVIP} />

        {/* SEÇÃO 08 — EXPERIÊNCIA ENOUGH */}
        <Section08Experiencia />

        {/* SEÇÃO 09 — FRASE MANIFESTO */}
        <Section09FraseManifesto />

        {/* SEÇÃO 10 — CTA FINAL */}
        <Section10CtaFinal onOpenVIP={handleOpenVIP} />
      </main>

      {/* Brand Footer */}
      <BrandFooter onOpenVIP={handleOpenVIP} />

      {/* SEÇÃO 11 — CTA MOBILE FIXO */}
      <StickyMobileCTA onOpenVIP={handleOpenVIP} />

      {/* WhatsApp VIP Modal / Link Router */}
      <WhatsAppModal
        isOpen={isVIPModalOpen}
        onClose={handleCloseVIP}
        whatsappLink={whatsappLink}
        onUpdateLink={handleUpdateWhatsappLink}
      />
    </div>
  );
}

