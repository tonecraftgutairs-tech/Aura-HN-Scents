import { Product, BrandConfig } from '../types';

export const BRAND_CONFIG: BrandConfig = {
  name: 'Aura HN Scents',
  tagline: 'Fragrance That Speaks',
  headline: 'A Signature of Your Aura.',
  subheadline: 'Discover refined fragrances crafted to leave a lasting impression.',
  whatsappNumber: '923337320295',
  whatsappFormatted: '+92 333 7320295',
  socials: {
    instagram: 'https://www.instagram.com/aurahnscents_official?stkn=ZHp3MGdpcnMybHFp&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1CLQjH4xLk/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@aurahnscents_official?_r=1&_t=ZS-9A2DtvP3GTt',
  },
};

export const BRAND_ASSETS = {
  logo: {
    filename: 'WhatsApp Image 2026-10-01 at 1.27.56 PM.jpeg',
    alt: 'Aura HN Scents Official Logo - Fragrance That Speaks',
  },
  lifestyle: {
    filename: 'WhatsApp Image 2026-10-01 at 1.31.23 PM.jpeg',
    alt: 'Aura in Motion - Confidence In Every Spray, Fragrances That Speaks',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'blossom-aura',
    name: 'Blossom Aura',
    category: 'Women',
    volume: '50ml',
    price: 'PKR 4,500',
    shortDesc: 'A captivating bouquet of blossoming petals, delicate pink rose, and crisp citrus accents warmed by gentle spice.',
    fullDesc: 'Blossom Aura is an ode to refined femininity and luminous confidence. Crafted with an exquisite distillation of velvety garden roses, crisp sunlit lime, and blooming white jasmine, it settles into an intimate aura of sweet cinnamon warmth and powdery musks.',
    notes: {
      top: ['Fresh Cut Lime', 'Pink Peppercorn', 'Dewy Green Accords'],
      heart: ['Bulgarian Pink Rose', 'Star Jasmine', 'French Lavender'],
      base: ['Warm Cinnamon Bark', 'Creamy Amber', 'Velvet White Musk'],
    },
    imageFilename: 'WhatsApp Image 2026-10-01 at 2.51.33 PM.jpeg',
    imageAlt: 'Blossom Aura 50ml Eau de Parfum for Women with floral and citrus accords',
    accentColor: '#8CA679',
    flaconStyle: 'crystal-fluted',
  },
  {
    id: 'the-divine-aura',
    name: 'The Divine Aura',
    category: 'Men',
    volume: '50ml',
    price: 'PKR 5,500',
    shortDesc: 'An opulent fusion of vibrant citrus, rare saffron, rich cinnamon, and golden amber with sweet berry undertones.',
    fullDesc: 'The Divine Aura is a majestic and radiant elixir tailored for the sophisticated modern gentleman. A burst of vibrant mandarin orange and tart raspberries gives way to the kingly allure of pure saffron threads and toasted cinnamon, wrapped in a lingering shroud of smoked golden amber.',
    notes: {
      top: ['Sweet Mandarin', 'Juicy Raspberry', 'Calabrian Bergamot'],
      heart: ['Precious Saffron', 'Ceylon Cinnamon Sticks', 'Neroli Blossoms'],
      base: ['Golden Ambergris', 'Smoked Cedarwood', 'Warm Vanilla Resins'],
    },
    imageFilename: 'WhatsApp Image 2026-10-01 at 2.51.33 PM (1).jpeg',
    imageAlt: 'The Divine Aura 50ml Eau de Parfum for Men on luxury marble with saffron and fruits',
    accentColor: '#D4AF37',
    flaconStyle: 'gold-curved',
  },
  {
    id: 'the-alpha-aura',
    name: 'The Alpha Aura',
    category: 'Men',
    volume: '50ml',
    price: 'PKR 4,800',
    shortDesc: 'A commanding blend of crisp bergamot, aromatic lavender, sharp black pepper, and smooth, alluring vanilla.',
    fullDesc: 'The Alpha Aura commands attention effortlessly. Engineered for natural leaders and men of substance, it merges the striking chill of bergamot and cracked black pepper with aromatic wild lavender, resting upon a seductive foundation of dark bourbon vanilla and earthy woods.',
    notes: {
      top: ['Crushed Bergamot', 'Kaffir Lime', 'Black Peppercorn'],
      heart: ['Aromatic Lavender', 'Wild Mountain Rosemary', 'White Petals'],
      base: ['Bourbon Vanilla Pod', 'Cinnamon Bark', 'Sensual Vetiver Woods'],
    },
    imageFilename: 'WhatsApp Image 2026-10-01 at 2.51.34 PM.jpeg',
    imageAlt: 'The Alpha Aura 50ml Eau de Parfum for Men on stone plinth with vanilla and lavender',
    accentColor: '#C5A059',
    flaconStyle: 'geometric-glass',
  },
  {
    id: 'the-imperial-aura',
    name: 'The Imperial Aura',
    category: 'Men',
    volume: '50ml',
    price: 'Contact for Price',
    isContactPrice: true,
    shortDesc: 'A sovereign, enigmatic nocturnal composition of dark woods, smoky vanilla, and zesty citrus accords.',
    fullDesc: 'The Imperial Aura represents the pinnacle of luxury perfumery. Sealed in an obsidian flacon, this rare masterwork captivates with mysterious dark oakwood, Tahitian black vanilla orchid, luminous lime zest, and subtle hints of nocturnal florals designed for unforgettable evenings.',
    notes: {
      top: ['Zesty Key Lime', 'Primofiore Lemon', 'Whole Peppercorns'],
      heart: ['Midnight Rose Petal', 'Wild Lichen Moss', 'Star Jasmine'],
      base: ['Aged Sovereign Oak', 'Tahitian Black Vanilla', 'Precious Dark Resins'],
    },
    imageFilename: 'WhatsApp Image 2026-10-01 at 2.51.34 PM (1).jpeg',
    imageAlt: 'The Imperial Aura 50ml Luxury Flacon for Men atop midnight podium with vanilla and citrus',
    accentColor: '#7A6233',
    flaconStyle: 'obsidian-plinth',
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
