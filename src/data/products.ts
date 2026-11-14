// Single source of truth for products. Prices are placeholders until the
// family decides them. `price` is in cents; null means "not set yet".

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  price: number | null;
  photo: string; // placeholder text until real photos exist
};

export type ComingSoon = {
  name: string;
  blurb: string;
  photo: string;
  tint: string;
};

export const signatureProducts: Product[] = [
  {
    slug: 'signature-balm',
    name: 'The Balm',
    blurb: 'Our everyday natural tinted lip balm. Soft color from alkanet root.',
    description:
      'Our signature balm: beeswax, shea butter and sweet almond oil, tinted with alkanet root and kept fresh with vitamin E. Made in small batches.',
    price: null,
    photo: 'Photo: single kraft tube',
  },
  {
    slug: 'the-trio',
    name: 'The Trio',
    blurb: 'Three balms. One for you, one for the car, one to share.',
    description:
      'Three signature balms tied with twine. Keep one in your bag, one in the car and give one away.',
    price: null,
    photo: 'Photo: three tubes tied with twine',
  },
  {
    slug: 'gift-set',
    name: 'The Gift Set',
    blurb: 'Two balms and a handwritten note in a kraft gift box.',
    description:
      'Two signature balms and a handwritten note card, packed in a kraft gift box.',
    price: null,
    photo: 'Photo: gift box with note card',
  },
];

export const comingSoon: ComingSoon[] = [
  { name: 'Whipped body butter', blurb: 'Shea and cocoa butter whipped light for soft skin.', photo: 'Photo: glass jar of body butter', tint: '#B7C6A8' },
  { name: 'Sugar lip scrub', blurb: 'A gentle scrub to pair with the signature balm.', photo: 'Photo: small tin of lip scrub', tint: '#F4EEE2' },
  { name: 'Nourishing face balm', blurb: 'A water-free balm of plant butters and oils for soft, glowing skin.', photo: 'Photo: small glass jar of face balm', tint: '#E8C9A0' },
  { name: 'Hand and cuticle balm', blurb: 'Rich balm for hands that do a lot.', photo: 'Photo: kraft tin of hand balm', tint: '#D6E0CC' },
  { name: 'Moisturizing face cream', blurb: 'A light daily cream for soft, comfortable skin.', photo: 'Photo: frosted jar of face cream', tint: '#F4EEE2' },
  { name: 'Hydrating body lotion', blurb: 'An everyday lotion that soaks in fast.', photo: 'Photo: pump bottle of body lotion', tint: '#B7C6A8' },
];

export const ingredients = [
  { name: 'Beeswax', why: 'Holds the balm together and seals in moisture.' },
  { name: 'Shea butter', why: 'Rich and creamy, for soft lips.' },
  { name: 'Sweet almond oil', why: 'Light oil that glides on smooth.' },
  { name: 'Alkanet root', why: 'A plant that gives a soft natural tint.' },
  { name: 'Vitamin E', why: 'Keeps the oils fresh.' },
];

export const badges = ['100% natural', 'No synthetic dyes', 'No petroleum', 'Small batch', 'Made in New Jersey'];

export const allergenNote = 'Contains tree nuts (sweet almond, shea).';

export function formatPrice(cents: number | null): string {
  return cents === null ? 'Price coming soon' : `$${(cents / 100).toFixed(2)}`;
}
