import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative h-[92vh] w-full overflow-hidden'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/pexels-brett-sayles-3633711.jpg')" }}
      />
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/55' />

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center text-center px-6'>
        <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70'>
          New Collection — 2025
        </p>
        <h1 className='font-sans text-6xl font-black uppercase tracking-widest text-white max-w-4xl leading-tight max-lg:text-4xl'>
          Wear What You
          <br />
          <span className='border-b-4 border-white pb-1'>Believe In</span>
        </h1>
        <p className='mt-6 max-w-xl text-lg text-white/75 max-lg:text-base'>
          Chrispology — faith-inspired streetwear crafted for those who carry their identity boldly.
        </p>
        <div className='mt-10 flex items-center gap-4 max-lg:flex-col'>
          <Link
            href='/gallery'
            className='bg-white text-black font-bold uppercase tracking-widest px-10 py-3 text-sm hover:bg-white/90 transition-colors'
          >
            Shop New Arrivals
          </Link>
          <Link
            href='/about-us'
            className='border border-white text-white font-bold uppercase tracking-widest px-10 py-3 text-sm hover:bg-white/10 transition-colors'
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent' />
    </section>
  );
}
