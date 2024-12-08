import TimelineSection from '@/components/ui/timeline-section';
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
      <TimelineSection />

      <HeroSection />

      <div className='bg-[url(/photo-1561448817-bb90ab1327b5-960w.jpeg)] inset-0 bg-cover bg-center py-5'>
        <div className='w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-15 '>
          <h1 className='text-7xl font-bold text-red-800 '>Join us</h1>
          <p className='mt-5 text-white'>
            We are delighted to introduce you to our multicultural, exciting,
            and deeply spiritual family.
            <br /> A church for all those who seek empowerment, tools, guidance,
            love, and support in their journey to fulfill God's purpose.
            <br /> An inclusive church where all are welcome to fellowship.
          </p>
          <a href='/services' className=''>
            <button className=' mt-5 bg-primary py-2 px-5 rounded-xl text-white'>
              More Info
            </button>
          </a>
        </div>
      </div>
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
