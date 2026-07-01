'use client';

import { useLanguage } from '@/components/providers/language';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroImages = [
  '/image/fashion-clothing-hangers-show.jpg',
  '/image/pexels-ai25studioai-5264925.jpg',
  '/image/pexels-olly-3755706.jpg',
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative h-[92vh] w-full overflow-hidden'>
      {/* Background carousel */}
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className='absolute inset-0 bg-cover bg-center bg-no-repeat gpu'
          style={{ backgroundImage: `url('${heroImages[current]}')` }}
        />
      </AnimatePresence>

      <div className='absolute inset-0 bg-black/55' />

      <div className='relative z-10 flex h-full flex-col items-center justify-center text-center px-6'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70'
        >
          {t('hero.label')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className='font-sans text-6xl font-black uppercase tracking-widest text-white max-w-4xl leading-tight max-lg:text-4xl'
        >
          {t('hero.headline1')}
          <br />
          <span className='border-b-4 border-white pb-1'>{t('hero.headline2')}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className='mt-6 max-w-xl text-lg text-white/75 max-lg:text-base'
        >
          {t('hero.sub')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className='mt-10 flex items-center gap-4 max-lg:flex-col'
        >
          <Link href='/#new-arrivals' className='bg-white text-black font-bold uppercase tracking-widest px-10 py-3 text-sm hover:bg-white/90 transition-fast active:scale-95 gpu'>
            {t('hero.shopBtn')}
          </Link>
          <Link href='/contact' className='border border-white text-white font-bold uppercase tracking-widest px-10 py-3 text-sm hover:bg-white/10 transition-fast active:scale-95 gpu'>
            {t('hero.storyBtn')}
          </Link>
        </motion.div>

        {/* Carousel indicators */}
        <div className='absolute bottom-32 flex gap-2'>
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-4 bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent' />
    </section>
  );
}
