import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className='py-10 md:flex-col items-center justify-center space-y-6 md:space-y-0 md:gap-x-10 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0'>
      <div
        className='text-center 
py-4 md:w-1/2 mx-auto 
text-xl md:text-2xl text-gray-500'
      >
        Yonder Worship Centre is a dynamic multicultural church based in
        Midrand, South Africa. While deeply spiritual, Yonder is a fun place to
        be. Services at Yonder are a combination of powerful preaching and
        world-class music ministry. Yonder is a church of excellence. Yonder is
        a fast-growing church with a massive vision.
      </div>
      <div className='w-full md:w-1/2 order-2 md:order-1'>
        <Image
          src={'/images/home/Bakhe & Wife 2.png'}
          width={10000}
          height={10000}
          className='object-contain mx-auto'
          alt='image'
        />
      </div>
      <div className='bg-[url(/960w.jpg)] inset-0 bg-cover bg-center py-20 nd:py-5'>
        <div className='w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-15 '>
          <h1 className='text-7xl font-bold text-red-800 '>Join us</h1>
          <p className='mt-5 text-3xl font-extralight leading-8 text-gray-900'>
            In
            <br /> We Worship
          </p>
        </div>
      </div>
    </main>
  );
}
