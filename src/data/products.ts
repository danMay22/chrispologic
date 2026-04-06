export type StockStatus = 'IN_STOCK' | 'OUT_OF_STOCK';

export type SizeOption = {
  id: string;
  label: string;
  value: string;
  stock: StockStatus;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  salePrice?: number;
  category: string;
  badge?: string;
  badgeColor?: string;
  sizes: SizeOption[];
  material?: string;
  fit?: string;
  care?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Faith Over Fear Tee',
    description: 'Bold statement tee crafted from 100% premium cotton in an oversized fit. A daily reminder of what you stand on.',
    images: ['/pexels-jibarofoto-2014773.jpg', '/pexels-jibarofoto-2014774.jpg', '/pexels-matthardy-2602543.jpg'],
    price: 450,
    salePrice: 350,
    category: 'shirts',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'OUT_OF_STOCK' },
    ],
    material: '100% Premium Cotton',
    fit: 'Oversized',
    care: 'Machine Wash Cold',
  },
  {
    id: '2',
    name: 'Grace Hoodie',
    description: 'Heavy-weight fleece hoodie with embroidered Chrispology logo. Available in black and cream.',
    images: ['/pexels-jibarofoto-2014774.jpg', '/pexels-jibarofoto-2014773.jpg', '/pexels-david-bartus-43782-915674.jpg'],
    price: 850,
    category: 'shirts',
    badge: 'New',
    badgeColor: 'bg-foreground',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'OUT_OF_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Heavyweight Fleece',
    fit: 'Regular',
    care: 'Machine Wash Warm',
  },
  {
    id: '3',
    name: 'Chrispology Cap',
    description: 'Structured 6-panel cap with signature Chrispology wordmark. One size fits all.',
    images: ['/pexels-jibarofoto-2351722.jpg', '/pexels-nikko-tan-12261-133699.jpg'],
    price: 320,
    category: 'accessories',
    badge: 'Limited',
    badgeColor: 'bg-amber-500',
    sizes: [{ id: 'one', label: 'One Size', value: 'One Size', stock: 'IN_STOCK' }],
    material: 'Structured Cotton Twill',
    fit: 'One Size',
    care: 'Spot Clean Only',
  },
  {
    id: '4',
    name: 'Blessed Cargo Pants',
    description: 'Relaxed-fit cargo pants with subtle scripture detail on the left leg.',
    images: ['/pexels-matthardy-2602543.jpg', '/pexels-jibarofoto-2014773.jpg'],
    price: 750,
    salePrice: 600,
    category: 'bottoms',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Cotton Ripstop',
    fit: 'Relaxed',
    care: 'Machine Wash Cold',
  },
  {
    id: '5',
    name: 'Identity Jacket',
    description: 'Lightweight bomber jacket. Wear your identity on your sleeve — literally.',
    images: ['/pexels-david-bartus-43782-915674.jpg', '/pexels-brett-sayles-3633711.jpg'],
    price: 1100,
    category: 'suits',
    badge: 'New',
    badgeColor: 'bg-foreground',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'OUT_OF_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Nylon Shell',
    fit: 'Regular',
    care: 'Dry Clean Only',
  },
  {
    id: '6',
    name: 'Anointed Tote',
    description: 'Canvas tote with screen-printed Chrispology mark. Carry your purpose.',
    images: ['/pexels-brett-sayles-3633711.jpg', '/pexels-yungsaac-2305084.jpg'],
    price: 280,
    category: 'bags',
    sizes: [{ id: 'one', label: 'One Size', value: 'One Size', stock: 'IN_STOCK' }],
    material: 'Heavy Canvas',
    fit: 'One Size',
    care: 'Spot Clean',
  },
  {
    id: '7',
    name: 'Chosen Wristband',
    description: 'Silicone wristband. A daily reminder of your identity.',
    images: ['/pexels-yungsaac-2305084.jpg', '/pexels-nikko-tan-12261-133699.jpg'],
    price: 80,
    category: 'accessories',
    badge: 'Limited',
    badgeColor: 'bg-amber-500',
    sizes: [{ id: 'one', label: 'One Size', value: 'One Size', stock: 'IN_STOCK' }],
    material: 'Silicone',
    fit: 'One Size',
    care: 'Wipe Clean',
  },
  {
    id: '8',
    name: 'Redeemed Shorts',
    description: 'Mesh athletic shorts with embroidered back pocket detail.',
    images: ['/pexels-nikko-tan-12261-133699.jpg', '/pexels-matthardy-2602543.jpg'],
    price: 420,
    salePrice: 320,
    category: 'bottoms',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'OUT_OF_STOCK' },
    ],
    material: 'Mesh Polyester',
    fit: 'Athletic',
    care: 'Machine Wash Cold',
  },
];
