'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useLanguage } from '@/components/providers/language';

const newArrivals = [
  { id: 'item-1',  title: 'Faith Over Fear Tee',    summary: 'Bold statement tee. 100% premium cotton, oversized fit.',              image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.35 (1).jpeg',  tag: 'New' },
  { id: 'item-2',  title: 'Grace Hoodie',            summary: 'Heavy-weight fleece hoodie with embroidered logo.',                   image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.37 (1).jpeg',  tag: 'New' },
  { id: 'item-3',  title: 'Classic Leather Shoes',   summary: 'Premium leather dress shoes with a timeless silhouette.',             image: '/Shoes/WhatsApp Image 2026-06-02 at 20.19.39.jpeg',       tag: 'New' },
  { id: 'item-4',  title: 'Executive Suit',          summary: 'Tailored two-piece suit in premium fabric.',                         image: '/Suits/WhatsApp Image 2026-06-02 at 20.33.48.jpeg',       tag: 'New' },
  { id: 'item-5',  title: 'Formal Oxford Shoes',     summary: 'Handcrafted oxford shoes with a polished finish.',                   image: '/Shoes/WhatsApp Image 2026-06-02 at 20.21.25.jpeg',       tag: 'Sale' },
  { id: 'item-6',  title: 'Slim Fit Suit',           summary: 'Modern slim fit suit with a sleek design.',                          image: '/Suits/WhatsApp Image 2026-06-02 at 20.39.16.jpeg',       tag: 'Sale' },
  { id: 'item-7',  title: 'Chrispology Graphic Tee', summary: 'Statement graphic tee with bold Chrispology design.',                image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.40 (1).jpeg',  tag: 'New' },
  { id: 'item-8',  title: 'Casual Loafers',          summary: 'Comfortable slip-on loafers for a relaxed look.',                    image: '/Shoes/WhatsApp Image 2026-06-02 at 20.22.36.jpeg',       tag: 'Limited' },
  { id: 'item-9',  title: 'Three-Piece Suit',        summary: 'Complete three-piece suit with vest.',                               image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.26.jpeg',       tag: 'Limited' },
  { id: 'item-10', title: 'Premium Polo Shirt',      summary: 'Elevated polo with subtle Chrispology branding.',                    image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.48 (1).jpeg',  tag: 'New' },
  { id: 'item-11', title: 'Derby Dress Shoes',       summary: 'Versatile derby shoes for office to evening.',                       image: '/Shoes/WhatsApp Image 2026-06-02 at 20.23.54.jpeg',       tag: 'New' },
  { id: 'item-12', title: 'Business Suit',           summary: 'Professional business suit for the boardroom.',                      image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.32 (1).jpeg',   tag: 'Sale' },
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
