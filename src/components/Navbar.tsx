import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG, BRAND_ASSETS } from '../data/products';
import { AuraImage } from './AuraImage';
import { useAsset } from '../context/AssetContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenCheckout: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenCheckout, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsAssetManagerOpen } = useAsset();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Collection', id: 'collection' },
    { label: 'Why Aura', id: 'why-aura' },
    { label: 'Lifestyle', id: 'lifestyle' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#C5A059]/20 py-3 shadow-2xl'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-transparent flex items-center justify-center shrink-0">
              <AuraImage
                filename={BRAND_ASSETS.logo.filename}
                alt={BRAND_ASSETS.logo.alt}
                flaconStyle="logo"
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-sm sm:text-base font-semibold tracking-[0.2em] text-[#F3E7C4] group-hover:text-[#C5A059] transition-colors leading-none">
                AURA HN SCENTS
              </span>
              <span className="text-[9px] tracking-[0.25em] text-stone-400 uppercase mt-0.5 font-light">
                Fragrance That Speaks
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 focus:outline-none focus-visible:text-[#C5A059] ${
                  activeSection === item.id
                    ? 'text-[#C5A059]'
                    : 'text-stone-300 hover:text-[#F3E7C4]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsAssetManagerOpen(true)}
              className="text-[11px] text-stone-400 hover:text-[#C5A059] px-2.5 py-1.5 rounded-lg border border-stone-800 bg-[#141414] hover:border-[#C5A059]/40 transition-colors cursor-pointer"
              title="View / Sync Official Uploaded Assets"
            >
              Assets (1-6)
            </button>

            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-95 transition-all shadow-md whitespace-nowrap cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-[#C5A059] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-b border-[#C5A059]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                  activeSection === item.id ? 'text-[#C5A059]' : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-stone-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] shadow-lg cursor-pointer"
            >
              <span>Order Now (Checkout Form)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAssetManagerOpen(true);
              }}
              className="w-full text-center text-[11px] text-stone-400 py-2 border border-stone-800 rounded-xl"
            >
              View Official Uploaded Assets
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
