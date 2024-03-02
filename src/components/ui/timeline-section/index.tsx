import Image from 'next/image';

export default function TimelineSection() {
  return (
    <section className='sm:h-[32rem] h-48 relative'>
      <Image
        className='lg:mt-0 h-full w-full sm:object-contain object-cover lg:hidden rounded-sm'
        src='/images/home/timeline-sectioon.jpg'
        alt='hero section image'
        layout='fill'
      />
    </section>
  );
}
