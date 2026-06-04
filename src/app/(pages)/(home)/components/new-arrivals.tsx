'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useLanguage } from '@/components/providers/language';

const newArrivals = [
  { id: 'item-1',  title: 'White Dress Shirt',       summary: 'Classic white cotton dress shirt with a tailored fit.',               image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.35 (1).jpeg',  tag: 'Sale' },
  { id: 'item-2',  title: 'Formal Button-Up Shirt',  summary: 'Smart formal shirt with a clean finish.',                            image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.37 (1).jpeg',  tag: 'New' },
  { id: 'item-3',  title: 'Black Leather Shoes',     summary: 'Classic black leather shoes with a polished finish.',                image: '/Shoes/WhatsApp Image 2026-06-02 at 20.19.39.jpeg',       tag: 'New' },
  { id: 'item-4',  title: 'Navy Two-Piece Suit',     summary: 'Tailored navy suit in a classic two-piece cut.',                     image: '/Suits/WhatsApp Image 2026-06-02 at 20.33.48.jpeg',       tag: 'New' },
  { id: 'item-5',  title: 'Brown Oxford Shoes',      summary: 'Handcrafted brown oxford shoes. A timeless choice.',                 image: '/Shoes/WhatsApp Image 2026-06-02 at 20.21.25.jpeg',       tag: 'Sale' },
  { id: 'item-6',  title: 'Charcoal Slim Suit',      summary: 'Modern charcoal suit with a slim silhouette.',                       image: '/Suits/WhatsApp Image 2026-06-02 at 20.39.16.jpeg',       tag: 'Sale' },
  { id: 'item-7',  title: 'Striped Casual Shirt',    summary: 'Light striped shirt for smart casual wear.',                         image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.40 (1).jpeg',  tag: 'New' },
  { id: 'item-8',  title: 'Tan Loafers',             summary: 'Classic tan loafers for a relaxed yet polished look.',                image: '/Shoes/WhatsApp Image 2026-06-02 at 20.22.36.jpeg',       tag: 'Limited' },
  { id: 'item-9',  title: 'Black Three-Piece Suit',  summary: 'Classic black three-piece suit with matching vest.',                  image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.26.jpeg',       tag: 'Limited' },
  { id: 'item-10', title: 'Polo Shirt',              summary: 'Classic polo shirt with a neat collar.',                             image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.48 (1).jpeg',  tag: 'New' },
  { id: 'item-11', title: 'Brown Derby Shoes',       summary: 'Versatile brown derby shoes for everyday wear.',                     image: '/Shoes/WhatsApp Image 2026-06-02 at 20.23.54.jpeg',       tag: 'New' },
  { id: 'item-12', title: 'Grey Business Suit',      summary: 'Professional grey suit for the workplace.',                          image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.32 (1).jpeg',   tag: 'Sale' },
];

export default function NewArrivals() {
  const { t } = useLanguage();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on('select', update);
    return () => { carouselApi.off('select', update); };
  }, [carouselApi]);

  return (
    <section className='py-20'>
      <div className='px-10'>
        <div className='mb-10 flex flex-col justify-between md:flex-row md:items-end'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>{t('arrivals.label')}</p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>{t('arrivals.title')}</h2>
          </div>
          <div className='mt-6 flex items-center gap-2 md:mt-0'>
            <Button size='icon' variant='outline' onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} className='disabled:pointer-events-auto rounded-none'>
              <ArrowLeft className='size-4' />
            </Button>
            <Button size='icon' variant='outline' onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} className='disabled:pointer-events-auto rounded-none'>
              <ArrowRight className='size-4' />
            </Button>
          </div>
        </div>
      </div>
      <Carousel setApi={setCarouselApi} opts={{ dragFree: true }} className='w-full'>
        <CarouselContent className='-ml-0 pl-10'>
          {newArrivals.map((item) => (
            <CarouselItem key={item.id} className='pl-6 md:basis-[380px] basis-[300px]'>
              <div className='group cursor-pointer gpu'>
                <div className='relative aspect-[3/4] overflow-hidden bg-muted'>
                  <img src={item.image} alt={item.title} loading='lazy' decoding='async' className='h-full w-full object-cover object-center transition-transform duration-500 ease-out gpu group-hover:scale-105' />
                  <span className='absolute top-3 left-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-2 py-1'>{item.tag}</span>
                </div>
                <div className='pt-4'>
                  <h3 className='font-sans font-black uppercase tracking-wider text-lg'>{item.title}</h3>
                  <p className='mt-1 text-sm text-muted-foreground line-clamp-2'>{item.summary}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
