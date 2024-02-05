import { Button } from '@/components/ui/button';
import Image from 'next/image';
const cities = [
  {
    name: 'Fountains Hotel Cape Town',
    description: '23 March',
  },
  {
    name: 'Bon hotel Bloemfontein',
    description: '27 April',
  },
  {
    name: 'Avani Gaborone',
    description: '25 May',
  },
  {
    name: 'Radisson Blu Durban',
    description: '1 June',
  },
  {
    name: 'Meropa Polokwane',
    description: '26 July',
  },
  {
    name: 'Hunters Rest Anew Rustenburg',
    description: '27 July',
  },
  {
    name: 'Premier East London',
    description: '2 Aug',
  },
  {
    name: 'Boardwalk Port Elizabeth',
    description: '3 Aug',
  },
  {
    name: 'The Ridge Witbank',
    description: '31 Aug',
  },
  {
    name: 'Emnotweni Mbombela',
    description: '28 Sept',
  },
  {
    name: 'Maslow Sandton',
    description: '26 Oct',
  },
  {
    name: 'Southern Sun Pretoria',
    description: '30 Nov',
  },
];
export default function MarriageTourSection() {
  return (
    <section className='relative isolate overflow-hidden pt-10'>
      <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
            The Recharge Your Marriage 2024 Tour
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <ol
              role='list'
              className='mt-10 bg-white/60  grid grid-cols-2 gap-4'
            >
              {cities.map((city) => (
                <li
                  key={city.name}
                  className='border p-4'
                  aria-label='Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST'
                >
                  <h4 className='text-lg font-semibold tracking-tight text-gray-800'>
                    {city.name}
                  </h4>
                  <p className='mt-1 tracking-tight text-gray-800'>
                    {' '}
                    {city.description}
                  </p>
                  <p className='mt-1 font-mono text-sm text-slate-500'>
                    <time dateTime='2022-04-04T9:00AM-08:00'>3:00PM</time>{' '}
                    <time dateTime='2022-04-04T10:00AM-08:00'>07:00PM</time>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className='mt-10 relative aspect-[6/5] w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'>
            <Image
              src='/images/seminars/marriage-seminars.jpg'
              alt=''
              className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
              layout='fill'
            />
          </div>

          <div className='pt-4'>
            <Button href='/seminars/tour'>Book now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
