import React from 'react';
import { Product } from '../types';
import { getWhatsAppOrderUrl } from '../data/products';
import { AuraImage } from './AuraImage';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onOrderNow: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onOrderNow }) => {


  return (
    <article className="group relative bg-[#111111] rounded-2xl border border-stone-800/90 overflow-hidden card-luxury-hover flex flex-col h-full">
      {/* Subtle top ambient indicator */}
      <div 
        className="h-[2px] w-full transition-all duration-500 opacity-60 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)` }}
      />

      {/* Image Area - 65% to 75% focus as specified in ecommerce retail guidelines */}
      <div 
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/5] bg-[#0c0c0c] overflow-hidden cursor-pointer flex items-center justify-center p-4 sm:p-6"
      >
        {/* Ambient subtle back-glow */}
        <div 
          className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${product.accentColor}, transparent 70%)` }}
        />

        {/* Product Image */}
        <AuraImage
          filename={product.imageFilename}
          alt={product.imageAlt}
          productName={product.name}
          flaconStyle={product.flaconStyle}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Clean, unboxed metadata pill-free header tags */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-widest uppercase pointer-events-none">
          <span className="text-stone-400 bg-[#080808]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5 font-medium">
            {product.category} · {product.volume}
          </span>
          <span className="text-[#C5A059] bg-[#080808]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C5A059]/20 font-serif-luxury italic text-xs">
            Pure Parfum
          </span>
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-[#F3E7C4] bg-stone-900/90 border border-[#C5A059]/40 shadow-lg font-medium">
            View Fragrance Details
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-gradient-to-b from-[#111111] to-[#0c0c0c]">
        <div>
          {/* Category & Volume metadata unboxed */}
          <div className="flex items-center gap-2 text-xs text-stone-400 tracking-wider">
            <span>For {product.category}</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>{product.volume}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onSelect(product)}
            className="mt-2 font-serif-luxury text-2xl font-normal text-stone-100 group-hover:text-[#F3E7C4] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short Fragrance Description */}
          <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="mt-6 pt-4 border-t border-stone-800/80">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">Price</span>
            <span className={`font-serif-luxury text-xl font-medium tracking-wide tabular-nums ${
              product.isContactPrice ? 'text-[#F3E7C4] italic text-base' : 'text-[#C5A059]'
            }`}>
              {product.price}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* View Details Button */}
            <button
              onClick={() => onSelect(product)}
              className="w-full py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-medium text-stone-300 bg-stone-900 hover:bg-stone-800 hover:text-white border border-stone-800 transition-colors text-center cursor-pointer"
            >
              View Details
            </button>

            {/* Order Now Checkout Form Button */}
            <button
              onClick={() => onOrderNow(product)}
              className="w-full py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
