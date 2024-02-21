import { ChurchIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className='bg-background py-12 sm:py-32'>
      <div className='relative isolate'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl py-24 sm:py-40'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                Book a session
              </h2>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
              <div className='flex gap-x-4 rounded-xl bg-foreground/5 p-6 ring-1 ring-inset ring-foreground/10'>
                <PhoneIcon
                  className='h-7 w-5 flex-none text-foreground'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-foreground'>Cell</h3>
                  <p className='mt-2 text-foreground/60'>
                    +27 (73) 049-2342
                    <br />
                    <a
                      className='text-foreground hover:text-foreground/60'
                      href='mailto:sales@example.com'
                    >
                      info@bakhedlamini.co.za
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex gap-x-4 rounded-xl bg-foreground/5 p-6 ring-1 ring-inset ring-foreground/10'>
                <ChurchIcon
                  className='h-7 w-5 flex-none text-foreground'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-foreground'>Address</h3>
                  <p className='mt-2 text-foreground/60'>
                    We are at 6 Albury Road, Corner Jan Smut, Albury Office
                    Park,
                    <br />
                    Dunkeld West Unit 4, Suit no.61
                  </p>
                </div>
              </div>
              <div className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10'>
                <PhoneIcon
                  className='h-7 w-5 flex-none text-indigo-400'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-foreground'>
                    Book Speaker
                  </h3>
                  <p className='mt-2 text-foreground/60'>
                    Bookings@bakhedlamini.co.za
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
          aria-hidden='true'
        >
          <div className='relative aspect-[1318/752] w-[82.375rem] flex-none object-cover'>
            <Image
              src='/images/therapy-sessions/contact-us.jpg'
              alt='contact-us'
              className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
