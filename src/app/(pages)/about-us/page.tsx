import { Metadata } from 'next';
import AboutUsDescriptionSection from './components/about-description-section';
import BannerSection from './components/banner-section';
import CTASection from './components/cta-section';
import PublicSpeaker from './components/speaker';
import TestimonySection from './components/testimony-section';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of the app',
};

export default function Page() {
  return (
    <>
      <BannerSection />

      <AboutUsDescriptionSection />

      <TestimonySection />

      <PublicSpeaker />

      <CTASection />
    </>
  );
}
