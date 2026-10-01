import React, { useEffect } from 'react';
import { Product } from '../types';
import { getWhatsAppOrderUrl, BRAND_CONFIG } from '../data/products';
import { AuraImage } from './AuraImage';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOrderNow: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onOrderNow }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppOrderUrl(product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      {/* Background click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        className="relative w-full max-w-4xl bg-[#111111] border border-stone-800 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Top Gold Accent Bar */}
        <div 
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, #F3E7C4, ${product.accentColor}, #8C6D2D)` }}
        />

        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-900/80 border border-stone-700/80 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close details"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Focused Large Product Image */}
          <div className="md:col-span-6 bg-[#0a0a0a] flex items-center justify-center p-6 sm:p-10 relative border-b md:border-b-0 md:border-r border-stone-800/80 min-h-[360px] md:min-h-[480px]">
            {/* Ambient light glow */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${product.accentColor}, transparent 75%)` }}
            />
            
            <div className="w-full max-w-sm aspect-[4/5] flex items-center justify-center">
              <AuraImage
                filename={product.imageFilename}
                alt={product.imageAlt}
                productName={product.name}
                flaconStyle={product.flaconStyle}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Official Asset Tag Overlay */}
            <div className="absolute bottom-4 left-6 right-6 text-center">
              <span className="text-[10px] tracking-widest uppercase text-stone-400 font-mono bg-black/60 px-3 py-1 rounded-full border border-white/5">
                Authentic Brand Flacon · 50ml Edition
              </span>
            </div>
          </div>

          {/* Right Column: Scent Profile & Purchase CTA */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#141414] to-[#0e0e0e]">
            <div>
              {/* Category and Volume metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059]">
                <span>{BRAND_CONFIG.name}</span>
                <span aria-hidden="true">·</span>
                <span>For {product.category}</span>
                <span aria-hidden="true">·</span>
                <span>{product.volume}</span>
              </div>

              {/* Title */}
              <h2 id="modal-product-title" className="mt-2 font-serif-luxury text-3xl sm:text-4xl text-[#FDFCF7]">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className={`font-serif-luxury text-2xl sm:text-3xl font-medium tracking-wide tabular-nums ${
                  product.isContactPrice ? 'text-[#F3E7C4] italic text-xl' : 'text-[#C5A059]'
                }`}>
                  {product.price}
                </span>
                <span className="text-xs text-stone-400 uppercase tracking-wider">
                  Inclusive of luxury packaging
                </span>
              </div>

              {/* Fragrance Narrative */}
              <div className="mt-5 text-stone-300 text-sm leading-relaxed font-light">
                <p>{product.fullDesc}</p>
              </div>

              {/* Olfactory Architecture / Fragrance Pyramid */}
              <div className="mt-6 pt-5 border-t border-stone-800">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-3">
                  Olfactory Pyramid
                </h4>
                
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="w-14 shrink-0 font-medium text-stone-400 uppercase text-[10px] tracking-wider pt-0.5">Top:</span>
                    <span className="text-stone-200">{product.notes.top.join(' · ')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-14 shrink-0 font-medium text-[#C5A059] uppercase text-[10px] tracking-wider pt-0.5">Heart:</span>
                    <span className="text-[#F3E7C4]">{product.notes.heart.join(' · ')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-14 shrink-0 font-medium text-stone-400 uppercase text-[10px] tracking-wider pt-0.5">Base:</span>
                    <span className="text-stone-300">{product.notes.base.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Brand Guarantee Note */}
              <div className="mt-5 p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 text-[11px] text-stone-400 flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#C5A059] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Direct delivery with signature protective casing. Instant confirmation on WhatsApp.</span>
              </div>
            </div>

            {/* Bottom Actions: Back to Collection + Order on WhatsApp */}
            <div className="mt-8 pt-5 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs uppercase tracking-wider text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer text-center"
              >
                Back to Collection
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOrderNow(product);
                }}
                className="w-full sm:flex-1 py-3 px-6 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg text-center whitespace-nowrap cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Order Now (Checkout Form)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
