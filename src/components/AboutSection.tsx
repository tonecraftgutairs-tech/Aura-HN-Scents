import React from 'react';
import { BRAND_CONFIG, BRAND_ASSETS } from '../data/products';
import { AuraImage } from './AuraImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative border-t border-b border-stone-900/80 overflow-hidden w-full max-w-full">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 max-w-full h-96 bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Imagery & Brand Crest */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1 sm:-inset-3 border border-[#C5A059]/20 rounded-2xl pointer-events-none" />
              
              {/* Image Container displaying official brand emblem */}
              <div className="relative rounded-xl overflow-hidden bg-stone-950 aspect-[4/5] border border-stone-800 shadow-2xl flex items-center justify-center p-8 group">
                <AuraImage
                  filename={BRAND_ASSETS.logo.filename}
                  alt={BRAND_ASSETS.logo.alt}
                  flaconStyle="logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <p className="font-brand text-xs uppercase tracking-[0.3em] text-[#F3E7C4]">
                    {BRAND_CONFIG.name}
                  </p>
                  <p className="font-serif-luxury text-sm italic text-stone-300 mt-1">
                    “{BRAND_CONFIG.tagline}”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small uppercase eyebrow */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span>Philosophy & Artistry</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-100 leading-tight">
              The Essence of Aura
            </h2>

            {/* Concise Premium Brand Copy */}
            <div className="mt-6 space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                At <span className="text-[#F3E7C4] font-medium">Aura HN Scents</span>, we believe fragrance is not merely an accessory, but an intimate extension of your presence. An invisible signature that speaks before words are spoken, capturing individuality, quiet confidence, and timeless elegance.
              </p>
              <p>
                Each creation in our collection is meticulously formulated using exquisite aromatic ingredients, balancing radiant top notes with evocative, grounding heart and base notes. Designed for both everyday sophistication and elevated milestones, our fragrances are created to accompany you with understated distinction.
              </p>
            </div>

            {/* Four Brand Cornerstones */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800">
              <div className="space-y-1">
                <p className="font-brand text-[11px] uppercase tracking-wider text-[#C5A059]">Individuality</p>
                <p className="text-xs text-stone-400">Unique olfactory profiles that set you apart.</p>
              </div>
              <div className="space-y-1">
                <p className="font-brand text-[11px] uppercase tracking-wider text-[#C5A059]">Confidence</p>
                <p className="text-xs text-stone-400">Commanding notes designed to empower your day.</p>
              </div>
              <div className="space-y-1">
                <p className="font-brand text-[11px] uppercase tracking-wider text-[#C5A059]">Elegance</p>
                <p className="text-xs text-stone-400">Harmonious blending of classical and modern scents.</p>
              </div>
              <div className="space-y-1">
                <p className="font-brand text-[11px] uppercase tracking-wider text-[#C5A059]">Impression</p>
                <p className="text-xs text-stone-400">A memorable sillage that lingers gracefully.</p>
              </div>
            </div>

            {/* Quiet signature quote */}
            <div className="mt-8 p-4 rounded-lg bg-[#141414] border border-stone-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span className="text-xs uppercase tracking-widest text-stone-300 font-medium">
                  50ml Artisanal Editions Available Across Pakistan
                </span>
              </div>
              <span className="text-xs text-[#C5A059] font-mono tabular-nums">1.7 FL OZ</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
