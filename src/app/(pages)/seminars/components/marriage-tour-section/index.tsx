import BankingDetails from '@/components/ui/banking-details';
import SnapScanCard from '@/components/ui/snap-scan-card';
import Image from 'next/image';
const cities = [
  {
    name: 'Premier Hotel',
    city: 'Richardsbay',
    description: '09 March',
  },
  {
    name: 'Blue Lagoon',
    city: 'Cape Town',
    description: '06 April',
  },
  {
    name: 'Bon hotel',
    city: 'Bloemfontein',
    description: '27 April',
  },
  {
    name: 'Avani',
    city: 'Gaborone',
    description: '04 May',
  },
  {
    name: 'Radisson Blu',
    city: 'Durban',
    description: '01 June',
  },
  {
    name: 'Meropa ',
    city: 'Polokwane',
    description: '22 June',
  },
  {
    name: 'Hunters Rest Anew',
    city: 'Rustenburg',
    description: '06 July',
  },
  {
    name: 'Premier',
    city: 'East London',
    description: '02 Aug',
  },
  {
    name: 'Boardwalk',
    city: 'Port Elizabeth',
    description: '03 Aug',
  },
  {
    name: 'Anew Hotel',
    city: 'Witbank',
    description: '31 Aug',
  },
  {
    name: 'Emnotweni ',
    city: 'Mbombela',
    description: '28 Sept',
  },
  {
    name: 'Southern Sun ',
    city: 'Sandton',
    description: '26 Oct',
  },
  {
    name: 'Southern Sun ',
    city: 'Pretoria',
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
          <div className='mt-10 relative aspect-[6/5] w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'>
            <Image
              src='/images/seminars/marriage-seminars.jpg'
              alt=''
              className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
              layout='fill'
            />
          </div>
          <div>
            <h4 className='py-2 max-w-2xl text-xl  lg:text-2xl font-light tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
              Ticket, R1500 per couples
              <br /> Includes refreshments.
            </h4>
            <p className='text-xl lg:text-xl font-light tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
              Friday events: 6:00PM-9:45PM
              <br /> Saturday events: 3:00PM-7:00PM
            </p>
          </div>
          <div>
            <SnapScanCard />
            <BankingDetails />
          </div>
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
                  <h2 className='font-semibold tracking-tight text-gray-800'>
                    {city.city}
                  </h2>
                  <p className='mt-1 tracking-tight text-gray-800'>
                    {' '}
                    {city.description}
                  </p>
                  <p className='mt-1 font-mono text-sm text-slate-500'>
                    <time dateTime='2022-04-04T9:00AM-08:00'>3:00PM - </time>{' '}
                    <time dateTime='2022-04-04T10:00AM-08:00'>07:00PM</time>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
