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
  isContactPrice?: boolean;
  shortDesc: string;
  fullDesc: string;
  notes: ProductNotes;
  imageFilename: string;
  imageAlt: string;
  accentColor: string;
  flaconStyle: 'crystal-fluted' | 'gold-curved' | 'geometric-glass' | 'obsidian-plinth';
  badgeTag?: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}
