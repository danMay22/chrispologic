import PaymentInfo from '@/components/ui/payment-info';

const product = {
  id: '1',
  name: 'The Recharge Your Marriage 2024 Tour',
  href: '#',
  price: 1500,
  description: '',
  imageSrc: '/WhatsApp Image 2024-01-31 at 08.52.12_b3cf86a1.jpg',
  imageAlt: '',
};

export default function Page() {
  return <PaymentInfo product={product} />;
}
