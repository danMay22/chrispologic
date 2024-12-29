import { CoverDemo } from '@/components/demo/cover-demo';
import { Metadata } from 'next';
import JoinUs from './components/Luke';
import Announce from './components/church-announcement';
import HeroSection from './components/hero-section';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of the app',
};

export default function Page() {
  return (
    <>
      <h1 className='text-5xl md:text-5xl md:text-center font-meduim flex items-center gap-x-2 mx-auto justify-center'>
        <CoverDemo />
      </h1>
      <HeroSection />
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
      <Announce />
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
      <div className='bg-white py-10 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <JoinUs />
        </div>
      </div>
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
    </>
  );
}
