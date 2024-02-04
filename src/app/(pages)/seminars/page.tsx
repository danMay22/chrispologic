import { Metadata } from 'next';
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
    </>
  );
}
