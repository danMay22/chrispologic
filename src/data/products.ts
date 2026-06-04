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
    images: ['/Shirts/WhatsApp Image 2026-06-02 at 20.43.35 (1).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.36 (1).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.36.jpeg'],
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
    images: ['/Shirts/WhatsApp Image 2026-06-02 at 20.43.37 (1).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.37.jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.38.jpeg'],
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
    name: 'Classic Leather Shoes',
    description: 'Premium leather dress shoes with a timeless silhouette. Perfect for any occasion.',
    images: ['/Shoes/WhatsApp Image 2026-06-02 at 20.19.39.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.20.13.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.21.15.jpeg'],
    price: 1200,
    category: 'shoes',
    badge: 'New',
    badgeColor: 'bg-foreground',
    sizes: [
      { id: '7', label: '7', value: '7', stock: 'IN_STOCK' },
      { id: '8', label: '8', value: '8', stock: 'IN_STOCK' },
      { id: '9', label: '9', value: '9', stock: 'IN_STOCK' },
      { id: '10', label: '10', value: '10', stock: 'IN_STOCK' },
      { id: '11', label: '11', value: '11', stock: 'OUT_OF_STOCK' },
    ],
    material: 'Genuine Leather',
    fit: 'True to Size',
    care: 'Polish Regularly',
  },
  {
    id: '4',
    name: 'Executive Suit',
    description: 'Tailored two-piece suit in premium fabric. Sharp lines for the modern man.',
    images: ['/Suits/WhatsApp Image 2026-06-02 at 20.33.48.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.37.28.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.37.39.jpeg'],
    price: 2500,
    category: 'suits',
    badge: 'New',
    badgeColor: 'bg-foreground',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'OUT_OF_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Premium Wool Blend',
    fit: 'Slim Fit',
    care: 'Dry Clean Only',
  },
  {
    id: '5',
    name: 'Formal Oxford Shoes',
    description: 'Handcrafted oxford shoes with a polished finish. Elevate your formal look.',
    images: ['/Shoes/WhatsApp Image 2026-06-02 at 20.21.25.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.21.59.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.22.17.jpeg'],
    price: 1400,
    salePrice: 1100,
    category: 'shoes',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: '7', label: '7', value: '7', stock: 'IN_STOCK' },
      { id: '8', label: '8', value: '8', stock: 'IN_STOCK' },
      { id: '9', label: '9', value: '9', stock: 'IN_STOCK' },
      { id: '10', label: '10', value: '10', stock: 'IN_STOCK' },
    ],
    material: 'Genuine Leather',
    fit: 'True to Size',
    care: 'Polish Regularly',
  },
  {
    id: '6',
    name: 'Slim Fit Suit',
    description: 'Modern slim fit suit with a sleek design. Confidence in every stitch.',
    images: ['/Suits/WhatsApp Image 2026-06-02 at 20.39.16.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.25 (1).jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.25.jpeg'],
    price: 2800,
    salePrice: 2200,
    category: 'suits',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'OUT_OF_STOCK' },
    ],
    material: 'Italian Wool',
    fit: 'Slim Fit',
    care: 'Dry Clean Only',
  },
  {
    id: '7',
    name: 'Chrispology Graphic Tee',
    description: 'Statement graphic tee with bold Chrispology design. Wear your faith.',
    images: ['/Shirts/WhatsApp Image 2026-06-02 at 20.43.40 (1).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.40.jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.47 (2).jpeg'],
    price: 380,
    category: 'shirts',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: '100% Cotton',
    fit: 'Regular',
    care: 'Machine Wash Cold',
  },
  {
    id: '8',
    name: 'Casual Loafers',
    description: 'Comfortable slip-on loafers for a relaxed yet polished look.',
    images: ['/Shoes/WhatsApp Image 2026-06-02 at 20.22.36.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.22.49.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.23.12.jpeg'],
    price: 950,
    category: 'shoes',
    badge: 'Limited',
    badgeColor: 'bg-amber-500',
    sizes: [
      { id: '7', label: '7', value: '7', stock: 'IN_STOCK' },
      { id: '8', label: '8', value: '8', stock: 'IN_STOCK' },
      { id: '9', label: '9', value: '9', stock: 'OUT_OF_STOCK' },
      { id: '10', label: '10', value: '10', stock: 'IN_STOCK' },
    ],
    material: 'Suede Leather',
    fit: 'True to Size',
    care: 'Brush Clean',
  },
  {
    id: '9',
    name: 'Three-Piece Suit',
    description: 'Complete three-piece suit with vest. The ultimate statement of elegance.',
    images: ['/Suits/WhatsApp Image 2026-06-02 at 20.43.26.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.28.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.31.jpeg'],
    price: 3500,
    category: 'suits',
    badge: 'Limited',
    badgeColor: 'bg-amber-500',
    sizes: [
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Premium Wool',
    fit: 'Tailored',
    care: 'Dry Clean Only',
  },
  {
    id: '10',
    name: 'Premium Polo Shirt',
    description: 'Elevated polo shirt with subtle Chrispology branding. Smart casual perfected.',
    images: ['/Shirts/WhatsApp Image 2026-06-02 at 20.43.48 (1).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.48 (2).jpeg', '/Shirts/WhatsApp Image 2026-06-02 at 20.43.48.jpeg'],
    price: 520,
    category: 'shirts',
    badge: 'New',
    badgeColor: 'bg-foreground',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Pique Cotton',
    fit: 'Regular',
    care: 'Machine Wash Cold',
  },
  {
    id: '11',
    name: 'Derby Dress Shoes',
    description: 'Versatile derby shoes that transition from office to evening seamlessly.',
    images: ['/Shoes/WhatsApp Image 2026-06-02 at 20.23.54.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.24.36.jpeg', '/Shoes/WhatsApp Image 2026-06-02 at 20.25.17.jpeg'],
    price: 1300,
    category: 'shoes',
    sizes: [
      { id: '7', label: '7', value: '7', stock: 'IN_STOCK' },
      { id: '8', label: '8', value: '8', stock: 'IN_STOCK' },
      { id: '9', label: '9', value: '9', stock: 'IN_STOCK' },
      { id: '10', label: '10', value: '10', stock: 'IN_STOCK' },
      { id: '11', label: '11', value: '11', stock: 'IN_STOCK' },
    ],
    material: 'Full Grain Leather',
    fit: 'True to Size',
    care: 'Condition & Polish',
  },
  {
    id: '12',
    name: 'Business Suit',
    description: 'Professional business suit for the boardroom. Command respect.',
    images: ['/Suits/WhatsApp Image 2026-06-02 at 20.43.32 (1).jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.32.jpeg', '/Suits/WhatsApp Image 2026-06-02 at 20.43.33 (1).jpeg'],
    price: 2200,
    salePrice: 1800,
    category: 'suits',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    sizes: [
      { id: 's', label: 'S', value: 'S', stock: 'IN_STOCK' },
      { id: 'm', label: 'M', value: 'M', stock: 'IN_STOCK' },
      { id: 'l', label: 'L', value: 'L', stock: 'IN_STOCK' },
      { id: 'xl', label: 'XL', value: 'XL', stock: 'IN_STOCK' },
    ],
    material: 'Polyester Blend',
    fit: 'Regular',
    care: 'Dry Clean Only',
  },
];
