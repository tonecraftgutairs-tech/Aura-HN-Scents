import React from 'react';
import { BRAND_CONFIG, BRAND_ASSETS, getWhatsAppOrderUrl } from '../data/products';
import { AuraImage } from './AuraImage';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenCheckout }) => {

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic dark luxury ambient backdrops & lighting */}
      <div className="absolute inset-0 bg-[#080808]" />
      
      {/* Radial soft gold highlight centered behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.15)_0%,rgba(197,160,89,0.03)_50%,transparent_80%)] blur-3xl pointer-events-none" />
      
      {/* Subtle architectural vertical lines for high-end perfume boutique feel */}
      <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto px-6 pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C5A059] to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C5A059] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Brand Logo Icon & Crest */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            <AuraImage
              filename={BRAND_ASSETS.logo.filename}
              alt={BRAND_ASSETS.logo.alt}
              flaconStyle="logo"
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="font-brand text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] mt-3 font-medium">
            AURA HN SCENTS
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FDFCF7] max-w-3xl leading-[1.08] text-balance">
          A Signature of <span className="italic gold-gradient-text font-serif-luxury">Your Aura</span>.
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-xl font-light tracking-wide leading-relaxed text-balance">
          Discover refined fragrances crafted to leave a lasting impression.
        </p>

        {/* Quick Highlights: 4 Master Perfumes, 50ml, Handcrafted Precision */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-400 uppercase tracking-widest">
          <span>50ml Pure Parfum</span>
          <span aria-hidden="true" className="text-[#C5A059]">·</span>
          <span>Men & Women</span>
          <span aria-hidden="true" className="text-[#C5A059]">·</span>
          <span>Bespoke Sillage</span>
        </div>

        {/* Premium CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all shadow-[0_4px_24px_rgba(197,160,89,0.25)] cursor-pointer"
          >
            Explore Collection
          </button>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#F3E7C4] border border-[#C5A059]/40 bg-[#121212]/80 hover:bg-[#C5A059]/10 hover:border-[#C5A059] active:scale-98 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Order Now (Checkout)</span>
          </button>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#C5A059] to-transparent animate-bounce" />
      </div>
    </section>
  );
};
