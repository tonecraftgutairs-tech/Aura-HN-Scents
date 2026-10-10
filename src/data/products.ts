import { Product, Bundle, BrandConfig } from '../types';

export const BRAND_CONFIG: BrandConfig = {
  name: 'Aura HN Scents',
  tagline: 'Fragrance That Speaks',
  headline: 'A Signature of Your Aura.',
  subheadline: 'Discover refined fragrances crafted to leave a lasting impression.',
  whatsappNumber: '923337320295',
  whatsappFormatted: '+92 333 7320295',
  email: 'aurahnscents@gmail.com',
  socials: {
    instagram: 'https://www.instagram.com/aurahnscents_official?stkn=ZHp3MGdpcnMybHFp&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1CLQjH4xLk/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@aurahnscents_official?_r=1&_t=ZS-9A2DtvP3GTt',
  },
};

export const BRAND_ASSETS = {
  logo: {
    filename: 'aura-logo.jpeg',
    url: 'https://i.postimg.cc/8CHK9kpn/1000367313-photoaidcom-cropped-jpg.png',
    alt: 'Aura HN Scents Official Logo - Fragrance That Speaks',
  },
  lifestyle: {
    filename: 'aura-lifestyle.jpeg',
    url: 'https://i.postimg.cc/X7fzdgMN/IMG-20261002-WA0015.jpg',
    alt: 'Aura in Motion - Confidence In Every Spray, Fragrances That Speaks',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'the-imperial-aura',
    name: 'The Imperial Aura',
    category: 'Men',
    volume: '50 ML EDP',
    price: 'PKR 3,999',
    priceNumber: 3999,
    brandTagline: 'AURA HN SCENTS — 50 ML EDP',
    shortDesc: 'A bold and majestic scent for the modern king. Opens with juicy Pineapple & Bergamot, heart of Birch & Rose, and settles into a powerful base of Musk, Oakmoss & Vanilla.',
    fullDesc: 'A bold and majestic scent for the modern king. Opens with juicy Pineapple & Bergamot, heart of Birch & Rose, and settles into a powerful base of Musk, Oakmoss & Vanilla. Pure royalty in every spray.',
    notes: {
      top: ['Pineapple', 'Bergamot', 'Blackcurrant', 'Apple'],
      heart: ['Birch', 'Patchouli', 'Rose', 'Jasmine'],
      base: ['Musk', 'Oakmoss', 'Ambergris', 'Vanilla'],
    },
    imageFilename: 'the-imperial-aura.jpeg',
    imageAlt: 'The Imperial Aura 50 ML EDP for Men atop midnight podium with vanilla and citrus',
    accentColor: '#C5A059',
    flaconStyle: 'obsidian-plinth',
  },
  {
    id: 'blossom-aura',
    name: 'Blossom Aura',
    category: 'Women',
    volume: '50 ML EDP',
    price: 'PKR 3,499',
    priceNumber: 3499,
    brandTagline: 'AURA HN SCENTS — 50 ML EDP',
    shortDesc: "A soft, feminine bloom that captures spring's essence. Fresh Peony & Mandarin melts into a romantic heart of Osmanthus Rose, lingering with warm Sandalwood & Pink Pepper.",
    fullDesc: "A soft, feminine bloom that captures spring's essence. Fresh Peony & Mandarin melts into a romantic heart of Osmanthus Rose, lingering with warm Sandalwood & Pink Pepper. Delicate yet unforgettable.",
    notes: {
      top: ['Peony', 'Citrus', 'Mandarin Orange'],
      heart: ['Osmanthus', 'Rose'],
      base: ['Sandalwood', 'Patchouli', 'Pink Pepper'],
    },
    imageFilename: 'blossom-aura.jpeg',
    imageAlt: 'Blossom Aura 50 ML EDP for Women with floral and citrus accords',
    accentColor: '#8CA679',
    flaconStyle: 'crystal-fluted',
  },
  {
    id: 'the-alpha-aura',
    name: 'The Alpha Aura',
    category: 'Men',
    volume: '50 ML EDP',
    price: 'PKR 4,299',
    priceNumber: 4299,
    brandTagline: 'by AURA HN SCENTS — 50 ML EDP',
    subDetails: 'For Him | Fresh Scent | Aromatic Herbs',
    shortDesc: 'Fresh, confident and irresistibly masculine. Crisp Bergamot & Marine Notes lead to an aromatic heart of Rosemary & Lavender, finishing with a bold Mineral Amber & Musk trail.',
    fullDesc: 'Fresh, confident and irresistibly masculine. Crisp Bergamot & Marine Notes lead to an aromatic heart of Rosemary & Lavender, finishing with a bold Mineral Amber & Musk trail. Luxury in every spray.',
    notes: {
      top: ['Bergamot', 'Green Mandarin', 'Marine Notes'],
      heart: ['Rosemary', 'Lavender', 'Cypress', 'Mastic'],
      base: ['Mineral Amber', 'Patchouli', 'Musk'],
    },
    imageFilename: 'the-alpha-aura.jpeg',
    imageAlt: 'The Alpha Aura 50 ML EDP for Men on stone plinth with vanilla and lavender',
    accentColor: '#C5A059',
    flaconStyle: 'geometric-glass',
  },
  {
    id: 'the-divine-aura',
    name: 'The Divine Aura',
    category: 'Men',
    volume: '50 ML EDP',
    price: 'PKR 4,499',
    priceNumber: 4499,
    brandTagline: 'AURA HN SCENTS — 50 ML EDP',
    shortDesc: 'Mysterious, rich and deeply sensual. A luxurious blend of Oud & Honey, spiced with Pink Pepper, wrapped in Cashmere Wood, Saffron & Jasmine, and grounded in Ambergris & Sandalwood.',
    fullDesc: 'Mysterious, rich and deeply sensual. A luxurious blend of Oud & Honey, spiced with Pink Pepper, wrapped in Cashmere Wood, Saffron & Jasmine, and grounded in Ambergris & Sandalwood. Divine by name, divine by nature.',
    notes: {
      top: ['Oud', 'Honey', 'Pink Pepper', 'Nutmeg', 'Elemi'],
      heart: ['Cashmere Wood', 'Saffron', 'Jasmine', 'Patchouli', 'Cinnamon'],
      base: ['Saffron', 'Ambergris', 'Raspberry', 'Sandalwood', 'Violet'],
    },
    imageFilename: 'the-divine-aura.jpeg',
    imageAlt: 'The Divine Aura 50 ML EDP for Men on luxury marble with saffron and fruits',
    accentColor: '#D4AF37',
    flaconStyle: 'gold-curved',
  },
];

export const BUNDLES: Bundle[] = [
  {
    id: 'bundle-imperial-blossom',
    name: 'Imperial + Blossom Duo',
    subtitle: 'His & Hers Sovereign Pairing',
    includes: [
      'The Imperial Aura (50 ML EDP)',
      'Blossom Aura (50 ML EDP)'
    ],
    regularPrice: 'PKR 7,498',
    offerPrice: 'PKR 6,370',
    regularPriceNum: 7498,
    offerPriceNum: 6370,
    savings: 'PKR 1,128',
    savingsBadge: 'Save PKR 1,128',
    tagline: 'Bold Sovereign Woods paired with Luminous Floral Petals',
    description: 'The ultimate signature duo. Command every room with the rich authority of The Imperial Aura while embracing graceful charm with the soft floral poetry of Blossom Aura.',
    accentColor: '#C5A059',
    images: {
      first: 'the-imperial-aura.jpeg',
      second: 'blossom-aura.jpeg',
      firstAlt: 'The Imperial Aura 50 ML EDP',
      secondAlt: 'Blossom Aura 50 ML EDP',
      firstStyle: 'obsidian-plinth',
      secondStyle: 'crystal-fluted',
    },
  },
  {
    id: 'bundle-alpha-blossom',
    name: 'Alpha + Blossom Duo',
    subtitle: 'Confidence & Delicate Bloom',
    includes: [
      'The Alpha Aura (50 ML EDP)',
      'Blossom Aura (50 ML EDP)'
    ],
    regularPrice: 'PKR 7,798',
    offerPrice: 'PKR 6,630',
    regularPriceNum: 7798,
    offerPriceNum: 6630,
    savings: 'PKR 1,168',
    savingsBadge: 'Save PKR 1,168',
    tagline: 'Crisp Bergamot & Marine Notes meeting Romantic Spring Florals',
    description: 'A striking contrast of magnetic masculine energy and delicate floral softness. Crisp mountain herbs and bergamot meet blooming peonies and warm sandalwood.',
    accentColor: '#8CA679',
    images: {
      first: 'the-alpha-aura.jpeg',
      second: 'blossom-aura.jpeg',
      firstAlt: 'The Alpha Aura 50 ML EDP',
      secondAlt: 'Blossom Aura 50 ML EDP',
      firstStyle: 'geometric-glass',
      secondStyle: 'crystal-fluted',
    },
  },
  {
    id: 'bundle-divine-blossom',
    name: 'Divine + Blossom Duo',
    subtitle: 'Opulent Warmth & Springtime Grace',
    includes: [
      'The Divine Aura (50 ML EDP)',
      'Blossom Aura (50 ML EDP)'
    ],
    regularPrice: 'PKR 7,998',
    offerPrice: 'PKR 6,798',
    regularPriceNum: 7998,
    offerPriceNum: 6798,
    savings: 'PKR 1,199',
    savingsBadge: 'Save PKR 1,199',
    tagline: 'Rare Honeyed Saffron & Oud wrapped with Gentle Peony Rose',
    description: 'An unforgettable olfactory voyage. The rich, deeply sensual warmth of honeyed oud and precious saffron paired with the tender, sunlit radiance of spring garden roses.',
    accentColor: '#D4AF37',
    images: {
      first: 'the-divine-aura.jpeg',
      second: 'blossom-aura.jpeg',
      firstAlt: 'The Divine Aura 50 ML EDP',
      secondAlt: 'Blossom Aura 50 ML EDP',
      firstStyle: 'gold-curved',
      secondStyle: 'crystal-fluted',
    },
  },
];

export const WHY_AURA_POINTS = [
  {
    title: 'Premium Fragrance',
    description: 'High-concentration master formulations utilizing pure essential absolutes, ensuring deep sillage and timeless character.',
    iconName: 'Sparkles',
  },
  {
    title: 'Elegant Presentation',
    description: 'Bespoke heavy-weighted glass flacons, crowned with precision-finished caps and artisanal presentation detailing.',
    iconName: 'Crown',
  },
  {
    title: 'Made to Leave an Impression',
    description: 'Formulated with thoughtful olfactory architecture that projects refined confidence from the first mist to intimate drydown.',
    iconName: 'Flame',
  },
  {
    title: 'A Scent for Every Aura',
    description: 'Distinctive olfactory profiles curated for both women and men, matching every personality, mood, and distinguished occasion.',
    iconName: 'ShieldCheck',
  },
];

export function getWhatsAppOrderUrl(productName?: string): string {
  const message = productName
    ? `Hello Aura HN Scents, I would like to order ${productName}. Please share the order details.`
    : 'Hello Aura HN Scents, I would like to explore your luxury fragrance collection. Please share details.';
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
