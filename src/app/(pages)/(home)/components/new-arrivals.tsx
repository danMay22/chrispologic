'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useLanguage } from '@/components/providers/language';

const newArrivals = [
  { id: 'item-1',  title: 'The Diplomat Suit',    summary: 'A refined two-piece suit with a structured silhouette.',              summaryFr: 'Un costume deux-pièces raffiné avec une silhouette structurée.',         image: '/Suits/WhatsApp Image 2026-06-02 at 20.33.48.jpeg',          tag: 'Sale' },
  { id: 'item-2',  title: 'The Sovereign Suit',   summary: 'A commanding three-piece suit for special occasions.',                summaryFr: 'Un costume trois-pièces imposant pour les occasions spéciales.',         image: '/Suits/WhatsApp Image 2026-06-02 at 20.39.16.jpeg',          tag: 'New' },
  { id: 'item-3',  title: 'The Prestige Suit',    summary: 'Double-breasted suit with peak lapels. A statement piece.',           summaryFr: 'Costume croisé avec revers en pointe. Une pièce maîtresse.',             image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.26.jpeg',          tag: 'Limited' },
  { id: 'item-4',  title: 'The Monarch Oxford',   summary: 'Classic oxford shoe with a timeless cap-toe design.',                 summaryFr: 'Chaussure oxford classique avec un design intemporel à bout rapporté.',   image: '/Shoes/WhatsApp Image 2026-06-02 at 20.19.39.jpeg',          tag: 'Sale' },
  { id: 'item-5',  title: 'The Apex Derby',       summary: 'A versatile derby shoe with clean lines.',                           summaryFr: 'Une chaussure derby polyvalente aux lignes épurées.',                     image: '/Shoes/WhatsApp Image 2026-06-02 at 20.21.25.jpeg',          tag: 'New' },
  { id: 'item-6',  title: 'The Vanguard Loafer',  summary: 'Sleek penny loafer crafted for the modern man.',                     summaryFr: 'Mocassin penny élégant conçu pour l\'homme moderne.',                     image: '/Shoes/WhatsApp Image 2026-06-02 at 20.22.36.jpeg',          tag: 'New' },
  { id: 'item-7',  title: 'The Heritage Brogue',  summary: 'Full brogue detailing with a hand-stitched welt.',                   summaryFr: 'Détails richelieu complets avec trépointe cousue main.',                  image: '/Shoes/WhatsApp Image 2026-06-02 at 20.23.54.jpeg',          tag: 'Sale' },
  { id: 'item-8',  title: 'The Ascent Dress Shirt', summary: 'Crisp dress shirt with spread collar and French cuffs.',           summaryFr: 'Chemise habillée impeccable avec col écarté et poignets mousquetaires.',  image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.35 (1).jpeg',     tag: 'New' },
  { id: 'item-9',  title: 'The Cardinal Shirt',   summary: 'A versatile button-down shirt with a modern collar.',                summaryFr: 'Une chemise boutonnée polyvalente avec un col moderne.',                  image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.37 (1).jpeg',     tag: 'Sale' },
  { id: 'item-10', title: 'The Noble Shirt',      summary: 'Mandarin collar shirt with subtle texture.',                         summaryFr: 'Chemise à col mao avec une texture subtile.',                             image: '/Shirts/WhatsApp Image 2026-06-02 at 20.43.40 (1).jpeg',     tag: 'Limited' },
  { id: 'item-11', title: 'The Zenith Chelsea Boot', summary: 'Minimalist chelsea boot with elastic side panels.',               summaryFr: 'Bottine chelsea minimaliste avec panneaux élastiques latéraux.',          image: '/Shoes/WhatsApp Image 2026-06-02 at 20.25.53.jpeg',          tag: 'New' },
  { id: 'item-12', title: 'The Regent Suit',      summary: 'Single-breasted suit with notch lapels and a modern slim cut.',      summaryFr: 'Costume à boutonnage simple avec revers à cran et coupe slim moderne.',   image: '/Suits/WhatsApp Image 2026-06-02 at 20.43.32 (1).jpeg',      tag: 'New' },
];

export default function NewArrivals() {
  const { t, language } = useLanguage();
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
              <div className='group cursor-pointer'>
                <div className='relative aspect-[3/4] overflow-hidden bg-muted'>
                  <img src={item.image} alt={item.title} className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-105' />
                  <span className='absolute top-3 left-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-2 py-1'>{item.tag}</span>
                </div>
                <div className='pt-4'>
                  <h3 className='font-sans font-black uppercase tracking-wider text-lg'>{item.title}</h3>
                  <p className='mt-1 text-sm text-muted-foreground line-clamp-2'>{language === 'fr' ? item.summaryFr : item.summary}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
