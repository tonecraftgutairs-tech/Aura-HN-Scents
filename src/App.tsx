import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CollectionSection } from './components/CollectionSection';
import { LifestyleSection } from './components/LifestyleSection';
import { WhyAuraSection } from './components/WhyAuraSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AssetManagerModal } from './components/AssetManagerModal';
import { AssetProvider } from './context/AssetContext';
import { Product } from './types';

function MainSite() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleOpenCheckout = (product?: Product | null) => {
    setCheckoutProduct(product || null);
    setIsCheckoutOpen(true);
  };

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'collection', 'lifestyle', 'why-aura', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-stone-200 flex flex-col font-sans selection:bg-[#C5A059] selection:text-black">
      {/* Sticky Top Bar Contract */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenCheckout={() => handleOpenCheckout()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Cinematic Luxury Hero Section */}
        <HeroSection
          onExploreClick={() => handleNavigate('collection')}
          onOpenCheckout={() => handleOpenCheckout()}
        />

        {/* 2. The Essence of Aura (Brand & Philosophy) */}
        <AboutSection />

        {/* 3. Featured 4-Product Collection Grid */}
        <CollectionSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOrderProduct={(product) => handleOpenCheckout(product)}
        />

        {/* 4. Lifestyle / Customer Section ("Wear Your Aura") */}
        <LifestyleSection />

        {/* 5. Why Aura HN Scents Section */}
        <WhyAuraSection />

        {/* 6. Order Concierge & Direct Contact */}
        <ContactSection onOpenCheckout={(product) => handleOpenCheckout(product)} />
      </main>

      {/* 7. Footer with Logo, Tagline, Links & Socials */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenCheckout={() => handleOpenCheckout()} />

      {/* 8. Dedicated Product Detail Experience Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrderNow={(product) => handleOpenCheckout(product)}
      />

      {/* 9. Advanced Checkout / Order Form System */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialProduct={checkoutProduct}
      />

      {/* 10. Official Client Brand Asset Manager */}
      <AssetManagerModal />
    </div>
  );
}

export default function App() {
  return (
    <AssetProvider>
      <MainSite />
    </AssetProvider>
  );
}
