import { CoverDemo } from '@/components/demo/cover-demo';
import { Metadata } from 'next';
import JoinUs from './components/Luke';
import Announce from './components/church-announcement';
import HeroSection from './components/hero-section';
import MemberFeature from './components/member';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of the app',
};

export default function Page() {
  return (
    <>
      <h1 className='text-5xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center'>
        <CoverDemo />
      </h1>
      <div className='bg-white py-5 sm:py-11' />
      <HeroSection />
      <Announce />
      <MemberFeature />
      <JoinUs />
    </>
  );
}
