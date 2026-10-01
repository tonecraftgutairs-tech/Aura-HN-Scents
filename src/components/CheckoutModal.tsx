import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS, BRAND_CONFIG } from '../data/products';
import { AuraImage } from './AuraImage';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

const PAKISTANI_CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Abbottabad',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Other',
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || PRODUCTS[0].id
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('Karachi');
  const [customCity, setCustomCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculate total price if numeric
  const getSubtotal = () => {
    if (currentProduct.isContactPrice) return 'Contact for Price';
    const numPrice = parseInt(currentProduct.price.replace(/[^\d]/g, ''), 10);
    if (isNaN(numPrice)) return currentProduct.price;
    const total = numPrice * quantity;
    return `PKR ${total.toLocaleString()}`;
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required.';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number.';
    }
    if (city === 'Other' && !customCity.trim()) {
      newErrors.city = 'Please specify your city.';
    }
    if (!address.trim()) newErrors.address = 'Complete delivery address is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const finalCity = city === 'Other' ? customCity.trim() : city;
    
    // Construct pre-filled professional WhatsApp message matching exact prompt format
    let message = `Hello Aura HN Scents, I want to place an order.\n`;
    message += `- Name: ${fullName.trim()}\n`;
    message += `- Product: ${currentProduct.name} (${currentProduct.volume})\n`;
    message += `- Quantity: ${quantity}\n`;
    message += `- Address: ${address.trim()}, ${finalCity}\n`;
    message += `- Phone: ${phone.trim()}\n`;
    if (notes.trim()) {
      message += `- Special Instructions: ${notes.trim()}\n`;
    }
    message += `Please confirm my order.`;

    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className="relative w-full max-w-3xl bg-[#111111] border border-stone-800 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#8C6D2D]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800/80 flex items-center justify-between bg-gradient-to-b from-[#181818] to-[#121212]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 bg-black flex items-center justify-center p-1">
              <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h2 id="checkout-title" className="font-serif-luxury text-xl sm:text-2xl text-[#FDFCF7]">
                Order Checkout
              </h2>
              <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-medium">
                {BRAND_CONFIG.name} · Direct WhatsApp Confirmation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close checkout"
          >
            ✕
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-8 space-y-6 flex-grow">
          
          {/* Order Summary & Product Selector Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-stone-800 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-20 h-24 sm:w-24 sm:h-28 bg-black rounded-xl overflow-hidden border border-stone-800 shrink-0 flex items-center justify-center p-2">
              <AuraImage
                filename={currentProduct.imageFilename}
                alt={currentProduct.imageAlt}
                productName={currentProduct.name}
                flaconStyle={currentProduct.flaconStyle}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 w-full space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Perfume Dropdown */}
                <div>
                  <label htmlFor="product-select" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1 font-medium">
                    Selected Fragrance:
                  </label>
                  <select
                    id="product-select"
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full bg-[#1e1e1e] text-[#F3E7C4] border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.id}>
                        {prod.name} — {prod.category} ({prod.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity Stepper */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1 font-medium">
                    Quantity:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 rounded-lg bg-[#222] border border-stone-700 text-stone-200 hover:border-[#C5A059] flex items-center justify-center text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-mono font-semibold text-stone-100 text-sm">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 rounded-lg bg-[#222] border border-stone-700 text-stone-200 hover:border-[#C5A059] flex items-center justify-center text-sm font-bold"
                    >
                      +
                    </button>
                    <span className="text-xs text-stone-500 font-mono ml-2">(50ml bottle{quantity > 1 ? 's' : ''})</span>
                  </div>
                </div>
              </div>

              {/* Price Calculation Row */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-800 text-xs">
                <span className="text-stone-400">Total Estimated Amount:</span>
                <span className="font-serif-luxury text-lg font-bold text-[#C5A059] tracking-wider tabular-nums">
                  {getSubtotal()}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#C5A059]" />
              <span>Customer & Delivery Details</span>
            </h3>

            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="customer-name" className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#181818] text-stone-100 border ${
                    errors.fullName ? 'border-red-500' : 'border-stone-700'
                  } rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] placeholder:text-stone-600 transition-colors`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="customer-phone" className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  Phone / WhatsApp Number <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  required
                  placeholder="e.g. 0333 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-[#181818] text-stone-100 border ${
                    errors.phone ? 'border-red-500' : 'border-stone-700'
                  } rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] placeholder:text-stone-600 transition-colors`}
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 2: City and Address */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="customer-city" className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  City <span className="text-[#C5A059]">*</span>
                </label>
                <select
                  id="customer-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#181818] text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  {PAKISTANI_CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {city === 'Other' && (
                  <input
                    type="text"
                    placeholder="Enter city name"
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                    className="mt-2 w-full bg-[#181818] text-stone-100 border border-stone-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                )}
                {errors.city && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.city}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="customer-address" className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  Complete Delivery Address <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="customer-address"
                  type="text"
                  required
                  placeholder="House / Flat #, Street, Area / Sector"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full bg-[#181818] text-stone-100 border ${
                    errors.address ? 'border-red-500' : 'border-stone-700'
                  } rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] placeholder:text-stone-600 transition-colors`}
                />
                {errors.address && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.address}</p>
                )}
              </div>
            </div>

            {/* Row 3: Special Instructions / Notes */}
            <div>
              <label htmlFor="customer-notes" className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                Special Instructions / Gift Message <span className="text-stone-500 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="customer-notes"
                rows={2}
                placeholder="Any special requests, preferred delivery time, or custom gift notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#181818] text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] placeholder:text-stone-600 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Trust Banner */}
          <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Cash on Delivery (COD) / Bank Transfer across Pakistan</span>
            </div>
            <span className="text-stone-500 font-mono">100% Authentic Flacons</span>
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider text-stone-400 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer text-center"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Confirm on WhatsApp'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
