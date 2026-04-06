'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const newArrivals = [
  { id: 'item-1',  title: 'Faith Over Fear Tee',    summary: 'Bold statement tee. 100% premium cotton, oversized fit.',              image: '/pexels-jibarofoto-2014773.jpg',          tag: 'New' },
  { id: 'item-2',  title: 'Grace Hoodie',            summary: 'Heavy-weight fleece hoodie with embroidered logo.',                   image: '/pexels-jibarofoto-2014774.jpg',          tag: 'New' },
  { id: 'item-3',  title: 'Chrispology Cap',         summary: 'Structured 6-panel cap with signature wordmark.',                    image: '/pexels-jibarofoto-2351722.jpg',          tag: 'Limited' },
  { id: 'item-4',  title: 'Blessed Cargo Pants',     summary: 'Relaxed-fit cargo with subtle scripture detail.',                    image: '/pexels-matthardy-2602543.jpg',           tag: 'New' },
  { id: 'item-5',  title: 'Identity Jacket',         summary: 'Lightweight bomber. Wear your identity on your sleeve.',             image: '/pexels-david-bartus-43782-915674.jpg',   tag: 'Coming Soon' },
  { id: 'item-6',  title: 'Anointed Tote',           summary: 'Canvas tote with screen-printed Chrispology mark.',                 image: '/pexels-brett-sayles-3633711.jpg',        tag: 'New' },
  { id: 'item-7',  title: 'Chosen Wristband',        summary: 'Silicone wristband. Daily reminder of your identity.',              image: '/pexels-yungsaac-2305084.jpg',            tag: 'Limited' },
  { id: 'item-8',  title: 'Redeemed Shorts',         summary: 'Mesh athletic shorts with embroidered back pocket.',                image: '/pexels-nikko-tan-12261-133699.jpg',      tag: 'New' },
  { id: 'item-9',  title: 'Purpose Crewneck',        summary: 'Heavyweight crewneck sweatshirt. Minimal design, maximum meaning.', image: '/pexels-jibarofoto-2014773.jpg',          tag: 'New' },
  { id: 'item-10', title: 'Covenant Joggers',        summary: 'Tapered joggers with side-seam scripture print.',                   image: '/pexels-matthardy-2602543.jpg',           tag: 'New' },
  { id: 'item-11', title: 'Sanctified Snapback',     summary: 'Flat-brim snapback with embroidered cross detail.',                 image: '/pexels-jibarofoto-2351722.jpg',          tag: 'Limited' },
  { id: 'item-12', title: 'Overflow Bucket Hat',     summary: 'Washed cotton bucket hat. Unstructured, relaxed fit.',             image: '/pexels-david-bartus-43782-915674.jpg',   tag: 'New' },
  { id: 'item-13', title: 'Remnant Long Sleeve',     summary: 'Garment-dyed long sleeve tee with back graphic.',                  image: '/pexels-jibarofoto-2014774.jpg',          tag: 'New' },
  { id: 'item-14', title: 'Worthy Zip Hoodie',       summary: 'Full-zip hoodie with chenille patch on chest.',                    image: '/pexels-brett-sayles-3633711.jpg',        tag: 'Coming Soon' },
  { id: 'item-15', title: 'Sealed Crossbody Bag',    summary: 'Compact crossbody with adjustable strap and zip closure.',         image: '/pexels-yungsaac-2305084.jpg',            tag: 'New' },
];

export default function NewArrivals() {
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
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>
              Just Dropped
            </p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>
              New Arrivals
            </h2>
          </div>
          <div className='mt-6 flex items-center gap-2 md:mt-0'>
            <div className='flex items-center gap-2'>
              <Button
                size='icon'
                variant='outline'
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className='disabled:pointer-events-auto rounded-none'
              >
                <ArrowLeft className='size-4' />
              </Button>
              <Button
                size='icon'
                variant='outline'
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className='disabled:pointer-events-auto rounded-none'
              >
                <ArrowRight className='size-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{ dragFree: true }}
        className='w-full'
      >
        <CarouselContent className='-ml-0 pl-10'>
          {newArrivals.map((item) => (
            <CarouselItem key={item.id} className='pl-6 md:basis-[380px] basis-[300px]'>
              <div className='group cursor-pointer'>
                {/* Image */}
                <div className='relative aspect-[3/4] overflow-hidden bg-muted'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
                  />
                  <span className='absolute top-3 left-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-2 py-1'>
                    {item.tag}
                  </span>
                </div>
                {/* Info */}
                <div className='pt-4'>
                  <h3 className='font-sans font-black uppercase tracking-wider text-lg'>
                    {item.title}
                  </h3>
                  <p className='mt-1 text-sm text-muted-foreground line-clamp-2'>
                    {item.summary}
                  </p>
  
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
