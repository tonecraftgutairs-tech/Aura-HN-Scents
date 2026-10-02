import React from 'react';
import { BRAND_CONFIG, BRAND_ASSETS, getWhatsAppOrderUrl } from '../data/products';
import { AuraImage } from './AuraImage';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-stone-900 text-stone-400 py-16 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800/80">
          
          {/* Brand Column with Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center shrink-0">
                <AuraImage
                  filename={BRAND_ASSETS.logo.filename}
                  alt={BRAND_ASSETS.logo.alt}
                  flaconStyle="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-brand text-base tracking-[0.2em] text-[#F3E7C4] block leading-none">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block mt-1">
                  {BRAND_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="mt-5 text-xs text-stone-400 font-light max-w-sm leading-relaxed">
              Refined artisanal perfumery crafted to leave a lasting impression. Hand-poured 50ml flacons designed to express your personal aura with unforgettable elegance.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-stone-300">
              <span className="text-stone-500 font-mono text-[10px] uppercase tracking-wider">Direct Concierge:</span>
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3E7C4] hover:text-[#C5A059] font-medium transition-colors"
              >
                {BRAND_CONFIG.whatsappFormatted}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-brand text-xs uppercase tracking-[0.25em] text-[#F3E7C4] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  About the Brand
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  Fragrance Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lifestyle')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  Wear Your Aura
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-aura')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  Why Aura HN Scents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-stone-400 hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Official Social Media Column */}
          <div className="md:col-span-4">
            <h4 className="font-brand text-xs uppercase tracking-[0.25em] text-[#F3E7C4] mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-stone-400 font-light mb-4">
              Follow our official channels for new fragrance launches, olfactory stories, and exclusive releases.
            </p>

            <div className="flex flex-col space-y-3">
              {/* Instagram */}
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs text-stone-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>Instagram (@aurahnscents_official)</span>
              </a>

              {/* Facebook */}
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs text-stone-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.657 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </div>
                <span>Facebook (Official Page)</span>
              </a>

              {/* TikTok */}
              <a
                href={BRAND_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs text-stone-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.95-4.52V8.46a8.27 8.27 0 0 0 4.82 1.55v-3.32h-1z" />
                  </svg>
                </div>
                <span>TikTok (@aurahnscents_official)</span>
              </a>

              {/* WhatsApp direct */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs text-stone-300 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-[#25D366]/50 transition-colors">
                  <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span>WhatsApp ({BRAND_CONFIG.whatsappFormatted})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© 2026 Aura HN Scents. All Rights Reserved.</p>
          <div className="mt-4 sm:mt-0 flex items-center gap-6 text-[11px] text-stone-500">
            <span>Pure 50ml Flacons</span>
            <span aria-hidden="true">·</span>
            <span>National Delivery</span>
            <span aria-hidden="true">·</span>
            <span>Made in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
