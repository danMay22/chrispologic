import PaymentInfo, { Product } from '@/components/ui/payment-info';
import { BOOKS } from '@/constants/books';

export default function Page({ params }: { params: { id: string } }) {
  const product = BOOKS.map<Product>((book) => ({
    id: book.id,
    name: book.name,
    price: book.price,
    description: book.description,
    imageSrc: book.cover,
    imageAlt: book.description,
  })).find((book) => book.id === params.id);

  return <PaymentInfo product={product!} />;
}
