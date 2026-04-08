'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PRODUCTS } from '@/data/products';
import { useLanguage } from '@/components/providers/language';
import { cn } from '@/lib/utils';
import { CircleCheck, CircleX, Star, StarHalf } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const WHATSAPP_NUMBER = '27000000000';
const MAX_STARS = 5;

function Stars({ rate }: { rate: number }) {
  const full = Math.floor(rate);
  const half = rate % 1 >= 0.5;
  const empty = MAX_STARS - full - (half ? 1 : 0);
  return (
    <div className='flex items-center gap-0.5'>
      {Array.from({ length: full }).map((_, i) => <Star key={`f${i}`} className='size-4 fill-yellow-500 stroke-yellow-500' />)}
      {half && (
        <div className='relative size-4'>
          <StarHalf className='absolute right-0 top-0 size-full fill-yellow-500 stroke-yellow-500' />
          <StarHalf className='absolute left-0 top-0 size-full -scale-x-100 fill-black/15 stroke-black/15 dark:invert' />
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => <Star key={`e${i}`} className='size-4 fill-black/15 stroke-black/15 dark:invert' />)}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { t } = useLanguage();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className='flex flex-col items-center justify-center py-40 gap-4'>
        <p className='text-muted-foreground uppercase tracking-widest text-sm'>{t('product.notFound')}</p>
        <Button variant='outline' onClick={() => router.back()}>{t('product.goBack')}</Button>
      </div>
    );
  }

  const handleBuy = () => {
    if (!selectedSize) return;
    const msg = encodeURIComponent(
      `Hi! I'd like to order:\n\n*${product.name}*\nSize: ${selectedSize}\nPrice: R${product.salePrice ?? product.price}\n\nImage: ${typeof window !== 'undefined' ? window.location.origin : ''}${product.images[0]}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const inStock = product.sizes.some((s) => s.stock === 'IN_STOCK');

  return (
    <section className='py-16 px-10 max-w-7xl mx-auto'>
      <button onClick={() => router.back()} className='mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors'>
        {t('product.back')}
      </button>

      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        {/* Image gallery */}
        <div>
          <Carousel className='w-full'>
            <CarouselContent>
              {product.images.map((src, i) => (
                <CarouselItem key={i}>
                  <div className='aspect-[3/4] overflow-hidden bg-muted'>
                    <img src={src} alt={`${product.name} ${i + 1}`} className='h-full w-full object-cover object-center' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-3 rounded-none' />
            <CarouselNext className='right-3 rounded-none' />
          </Carousel>
          {/* Thumbnails */}
          <div className='mt-3 flex gap-2 overflow-x-auto'>
            {product.images.map((src, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={cn('h-20 w-16 shrink-0 overflow-hidden border transition-colors', activeImg === i ? 'border-foreground' : 'border-border')}>
                <img src={src} alt='' className='h-full w-full object-cover object-center' />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className='space-y-6'>
          <div>
            {product.badge && (
              <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-white mb-3 inline-block', product.badgeColor)}>
                {product.badge}
              </span>
            )}
            <h1 className='font-sans text-4xl font-black uppercase tracking-widest leading-tight max-lg:text-3xl'>{product.name}</h1>
          </div>

          <div className='flex items-center gap-4'>
            <Stars rate={4} />
            <span className='text-sm text-muted-foreground'>4.0 · 24 {t('product.reviews')}</span>
            {inStock ? (
              <Badge variant='secondary' className='gap-1 rounded-none'><CircleCheck className='size-3' /> {t('product.inStock')}</Badge>
            ) : (
              <Badge variant='destructive' className='gap-1 rounded-none'><CircleX className='size-3' /> {t('product.outOfStock')}</Badge>
            )}
          </div>

          <div className='flex items-center gap-3'>
            {product.salePrice ? (
              <><span className='text-3xl font-black text-primary'>R{product.salePrice}</span><span className='text-xl text-muted-foreground line-through'>R{product.price}</span></>
            ) : (
              <span className='text-3xl font-black'>R{product.price}</span>
            )}
          </div>

          <p className='text-muted-foreground leading-relaxed'>{product.description}</p>

          <div>
            <p className='text-sm font-bold uppercase tracking-widest mb-3'>
              {t('product.selectSize')} {selectedSize && <span className='text-muted-foreground font-normal normal-case tracking-normal'>— {selectedSize}</span>}
            </p>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className='flex flex-wrap gap-2'>
              {product.sizes.map((size) => (
                <label
                  key={size.id}
                  htmlFor={`size-${size.id}`}
                  className={cn(
                    'relative flex h-10 w-16 cursor-pointer items-center justify-center border text-sm font-bold uppercase tracking-wider transition-colors',
                    selectedSize === size.value ? 'bg-foreground text-background border-foreground' : 'bg-background text-foreground border-border hover:bg-muted',
                    size.stock === 'OUT_OF_STOCK' && 'opacity-40 cursor-not-allowed',
                  )}
                >
                  <RadioGroupItem id={`size-${size.id}`} value={size.value} disabled={size.stock === 'OUT_OF_STOCK'} className='absolute size-px overflow-hidden opacity-0' />
                  {size.label}
                  {size.stock === 'OUT_OF_STOCK' && (
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                      <div className='h-px w-full rotate-45 bg-border' />
                    </div>
                  )}
                </label>
              ))}
            </RadioGroup>
          </div>

          <Button size='lg' className='w-full rounded-none font-black uppercase tracking-widest text-base' disabled={!selectedSize} onClick={handleBuy}>
            {selectedSize ? `${t('product.buyWhatsApp')} — R${product.salePrice ?? product.price}` : t('product.selectFirst')}
          </Button>
          {!selectedSize && <p className='text-xs text-muted-foreground text-center -mt-3'>{t('product.selectNote')}</p>}

          <div>
            <h2 className='font-sans font-black uppercase tracking-widest text-sm mb-3'>{t('product.details')}</h2>
            <dl>
              {[
                { label: t('product.material'), value: product.material },
                { label: t('product.fit'),      value: product.fit },
                { label: t('product.care'),     value: product.care },
                { label: t('product.category'), value: product.category },
              ].filter((r) => r.value).map((row) => (
                <div key={row.label} className='flex items-center justify-between border-b py-3 last:border-b-0'>
                  <dt className='text-sm text-muted-foreground'>{row.label}</dt>
                  <dd className='text-sm font-medium capitalize'>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
