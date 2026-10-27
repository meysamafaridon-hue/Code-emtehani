export type ProductColor = {
  name: string
  hex: string
}

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  compareAt?: number
  category: 'T-Shirts' | 'Hoodies' | 'Sweatshirts' | 'Long Sleeves' | 'Accessories'
  fit: string
  badge?: 'NEW' | 'BEST SELLER' | 'LIMITED'
  description: string
  fabric: string
  print: string
  image: string
  imageBack?: string
  colors: ProductColor[]
  sizes: string[]
  isNew?: boolean
  isBestSeller?: boolean
}

// Note: product imagery uses picsum.photos seeds as stand-in photography.
// Replace `image` / `imageBack` with real licensed product photography before launch.
const img = (seed: string, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const products: Product[] = [
  {
    id: '1',
    slug: 'chaos-club-hoodie',
    name: 'CHAOS CLUB HOODIE',
    price: 49.99,
    compareAt: 64.99,
    category: 'Hoodies',
    fit: 'Oversized premium hoodie',
    badge: 'NEW',
    isNew: true,
    description:
      'Black oversized heavyweight hoodie with a white globe illustration, bold back typography and acid-yellow graphic marks. Built for the streets, made to last.',
    fabric: '400gsm brushed-back cotton fleece, ribbed cuffs and hem.',
    print: 'Direct-to-garment water-based ink, cured for durability.',
    image: img('mci-chaos-front'),
    imageBack: img('mci-chaos-back'),
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'Charcoal', hex: '#3a3a3a' },
      { name: 'Olive', hex: '#5b5b3a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    slug: 'good-days-tee',
    name: 'GOOD DAYS TEE',
    price: 32.99,
    category: 'T-Shirts',
    fit: 'Oversized boxy t-shirt',
    badge: 'BEST SELLER',
    isBestSeller: true,
    description:
      'Off-white oversized tee with a large vintage-inspired illustrated graphic on the back. Soft hand-feel, structured drape, and a graphic that speaks for itself.',
    fabric: '240gsm combed ring-spun cotton, garment-washed.',
    print: 'DTG full-color print, soft touch.',
    image: img('mci-gooddays-front'),
    imageBack: img('mci-gooddays-back'),
    colors: [
      { name: 'Off-White', hex: '#F3F2EE' },
      { name: 'Washed Black', hex: '#2a2a2a' },
      { name: 'Sage', hex: '#9aa48a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    slug: 'mindset-tee',
    name: 'MINDSET TEE',
    price: 29.99,
    category: 'T-Shirts',
    fit: 'Premium oversized t-shirt',
    badge: 'NEW',
    isNew: true,
    description:
      'Black oversized tee featuring a monochrome portrait graphic and bold white typography. A statement piece with a raw, editorial feel.',
    fabric: '230gsm combed cotton, pre-shrunk.',
    print: 'DTG print with a matte finish.',
    image: img('mci-mindset-front'),
    imageBack: img('mci-mindset-back'),
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#e8e4d8' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    slug: 'feel-the-moment-hoodie',
    name: 'FEEL THE MOMENT HOODIE',
    price: 54.99,
    compareAt: 69.99,
    category: 'Hoodies',
    fit: 'Heavyweight oversized hoodie',
    badge: 'LIMITED',
    description:
      'Cream-colored oversized hoodie with a large vintage-inspired back graphic in purple, black and white. A limited run, made to order.',
    fabric: '420gsm cotton-poly blend fleece, double-lined hood.',
    print: 'DTG print, full back coverage.',
    image: img('mci-feel-front'),
    imageBack: img('mci-feel-back'),
    colors: [
      { name: 'Cream', hex: '#e8e4d8' },
      { name: 'Washed Black', hex: '#2a2a2a' },
      { name: 'Grey', hex: '#999999' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '5',
    slug: 'static-long-sleeve',
    name: 'STATIC LONG SLEEVE',
    price: 38.99,
    category: 'Long Sleeves',
    fit: 'Boxy long sleeve tee',
    badge: 'NEW',
    isNew: true,
    description:
      'Black long sleeve with a distorted static graphic running down the sleeve and a small chest hit. Underground, raw, unmistakably MCI.',
    fabric: '220gsm combed cotton.',
    print: 'DTG sleeve print.',
    image: img('mci-static-front'),
    imageBack: img('mci-static-back'),
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'Off-White', hex: '#F3F2EE' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    slug: 'no-rules-crewneck',
    name: 'NO RULES CREWNECK',
    price: 44.99,
    category: 'Sweatshirts',
    fit: 'Heavyweight crewneck sweatshirt',
    badge: 'BEST SELLER',
    isBestSeller: true,
    description:
      'Charcoal crewneck with a bold acid-yellow typographic chest print. Minimal, heavy, and built to be worn hard.',
    fabric: '400gsm brushed fleece.',
    print: 'DTG front print.',
    image: img('mci-norules-front'),
    imageBack: img('mci-norules-back'),
    colors: [
      { name: 'Charcoal', hex: '#3a3a3a' },
      { name: 'Black', hex: '#080808' },
      { name: 'Cream', hex: '#e8e4d8' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '7',
    slug: 'mci-cap',
    name: 'MCI MARCT CAP',
    price: 24.99,
    category: 'Accessories',
    fit: 'Structured 6-panel cap',
    description:
      'Black structured 6-panel cap with an embroidered MCI MARCT monogram. Adjustable strap, one size.',
    fabric: 'Cotton twill, embroidered monogram.',
    print: 'Embroidered.',
    image: img('mci-cap'),
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'Cream', hex: '#e8e4d8' },
    ],
    sizes: ['ONE SIZE'],
  },
  {
    id: '8',
    slug: 'manifesto-tee',
    name: 'MANIFESTO TEE',
    price: 27.99,
    category: 'T-Shirts',
    fit: 'Relaxed premium tee',
    badge: 'BEST SELLER',
    isBestSeller: true,
    description:
      'White tee with the MCI MARCT manifesto printed in tight black type across the chest and back. The fundamentals, on fabric.',
    fabric: '230gsm combed cotton.',
    print: 'DTG print.',
    image: img('mci-manifesto-front'),
    imageBack: img('mci-manifesto-back'),
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#080808' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
]

export const collections = [
  { slug: 'after-hours', name: 'AFTER HOURS', description: 'Night-mode essentials in black on black.' },
  { slug: 'yellow-tape', name: 'YELLOW TAPE', description: 'Acid-yellow graphics for the bold.' },
  { slug: 'the-archive', name: 'THE ARCHIVE', description: 'Reissues of our first drops, made to order.' },
  { slug: 'custom-series', name: 'CUSTOM SERIES', description: 'Designed by you, printed for you.' },
]

export const shopCategories = [
  'All Products',
  'T-Shirts',
  'Hoodies',
  'Sweatshirts',
  'Long Sleeves',
  'Accessories',
  'New Arrivals',
  'Best Sellers',
]

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)

export const filterProducts = (filter: string): Product[] => {
  switch (filter) {
    case 'New Arrivals':
      return products.filter((p) => p.isNew)
    case 'Best Sellers':
      return products.filter((p) => p.isBestSeller)
    case 'All Products':
      return products
    default:
      return products.filter((p) => p.category === filter)
  }
}

export const formatPrice = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
