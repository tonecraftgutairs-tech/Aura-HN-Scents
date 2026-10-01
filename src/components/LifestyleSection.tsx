import React from 'react';
import { BRAND_ASSETS, getWhatsAppOrderUrl } from '../data/products';
import { AuraImage } from './AuraImage';

export const LifestyleSection: React.FC = () => {
  return (
    <section id="lifestyle" className="py-24 bg-[#0a0a0a] relative border-t border-b border-stone-900/80 overflow-hidden">
      {/* Soft warm light glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,160,89,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Lifestyle & Customer Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-4 border border-[#C5A059]/20 rounded-3xl pointer-events-none" />
              
              {/* Image Container with high-end luxury treatment */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-950 aspect-[3/4] border border-stone-800 shadow-2xl flex items-center justify-center group">
                <AuraImage
                  filename={BRAND_ASSETS.lifestyle.filename}
                  alt={BRAND_ASSETS.lifestyle.alt}
                  flaconStyle="lifestyle"
                  className="w-full h-full object-cover object-top"
                  priority
                />

                {/* Subtle vignette scrim to enhance typography overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Quiet Floating Badges from Brand Asset */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left pointer-events-none">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium block">
                      Aura in Motion
                    </span>
                    <span className="font-serif-luxury text-xl sm:text-2xl text-[#FDFCF7] italic block mt-0.5">
                      Confidence in Every Spray
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] tracking-widest uppercase text-stone-400 font-mono block">
                      Pure Flacon
                    </span>
                    <span className="text-xs text-[#F3E7C4] font-medium block">
                      50ml Edition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling & Sillage Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span>Presence & Art of Wearing</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-100 leading-tight">
              Wear Your Aura.
            </h2>

            <p className="mt-6 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Fragrance is personal architecture. It frames how you enter a room and how you linger in memory long after you depart. Aura HN Scents is formulated to meld seamlessly with your skin’s natural warmth, projecting an effortless poise that speaks of confidence and quiet distinction.
            </p>

            {/* Editorial Feature Badges matching the authentic poster */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121212] border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#F3E7C4] font-medium">Long Lasting Fragrance</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">Concentrated aromatic oils crafted for balanced persistence throughout the day.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#F3E7C4] font-medium">Authentic Formulation</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">True to bottle aesthetics with certified ingredient purity and zero filler dilution.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#F3E7C4] font-medium">Premium Quality</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">Bespoke heavy glass flacons and fine atomizers engineered for a velvet micro-mist.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-stone-800">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#F3E7C4] font-medium">Perfect for Every Occasion</h4>
                <p className="text-xs text-stone-400 mt-1 leading-normal">From executive boardrooms to intimate twilight evenings and festive gatherings.</p>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                <span>Inquire with Our Concierge</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
