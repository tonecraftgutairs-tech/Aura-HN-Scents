export interface ProductNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Women' | 'Men';
  volume: string;
  price: string;
  priceNumber: number;
  originalPrice?: string;
  discountedPrice?: string;
  basePriceNumber?: number;
  discountedPriceNumber?: number;
  isContactPrice?: boolean;
  brandTagline?: string;
  subDetails?: string;
  shortDesc: string;
  fullDesc: string;
  notes: ProductNotes;
  imageFilename: string;
  imageAlt: string;
  accentColor: string;
  flaconStyle: 'crystal-fluted' | 'gold-curved' | 'geometric-glass' | 'obsidian-plinth';
  badgeTag?: string;
}

export interface Bundle {
  id: string;
  name: string;
  subtitle: string;
  includes: string[];
  regularPrice: string;
  offerPrice: string;
  regularPriceNum: number;
  offerPriceNum: number;
  savings: string;
  savingsBadge: string;
  tagline: string;
  description: string;
  accentColor: string;
  images: {
    first: string;
    second: string;
    firstAlt: string;
    secondAlt: string;
    firstStyle: 'crystal-fluted' | 'gold-curved' | 'geometric-glass' | 'obsidian-plinth';
    secondStyle: 'crystal-fluted' | 'gold-curved' | 'geometric-glass' | 'obsidian-plinth';
  };
}

export interface BrandConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  email: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}
