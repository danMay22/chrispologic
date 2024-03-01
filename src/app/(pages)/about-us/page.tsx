import Team from '@/components/ui/team';
import { Metadata } from 'next';
import AboutUsDescriptionSection from './components/about-description-section';
import BannerSection from './components/banner-section';
import ChurchServices from './components/church';
import { default as Note } from './components/mission';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of the app',
};

export default function Page() {
  return (
    <>
      <BannerSection />

      <AboutUsDescriptionSection />

      <Team />

      <Note />

      <ChurchServices />
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
