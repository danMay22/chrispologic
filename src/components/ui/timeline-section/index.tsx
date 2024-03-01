import Image from 'next/image';

export default function TimelineSection() {
  return (
    <section className='bg-[#0229a8] sm:h-[32rem] h-48 relative'>
      <Image
        className='h-full w-full sm:object-contain object-cover rounded-sm'
        src='/images/home/timeline-sectioon.jpg'
        alt='hero section image'
        layout='fill'
      />
    </section>
  );
}
