import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
  onOrderProduct: (product: Product) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectProduct, onOrderProduct }) => {

  const [filter, setFilter] = useState<'All' | 'Men' | 'Women'>('All');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="collection" className="py-24 bg-[#080808] relative overflow-hidden w-full max-w-full">
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span>The Signature Four</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-100 text-balance">
            Featured Fragrance Collection
          </h2>
          
          <p className="mt-4 text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto text-balance">
            Four masterfully balanced compositions distilled to leave an unforgettable impression. Each bottle poured in a concentrated 50ml flacon.
          </p>

          {/* Interactive Filter Tabs (Zero-pill compliant segmented buttons) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#141414] rounded-xl border border-stone-800">
            <button
              onClick={() => setFilter('All')}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                filter === 'All'
                  ? 'bg-stone-800 text-[#F3E7C4] shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Scents (4)
            </button>
            <button
              onClick={() => setFilter('Women')}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                filter === 'Women'
                  ? 'bg-stone-800 text-[#F3E7C4] shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              For Women (1)
            </button>
            <button
              onClick={() => setFilter('Men')}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                filter === 'Men'
                  ? 'bg-stone-800 text-[#F3E7C4] shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              For Men (3)
            </button>
          </div>
        </div>

        {/* 4-Product Collection Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onOrderNow={onOrderProduct}
            />
          ))}
        </div>

        {/* Quiet assurance banner */}
        <div className="mt-16 text-center">
          <p className="text-xs text-stone-400 tracking-wider">
            All perfumes are concentrated 50ml Eau de Parfum. For custom gifting or bulk inquiries, contact us on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
