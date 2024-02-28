import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
        <div className='px-6 lg:px-0 lg:pt-4'>
          <div className='mx-auto max-w-2xl'>
            <div className='max-w-lg'>
              <h1 className='xl:text-[82px] md:text-[40px] sm:text-[35px] text-[50px] font-light tracking-tight text-gray-900 sm:text-6xl'>
                Yonder Worship Centre
              </h1>
              <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                Yonder Worship Centre is a dynamic multicultural church based in
                Midrand, South Africa. While deeply spiritual, Yonder is a fun
                place to be. Services at Yonder are a combination of powerful
                preaching and world-class music ministry. Yonder is a church of
                excellence. Yonder is a fast-growing church with a massive
                vision.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
          <div className='bg-background border h-[28rem] relative rounded-lg shadow-sm'>
            <Image
              className='object-contain mx-auto'
              src='/images/home/Bakhe & Wife 2.png'
              alt='hero section image'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
