import React from 'react';
import { WHY_AURA_POINTS } from '../data/products';

export const WhyAuraSection: React.FC = () => {
  return (
    <section id="why-aura" className="py-24 bg-[#080808] relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span>Artisanal Standards</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-100 text-balance">
            Why Aura HN Scents
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light text-balance">
            Guided by precision perfumery and a steadfast commitment to luxury craftsmanship.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_AURA_POINTS.map((point, index) => (
            <div 
              key={point.title}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-stone-800/90 card-luxury-hover flex flex-col justify-between"
            >
              {/* Corner Editorial Index */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C5A059]/60 tracking-wider">
                  0{index + 1}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#C5A059]/40" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#FDFCF7] mb-3">
                  {point.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-500 uppercase tracking-widest font-mono">
                <span>Standard</span>
                <span className="text-[#C5A059]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
