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
    </>
  );
}
