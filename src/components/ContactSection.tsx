import React, { useState } from 'react';
import { BRAND_CONFIG, PRODUCTS, getWhatsAppOrderUrl } from '../data/products';
import { Product } from '../types';

interface ContactSectionProps {
  onOpenCheckout?: (product?: Product) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCheckout }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  const handleOrderClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout(selectedProduct);
    } else {
      window.open(getWhatsAppOrderUrl(selectedProduct.name), '_blank');
    }
  };


  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-stone-900/80 overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-[#141414] to-[#0c0c0c] border border-stone-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(197,160,89,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 text-center">
            <span className="font-brand text-xs uppercase tracking-[0.3em] text-[#C5A059] block mb-2 font-medium">
              {BRAND_CONFIG.name} Concierge
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#FDFCF7]">
              Begin Your Fragrance Journey
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-lg mx-auto font-light text-balance">
              Have a question or want to place an order? Get in touch with us on WhatsApp.
            </p>

            {/* Interactive Quick Order Selector */}
            <div className="mt-8 max-w-md mx-auto p-4 rounded-2xl bg-black/60 border border-stone-800 text-left">
              <label htmlFor="quick-perfume-select" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-2 font-medium">
                Select Perfume for Immediate Order:
              </label>
              <select
                id="quick-perfume-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-[#161616] text-[#F3E7C4] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} — {prod.category} ({prod.volume}) · {prod.price}
                  </option>
                ))}
              </select>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleOrderClick}
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Order Now (Checkout Form)</span>
                </button>
              </div>
            </div>

            {/* Direct Contact Metrics */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="text-stone-500 uppercase tracking-widest font-mono">WhatsApp:</span>
                <a 
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F3E7C4] hover:text-[#C5A059] font-medium transition-colors"
                >
                  {BRAND_CONFIG.whatsappFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-stone-500 uppercase tracking-widest font-mono">Availability:</span>
                <span className="text-stone-300">Fast National Dispatch Across Pakistan</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
