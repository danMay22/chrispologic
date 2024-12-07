import { InfiniteMovingLogos } from '@/components/demo/infinte-moving';
import NumberTicker from '@/components/ui/number-ticker';
import { ChurchIcon, Mail, PhoneIcon } from 'lucide-react';
import { Metadata } from 'next';
import Announce from './components/church-announcement';
import HeroSection from './components/hero-section';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of the app',
};

export default function Page() {
  return (
    <div
      className='overflow-clip 
    inset-0 
    -z-10 h-full w-full bg-[#fafafa]
     bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px]'
    >
      <HeroSection />
      <section className='mt-5 bg-[url(/photo-1561448817-bb90ab1327b5-960w.jpeg)] inset-0 bg-cover bg-center py-10'>
        <div className='w-[89%] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-15 '>
          <h1 className='text-7xl font-bold text-red-800 '>Join us</h1>
          <p className='mt-5 text-white'>
            We are delighted to introduce you to our multicultural, exciting,
            and deeply spiritual family.
            <br /> A church for all those who seek empowerment, tools, guidance,
            love, and support in their journey to fulfill God's purpose.
            <br /> An inclusive church where all are welcome to fellowship.
          </p>
          <a href='/services' className=''>
            <button className=' mt-5 bg-primary py-2 px-5 rounded-xl text-white'>
              More Info
            </button>
          </a>
        </div>
      </section>

      <div className='md:flex items-center justify-between gap-y-4 my-10 gap-x-20 mx-auto'>
        <div className='md:w-2/5'>
          <h1 className='text-2xl font-medium text-gray-600 w-4/5'>
            Every Sunday
          </h1>
          <div className='flex my-6 gap-x-5 w-full'>
            <div>
              <h1 className='text-blue-500 text-3xl md:text-5xl'>
                <NumberTicker value={100} /> +
              </h1>
              <p className='text-gray-500 text-sm md:text-md'>
                songs & worship
              </p>
            </div>
            <div className='w-px bg-gray-400 self-stretch'></div>
            <div className='flex-1 min-w-0'>
              <h1 className='text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden'>
                <NumberTicker value={1000} /> +
              </h1>
              <p className='text-gray-500 text-sm md:text-md'>
                People lives impacted.
              </p>
            </div>
          </div>
        </div>
        <section className='overflow-hidden mt-10 md:w-4/5'>
          <InfiniteMovingLogos
            speed='slow'
            direction='left'
            items={[
              {
                logo: '/logo/logo.jpg',
                name: 'logo',
              },
              {
                logo: '/logo/logo.jpg',
                name: 'logo',
              },
            ]}
          />
        </section>
      </div>

      <section
        className='
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative'
      >
        <div className='md:pr-[22rem]'>
          <p className='mt-5 text-lg leading-8 text-gray-900'>
            Now it came to pass on a certain day that he went into a ship with
            his disciples:
            <br />
            and he said unto them, Let us go over to the other side of the lake.
            And they launched forth.
          </p>
          <dl className='mt-5 space-y-4 text-base leading-7 text-gray-900'>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Address </span>
                <ChurchIcon
                  className='h-7 w-6 text-gray-900'
                  aria-hidden='true'
                />
              </dt>
              <dd>
                917 Morkels CI, Halfway House,<br></br>
                Midrand, Unit 72, South Africa
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Telephone</span>
                <PhoneIcon
                  className='h-7 w-6 text-gray-900'
                  aria-hidden='true'
                />
              </dt>
              <dd>
                <a className='hover:text-white' href='tel:+27 73 841 8903'>
                  +27 73 841 8903
                </a>
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Email</span>
                <Mail className='h-7 w-6 text-gray-900' aria-hidden='true' />
              </dt>
              <dd>
                <a
                  className='hover:text-white'
                  href='mailto:info@yonderworshipcentre.co.za'
                >
                  info@yonderworshipcentre.co.za
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <Announce />
    </div>
  );
}
