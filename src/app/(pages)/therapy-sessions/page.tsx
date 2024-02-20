import { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from './components/contact-section';
import LandingSection from './components/marriage-tour-section';

export const metadata: Metadata = {
  title: 'Therapy Page',
  description: 'This is the therapy page of the app',
};

export default function Page() {
  return (
    <>
      <LandingSection />

      <>
        <div className='bg-background'>
          <div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
            {/* Details section */}
            <section aria-labelledby='details-heading'>
              <div className='flex flex-col items-center text-center'>
                <h2
                  id='details-heading'
                  className='text-4xl font-bold tracking-tight text-foreground sm:text-4xl'
                >
                  We offer:
                </h2>
                <p className='mt-1 text-base leading-7 text-muted-foreground'>
                  Marriage therapy, Relationship Counselling, Family therapy
                  (reconciliation), Premarital Counselling, Children&apos;s
                  therapy, Grief Counselling, Trauma Counselling, Life Coaching,
                  Divorce Counselling, Career Guidance
                </p>
              </div>

              <div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
                <div>
                  <div className='relative h-[48rem]  aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                    <Image
                      src='/images/therapy-sessions/therapy-session-1.jpeg'
                      className='h-full w-full object-cover object-center'
                      alt='therapy session image'
                      fill
                    />
                  </div>
                  <p className='mt-8 text-base text-muted-foreground'>
                    Premarital Counselling (3 sessions Program)
                    <br />
                    R5 000
                  </p>
                </div>
                <div>
                  <div className='relative h-[48rem] aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                    <Image
                      src='/images/therapy-sessions/therapy-session-2.jpeg'
                      className='h-full w-full object-cover object-center'
                      alt='therapy session image'
                      fill
                    />
                  </div>
                  <p className='mt-8 text-base text-muted-foreground'>
                    Marriage Therapy Package
                    <br />
                    R4 400
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>

      <ContactSection />
    </>
  );
}
