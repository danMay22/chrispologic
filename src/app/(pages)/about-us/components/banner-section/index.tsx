import Image from 'next/image';

export default function BannerSection() {
  return (
    <section className='bg-background'>
      <div aria-hidden='true' className='relative h-96'>
        <Image
          src='/pexels-brett-sayles-3633711.jpg'
          alt=''
          className='w-full object-cover object-center'
          layout='fill'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-background' />
      </div>
    </section>
  );
}
