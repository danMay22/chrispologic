import { Metadata } from 'next';
import HeroSection from './components/hero-section';
import NewArrivals from './components/new-arrivals';
import CategoriesAndProducts from './components/categories-products';

export const metadata: Metadata = {
  title: 'Chrispology — Faith-Inspired Streetwear',
  description: 'Shop the latest Chrispology collection. Faith-inspired streetwear crafted for those who carry their identity boldly.',
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
