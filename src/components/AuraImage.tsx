import React, { useState, useEffect } from 'react';
import { useAsset } from '../context/AssetContext';
import { PERMANENT_IMAGES } from '../data/embeddedImages';
import imperialImg from '../assets/images/the-imperial-aura.jpeg';
import blossomImg from '../assets/images/blossom-aura.jpeg';
import alphaImg from '../assets/images/the-alpha-aura.jpeg';
import divineImg from '../assets/images/the-divine-aura.jpeg';
import logoImg from '../assets/images/aura-logo.jpeg';
import lifestyleImg from '../assets/images/aura-lifestyle.jpeg';

interface AuraImageProps {
  filename: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'banner';
  productName?: string;
  flaconStyle?: 'crystal-fluted' | 'gold-curved' | 'geometric-glass' | 'obsidian-plinth' | 'logo' | 'lifestyle';
  priority?: boolean;
}

const LEGACY_IMAGE_MAP: Record<string, string> = {
  'WhatsApp Image 2026-10-01 at 2.51.34 PM (1).jpeg': 'the-imperial-aura.jpeg',
  'WhatsApp Image 2026-10-01 at 2.51.33 PM.jpeg': 'blossom-aura.jpeg',
  'WhatsApp Image 2026-10-01 at 2.51.33 PM (1).jpeg': 'the-divine-aura.jpeg',
  'WhatsApp Image 2026-10-01 at 2.51.34 PM.jpeg': 'the-alpha-aura.jpeg',
  'WhatsApp Image 2026-10-01 at 1.27.56 PM.jpeg': 'aura-logo.jpeg',
  'WhatsApp Image 2026-10-01 at 1.31.23 PM.jpeg': 'aura-lifestyle.jpeg',
};

const STATIC_IMAGE_MAP: Record<string, string> = {
  'the-imperial-aura.jpeg': imperialImg,
  'blossom-aura.jpeg': blossomImg,
  'the-alpha-aura.jpeg': alphaImg,
  'the-divine-aura.jpeg': divineImg,
  'aura-logo.jpeg': logoImg,
  'aura-lifestyle.jpeg': lifestyleImg,
  'WhatsApp Image 2026-10-01 at 2.51.34 PM (1).jpeg': imperialImg,
  'WhatsApp Image 2026-10-01 at 2.51.33 PM.jpeg': blossomImg,
  'WhatsApp Image 2026-10-01 at 2.51.33 PM (1).jpeg': divineImg,
  'WhatsApp Image 2026-10-01 at 2.51.34 PM.jpeg': alphaImg,
  'WhatsApp Image 2026-10-01 at 1.27.56 PM.jpeg': logoImg,
  'WhatsApp Image 2026-10-01 at 1.31.23 PM.jpeg': lifestyleImg,
};

export const AuraImage: React.FC<AuraImageProps> = ({
  filename,
  alt,
  className = '',
  aspectRatio = 'portrait',
  productName,
  flaconStyle,
  priority = false,
}) => {
  const { getAssetSrc } = useAsset();
  const overrideSrc = getAssetSrc(filename);

  // Permanent, fixed image candidates guaranteed across Vercel and all static hosts
  const cleanName = LEGACY_IMAGE_MAP[filename] || filename;
  const encodedName = encodeURIComponent(filename);
  const embeddedPermanentSrc = PERMANENT_IMAGES[cleanName] || PERMANENT_IMAGES[filename];
  const staticSrc = STATIC_IMAGE_MAP[cleanName] || STATIC_IMAGE_MAP[filename];
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const candidateSrcs = overrideSrc
    ? [overrideSrc, ...(embeddedPermanentSrc ? [embeddedPermanentSrc] : []), ...(staticSrc ? [staticSrc] : [])]
    : [
        ...(embeddedPermanentSrc ? [embeddedPermanentSrc] : []),
        ...(staticSrc ? [staticSrc] : []),
        `${cleanBase}${cleanName}`,
        `/${cleanName}`,
        `${cleanBase}images/${cleanName}`,
        `/images/${cleanName}`,
        `${cleanBase}${encodedName}`,
        `/${encodedName}`,
        `./${cleanName}`,
        `./images/${cleanName}`,
      ];
  
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const currentSrc = candidateSrcs[currentSrcIndex];

  // Immediately show embedded data URIs to avoid any delay or placeholder flash
  const isDataUri = currentSrc?.startsWith('data:');
  const [loadError, setLoadError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(isDataUri || priority);

  useEffect(() => {
    // Reset when filename or override changes
    setLoadError(false);
    setImageLoaded(isDataUri || priority);
    setCurrentSrcIndex(0);
  }, [filename, overrideSrc]);

  const handleError = () => {
    if (currentSrcIndex < candidateSrcs.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      setLoadError(true);
    }
  };


  return (
    <div className={`relative overflow-hidden bg-[#0d0d0d] flex items-center justify-center ${className}`}>
      {/* Real Image Element */}
      {!loadError && (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={handleError}
          className={`w-full h-full ${flaconStyle === 'lifestyle' ? 'object-cover' : 'object-contain'} transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}
        />
      )}

      {/* Luxury presentation container & Fallback compliance without raw local filenames */}
      {(loadError || !imageLoaded) && (
        <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#0a0a0a] ${imageLoaded ? 'hidden' : 'absolute inset-0'}`}>
          {/* Subtle gold ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none" />
          
          {/* Visual flacon representation tailored to the authentic bottle design */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {flaconStyle === 'logo' && (
              <div className="flex flex-col items-center gap-2.5">
                {/* Luxury Royal AURA HN SCENTS Crown & Monogram Emblem */}
                <div className="relative w-16 h-16 rounded-full border-2 border-[#C5A059] bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] p-1 shadow-[0_0_20px_rgba(197,160,89,0.25)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-[#C5A059]/40 flex flex-col items-center justify-center">
                    {/* Crown */}
                    <svg className="w-4 h-4 text-[#F3E7C4] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                    </svg>
                    {/* Monogram */}
                    <span className="font-serif-luxury text-sm font-bold tracking-widest text-[#F3E7C4] leading-none">
                      AH
                    </span>
                  </div>
                </div>
                <span className="font-brand text-xs sm:text-sm text-[#F3E7C4] tracking-[0.28em] font-semibold">AURA HN SCENTS</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059]">Fragrance That Speaks</span>
              </div>
            )}

            {flaconStyle === 'lifestyle' && (
              <div className="flex flex-col items-center gap-3 px-4">
                {/* Luxury Perfume Flacon Silhouette with Gold Sillage */}
                <div className="relative w-24 h-28 rounded-2xl border border-[#C5A059]/40 bg-gradient-to-b from-[#181818] via-[#101010] to-[#080808] flex flex-col items-center justify-center p-3 shadow-2xl">
                  {/* Flacon Cap */}
                  <div className="w-8 h-4 rounded-t bg-gradient-to-r from-[#8C6D2D] via-[#F3E7C4] to-[#C5A059] border border-[#C5A059] shadow-sm mb-1" />
                  {/* Flacon Body */}
                  <div className="w-16 h-16 rounded-lg border border-[#C5A059]/50 bg-gradient-to-b from-[#C5A059]/15 via-transparent to-[#C5A059]/25 flex flex-col items-center justify-center p-1">
                    <span className="font-brand text-[8px] tracking-widest text-[#F3E7C4] uppercase">AURA HN</span>
                    <span className="text-[6px] tracking-wider text-[#C5A059] mt-0.5">50 ML EDP</span>
                  </div>
                </div>
                <span className="font-serif-luxury text-xl text-[#F3E7C4] italic">Wear Your Aura</span>
                <span className="text-xs text-[#C5A059] tracking-widest uppercase text-[10px]">Confidence In Every Spray</span>
              </div>
            )}

            {flaconStyle === 'crystal-fluted' && (
              <div className="flex flex-col items-center">
                {/* Silver knurled cap & fluted bottle */}
                <div className="w-12 h-8 rounded-t border border-stone-400 bg-gradient-to-b from-stone-200 via-stone-300 to-stone-400 shadow-sm" />
                <div className="w-6 h-2 bg-stone-300 border-x border-stone-400" />
                <div className="w-28 h-36 rounded-b-2xl border border-[#8CA679]/40 bg-gradient-to-b from-[#8CA679]/20 via-[#8CA679]/10 to-[#8CA679]/30 flex flex-col items-center justify-center p-2 relative shadow-lg">
                  <div className="bg-stone-100/90 text-stone-900 border border-stone-300 px-3 py-2 text-center w-20 shadow-sm">
                    <div className="text-[7px] tracking-widest uppercase">Aura HN</div>
                    <div className="font-serif-luxury text-[10px] font-bold tracking-wider">BLOSSOM</div>
                    <div className="text-[6px] tracking-widest text-stone-500">50 ML EDP</div>
                  </div>
                </div>
              </div>
            )}

            {flaconStyle === 'gold-curved' && (
              <div className="flex flex-col items-center">
                {/* Flared gold wing cap */}
                <div className="w-16 h-7 rounded-t-lg bg-gradient-to-r from-[#8C6D2D] via-[#F3E7C4] to-[#C5A059] shadow-md border-b border-[#8C6D2D]" />
                <div className="w-6 h-3 bg-gradient-to-b from-[#E7C986] to-[#8C6D2D]" />
                <div className="w-28 h-36 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#D4AF37]/25 via-[#D4AF37]/10 to-[#D4AF37]/35 flex flex-col items-center justify-center p-2 relative shadow-lg">
                  <div className="bg-[#FAF7EE] text-stone-900 border border-[#D4AF37]/50 px-2.5 py-2 text-center w-22 shadow-sm rounded-sm">
                    <div className="text-[7px] tracking-widest uppercase text-[#8C6D2D]">AURA HN</div>
                    <div className="font-serif-luxury text-[9px] font-bold text-stone-900">The Divine Aura</div>
                    <div className="text-[6px] tracking-wider text-stone-600">50 ML EDP</div>
                  </div>
                </div>
              </div>
            )}

            {flaconStyle === 'geometric-glass' && (
              <div className="flex flex-col items-center">
                {/* Square crystal cap */}
                <div className="w-12 h-10 border border-stone-300/80 bg-stone-100/20 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <div className="w-4 h-6 bg-gradient-to-b from-[#C5A059] to-[#8C6D2D]" />
                </div>
                <div className="w-6 h-2 bg-[#C5A059]" />
                <div className="w-32 h-32 border border-stone-300/50 bg-gradient-to-b from-amber-100/15 via-amber-200/10 to-amber-100/20 flex flex-col items-center justify-center p-3 relative shadow-lg">
                  <div className="bg-white text-stone-900 px-3 py-2 text-center w-22 shadow-md">
                    <div className="font-serif-luxury text-[9px] font-bold tracking-wider leading-tight">THE ALPHA AURA</div>
                    <div className="text-[6px] tracking-widest text-stone-500 mt-0.5">by AURA HN</div>
                  </div>
                </div>
              </div>
            )}

            {flaconStyle === 'obsidian-plinth' && (
              <div className="flex flex-col items-center">
                {/* Stepped obsidian cap */}
                <div className="w-12 h-3 bg-stone-900 border border-stone-700 rounded-t-sm" />
                <div className="w-10 h-3 bg-stone-950 border-x border-stone-800" />
                <div className="w-14 h-4 bg-stone-900 border border-stone-700" />
                {/* Glossy black bottle */}
                <div className="w-28 h-36 rounded-t-xl rounded-b-md border border-stone-800 bg-gradient-to-b from-[#1c1c1c] via-[#0d0d0d] to-[#050505] flex flex-col items-center justify-center p-2 relative shadow-2xl">
                  <div className="text-center">
                    <div className="font-sans text-[8px] tracking-[0.2em] font-semibold text-stone-200 uppercase">THE IMPERIAL</div>
                    <div className="font-sans text-[8px] tracking-[0.2em] font-semibold text-stone-200 uppercase">AURA</div>
                    <div className="text-[6px] tracking-widest text-[#C5A059] mt-2">AURA HN SCENTS</div>
                  </div>
                </div>
                {/* Dark plinth base */}
                <div className="w-34 h-3 bg-stone-950 border-t border-stone-800 mt-0.5 shadow-md" />
              </div>
            )}
          </div>

          {/* Clean presentation label without raw filenames */}
          {productName && (
            <div className="relative z-10 mt-3 pt-2 border-t border-stone-800/80 w-full max-w-[240px]">
              <p className="text-[10px] tracking-widest text-[#C5A059] font-medium uppercase truncate">
                {productName}
              </p>
              <p className="text-[9px] text-stone-400 uppercase tracking-widest font-mono mt-0.5">
                50 ML EDP · Pure Sillage
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
