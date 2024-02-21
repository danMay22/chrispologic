import { Button } from '@/components/ui/button';
import Image from 'next/image';
const cities = [
  {
    name: 'Fountains Hotel',
    city: 'Cape Town',
    description: '23 March',
  },
  {
    name: 'Bon hotel',
    city: 'Bloemfontein',
    description: '27 April',
  },
  {
    name: 'Avani',
    city: 'Gaborone',
    description: '25 May',
  },
  {
    name: 'Radisson Blu',
    city: 'Durban',
    description: '1 June',
  },
  {
    name: 'Meropa ',
    city: 'Polokwane',
    description: '26 July',
  },
  {
    name: 'Hunters Rest Anew ',
    city: 'Rustenburg',
    description: '27 July',
  },
  {
    name: 'Premier ',
    city: 'East London',
    description: '2 Aug',
  },
  {
    name: 'Boardwalk ',
    city: 'Port Elizabeth',
    description: '3 Aug',
  },
  {
    name: 'The Ridge ',
    city: 'Witbank',
    description: '31 Aug',
  },
  {
    name: 'Emnotweni ',
    city: 'Mbombela',
    description: '28 Sept',
  },
  {
    name: 'Maslow ',
    city: 'Sandton',
    description: '26 Oct',
  },
  {
    name: 'Southern Sun ',
    city: 'Pretoria',
    description: '30 Nov',
  },
];

export default function BootCampSection() {
  return (
    <section className='overflow-hidden bg-background py-10'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='mt-5 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
              Our Bootcamp
            </h2>
            <p className='mt-6 text-xl leading-8 text-muted-foreground'>
              Join us for our Marriage Bootcamp. This is a national event. We
              have couples that travel from all provinces and outside the
              country to be a part of this magnificent weekend getaway at
              Premier Hotel Roodevalley. Join Marriage Therapist Bakhe Dlamini
              and a panel of other marriage experts for the weekend experience.
            </p>

            <div className='pt-4'>
              <Button href='/seminars/bootcamp'>Book now</Button>
            </div>
          </div>

          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <div className='relative aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-background'>
                <Image
                  src='/images/seminars/bootcamp-2.jpg'
                  alt=''
                  className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
                  layout='fill'
                />
              </div>
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <div className='relative aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-background'>
                  <Image
                    src='/images/seminars/bootcamp-1.jpg'
                    alt=''
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
                    layout='fill'
                  />
                </div>
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <div className='relative aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-background'>
                  <Image
                    src='/images/seminars/bootcamp.jpg'
                    alt=''
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
                    layout='fill'
                  />
                </div>
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <div className='relative aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-background'>
                  <Image
                    src='/images/seminars/bootcamp-3.jpg'
                    alt=''
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
