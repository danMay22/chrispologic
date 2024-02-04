import PaymentInfo from '@/components/ui/payment-info';

const product = {
  id: '1',
  name: 'Everyday Ruck Snack',
  href: '#',
  price: 220,
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt:
    'Model wearing light green backpack with black canvas straps and front zipper pouch.',
};

export default function Page() {
  return <PaymentInfo product={product} />;
}
