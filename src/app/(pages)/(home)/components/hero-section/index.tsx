import { CoverDemo } from '@/components/demo/cover-demo';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className='md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-10 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0'>
      <p
        className='text-center 
py-4 md:w-1/2 mx-auto 
text-xl md:text-2xl text-gray-500'
      >
        <div className='text-5xl md:text-5xl md:text-center font-meduim flex items-center gap-x-2 mx-auto justify-center'>
          <CoverDemo />
        </div>
        Yonder Worship Centre is a dynamic multicultural church based in
        Midrand, South Africa. While deeply spiritual, Yonder is a fun place to
        be. Services at Yonder are a combination of powerful preaching and
        world-class music ministry. Yonder is a church of excellence. Yonder is
        a fast-growing church with a massive vision.
      </p>
      <div className='w-full md:w-1/2 order-2 md:order-1'>
        <Image
          src={'/images/home/Bakhe & Wife 2.png'}
          width={10000}
          height={10000}
          className='object-contain mx-auto'
          alt='image'
        />
      </div>
    </main>
  );
}
