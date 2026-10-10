import React from 'react';
import { Bundle } from '../types';
import { BUNDLES } from '../data/products';
import { AuraImage } from './AuraImage';

interface BundlesSectionProps {
  onOrderBundle: (bundle: Bundle) => void;
}

export const BundlesSection: React.FC<BundlesSectionProps> = ({ onOrderBundle }) => {
  return (
    <section id="bundles" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden w-full max-w-full">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(197,160,89,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.06),transparent_75%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span>Limited Edition Pairing</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-100 text-balance">
            Duo Bundle Offers — <span className="gold-gradient-text italic font-serif-luxury">Save 15%</span>
          </h2>

          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light leading-relaxed text-balance">
            Hand-curated duos uniting our sovereign masculine masterworks with the delicate poetry of Blossom Aura. Enjoy an exclusive 15% discount and complimentary shipping across Pakistan.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 bg-[#161616] border border-[#C5A059]/30 rounded-full px-4 py-1.5 text-xs text-[#F3E7C4]">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="font-medium tracking-wide">Free Shipping on All Duo Bundles</span>
          </div>
        </div>

        {/* 3 Bundle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BUNDLES.map((bundle) => (
            <article
              key={bundle.id}
              className="relative bg-gradient-to-b from-[#131313] via-[#0f0f0f] to-[#0a0a0a] rounded-3xl border border-stone-800/90 hover:border-[#C5A059]/50 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-xl group card-luxury-hover"
            >
              {/* Top Accent Indicator */}
              <div 
                className="h-[2px] w-full transition-all duration-500 opacity-70 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${bundle.accentColor}, transparent)` }}
              />

              {/* Upper Section */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Header Tag & Savings Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 bg-black/60 px-3 py-1 rounded-full border border-white/5 font-mono">
                    50 ML EDP × 2
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#F3E7C4] to-[#C5A059] px-3 py-1 rounded-full shadow-md">
                    {bundle.savingsBadge}
                  </span>
                </div>

                {/* Dual Bottle Product Imagery Visual Area */}
                <div className="relative w-full aspect-[16/10] bg-[#070707] rounded-2xl border border-stone-800/80 p-3 sm:p-4 flex items-center justify-center overflow-hidden mb-6 group-hover:border-stone-700 transition-colors">
                  {/* Subtle backdrop glow */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${bundle.accentColor}, transparent 70%)` }}
                  />

                  {/* Left Bottle */}
                  <div className="relative w-1/2 h-full flex items-center justify-center -mr-2 z-10 transform group-hover:-translate-x-1 group-hover:scale-105 transition-transform duration-500">
                    <AuraImage
                      filename={bundle.images.first}
                      alt={bundle.images.firstAlt}
                      flaconStyle={bundle.images.firstStyle}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Right Bottle (Blossom Aura) */}
                  <div className="relative w-1/2 h-full flex items-center justify-center -ml-2 z-20 transform group-hover:translate-x-1 group-hover:scale-105 transition-transform duration-500">
                    <AuraImage
                      filename={bundle.images.second}
                      alt={bundle.images.secondAlt}
                      flaconStyle={bundle.images.secondStyle}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Plus Badge in Center */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-6 h-6 rounded-full bg-[#161616] border border-[#C5A059]/60 text-[#F3E7C4] flex items-center justify-center text-xs font-bold shadow-lg pointer-events-none">
                    +
                  </div>
                </div>

                {/* Bundle Titles */}
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-100 group-hover:text-[#F3E7C4] transition-colors">
                    {bundle.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                    {bundle.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs text-stone-300 font-light leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                {/* Included Items Checklist */}
                <div className="mt-6 pt-5 border-t border-stone-800/80 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono block mb-2">
                    Includes In This Duo:
                  </span>
                  {bundle.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                      <svg className="w-4 h-4 text-[#C5A059] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lower Section: Pricing & Action Button */}
              <div className="p-6 sm:p-7 pt-4 bg-[#0a0a0a] border-t border-stone-800/80 rounded-b-3xl">
                {/* Pricing Box */}
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">
                      Regular Price
                    </span>
                    <span className="text-sm text-stone-500 line-through tabular-nums font-mono">
                      {bundle.regularPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-semibold block">
                      Bundle Offer (15% OFF)
                    </span>
                    <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F3E7C4] tabular-nums">
                      {bundle.offerPrice}
                    </span>
                  </div>
                </div>

                {/* Free Shipping Tag */}
                <div className="mb-4 flex items-center justify-between text-[11px] text-stone-400 bg-stone-900/60 px-3 py-1.5 rounded-lg border border-stone-800">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Free Delivery Included
                  </span>
                  <span className="text-[#C5A059] font-mono font-medium">
                    Save {bundle.savings}
                  </span>
                </div>

                {/* Order Bundle Action Button */}
                <button
                  type="button"
                  onClick={() => onOrderBundle(bundle)}
                  className="w-full py-3.5 px-6 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Order Bundle</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
