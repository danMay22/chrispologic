import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='bg-[linear-gradient(#fbf7ec,#e2f1ee)] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-20 text-center'>
      <div className='container flex flex-col items-center gap-5'>
        <h1 className='max-w-2xl text-7xl font-medium text-foreground max-lg:text-5xl'>
          Welcome to Yonder Worship Centre
        </h1>
        <p className='max-w-2xl text-muted-foreground max-lg:text-md text-2xl'>
          We are a family of people that loves God, a dynamic multicultural
          church based in Midrand, South Africa. While deeply spiritual, Yonder
          is a fun place to be. Services at Yonder are a combination of powerful
          preaching and world-class music ministry. Yonder is a church of
          excellence. Yonder is a fast-growing church with a massive vision.{' '}
        </p>
        <div className='flex items-center gap-2.5 text-lg max-lg:flex-col max-lg:text-base'>
          <Button className='w-fit rounded-md  px-8 py-1' href='/about-us'>
            Meet Us
          </Button>
          <Button
            variant='secondary'
            className='w-fit rounded-md  px-8 py-1'
            href='https://www.youtube.com/@YonderWorshipCentre'
          >
            Watch Youtube sermon
          </Button>
        </div>
        <Image
          src={'/images/home/Bakhe & Wife 2.png'}
          width={600}
          height={600}
          className='mt-10 w-[50%] rounded-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] max-lg:w-full'
          alt='image'
        />
      </div>
    </section>
  );
}
