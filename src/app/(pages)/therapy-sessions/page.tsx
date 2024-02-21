import { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from './components/contact-section';
import LandingSection from './components/marriage-tour-section';
const timeline = [
  {
    name: 'Office Walk in: ',
    description: 'You can book a session via our website Whatsapp button',
    date: 'R1 300',
    price: 'R1 600',
  },
  {
    name: 'Online sessions: ',
    description: 'You can book a session via our website Whatsapp button',
    date: 'R1 000',
    price: 'R1 200',
  },
];
export const metadata: Metadata = {
  title: 'Therapy Page',
  description: 'This is the therapy page of the app',
};

export default function Page() {
  return (
    <>
      <LandingSection />

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

            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8'>
              <div className='mt-20 mb-20 mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4'>
                  <div>
                    <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                      Working Hours:
                    </p>
                    <p className='mt-1 text-base leading-7 text-gray-600'>
                      Tuesday-Friday: 9:00AM-5:00PM
                      <br />
                      Saturday: 9:00AM-3:00PM
                    </p>
                  </div>
                  <h1 className='mt-6 text-3xl font-light leading-8 tracking-tight'>
                    Therapy Session{' '}
                  </h1>
                  {timeline.map((item) => (
                    <div key={item.name}>
                      <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                        {item.name}
                      </p>
                      <p className='mt-1 text-base leading-7 text-gray-600'>
                        Individual's Session: {item.date}
                      </p>
                      <p className='mt-1 text-base leading-7 text-gray-600'>
                        Couple's Session: {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className='relative h-[48rem]  aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                  <Image
                    src='/images/therapy-sessions/therapy-session-1.jpeg'
                    className='h-full w-full object-contain object-center'
                    alt='therapy session image'
                    layout='fill'
                  />
                </div>
                <p className='mt-2 text-base text-muted-foreground'>
                  Premarital Counselling (3 sessions Program)
                  <br />
                  R5 000
                </p>
              </div>
              <div>
                <div className='relative h-[48rem] aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                  <Image
                    src='/images/therapy-sessions/therapy-session-2.jpeg'
                    className='h-full w-full object-contain object-center'
                    alt='therapy session image'
                    layout='fill'
                  />
                </div>
                <p className='mt-2 text-base text-muted-foreground'>
                  Marriage Therapy Package
                  <br />
                  R4 400
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ContactSection />
      <a
        className='fixed bottom-4 right-4'
        aria-label='Chat on WhatsApp'
        href='https://wa.link/bakhedlaminiconsultancy'
      >
        <Image
          alt='Chat on WhatsApp'
          src='/images/download.png'
          width={112}
          height={40}
        />
      </a>
    </>
  );
}
