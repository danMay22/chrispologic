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
      <div className='bg-[linear-gradient(#fbf7ec,#e2f1ee)]'>
        <CoverDemo />
      </div>
      <HeroSection />
      <Announce />
      <MemberFeature />
      <JoinUs />
    </>
  );
}
