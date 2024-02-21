import { Metadata } from 'next';
import Image from 'next/image';
import BootCampSection from './components/bootcamp-section';
import MarriageTourSection from './components/marriage-tour-section';
export const metadata: Metadata = {
  title: 'Seminars Page',
  description: 'This is the seminars page of the app',
};

export default function Page() {
  return (
    <>
      <MarriageTourSection />
      <BootCampSection />
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
