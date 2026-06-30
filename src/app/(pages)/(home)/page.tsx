import { Metadata } from 'next';
import HeroSection from './components/hero-section';
import NewArrivals from './components/new-arrivals';
import CategoriesAndProducts from './components/categories-products';

export const metadata: Metadata = {
  title: 'Pax Clothing — Premium Menswear',
  description: 'Shop the latest Pax Clothing collection. Suits, shoes, and shirts for the modern gentleman.',
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <CategoriesAndProducts />
    </>
  );
}
