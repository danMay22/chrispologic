import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='bg-[linear-gradient(#fbf7ec,#e2f1ee)] py-20 text-center'>
      <div className='container flex flex-col items-center gap-5'>
        <h1 className='max-w-2xl text-7xl font-medium text-foreground max-lg:text-5xl'>
          Reality Church Worship
        </h1>
        <p className='max-w-2xl text-muted-foreground max-lg:text-md text-2xl'>
          We are a family of people that loves God, a dynamic multicultural
          church based in ..., South Africa. While deeply spiritual, we still
          offer a generous fun place to be. Our services are a combination of
          powerful preaching and world-class music ministry. Yonder is a church
          of excellence. A church with a massive vision.{' '}
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
          src={'/pexels-matthardy-2602543.jpg'}
          width={600}
          height={600}
          className='mt-10 w-[50%] rounded-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] max-lg:w-full'
          alt='image'
        />
      </div>
    </section>
  );
}
