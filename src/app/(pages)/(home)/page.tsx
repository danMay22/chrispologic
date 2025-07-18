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
      <div className='bg-[url(/pexels-brett-sayles-3633711.jpg)]'>
        <CoverDemo />
      </div>
      <HeroSection />
      <Announce />
      <MemberFeature />
      <JoinUs />
    </>
  );
}
