import TimelineSection from '@/components/ui/timeline-section';
import { Metadata } from 'next';
import BooksSection from './components/books-section';
import HeroSection from './components/hero-section';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of the app',
};

export default function Page() {
  return (
    <>
      <TimelineSection />

      <HeroSection />

      <BooksSection />
    </>
  );
}
