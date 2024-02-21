import PaymentInfo from '@/components/ui/payment-info';

const product = {
  id: '1',
  name: 'Bootcamp',
  href: '#',
  price: 9950,
  description: '',
  imageSrc: '/WhatsApp Image 2024-01-19 at 14.01.08_ebab4b81.jpg',
  imageAlt: '',
};

export default function Page() {
  return <PaymentInfo product={product} />;
}
