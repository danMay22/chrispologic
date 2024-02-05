import TimelineSection from '@/components/ui/timeline-section';
import { Metadata } from 'next';
import Image from 'next/image';
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
      <a
        className='fixed bottom-4 right-4'
        aria-label='Chat on WhatsApp'
        href='https://wa.link/bakhedlaminiconsultancy'
      >
        <Image
          alt='Chat on WhatsApp'
          src='/images/download.png'
          width={112}
          height={40}
        />
      </a>
    </>
  );
}
