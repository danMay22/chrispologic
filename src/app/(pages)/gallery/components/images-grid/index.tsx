'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

type ImagesGridProps = {
  children: React.ReactNode;
  photos: string[];
};

export function ImagesGrid({ children, photos }: ImagesGridProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className='pt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {photos.map((photo) => (
          <div key={photo} className='group relative'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <img
                onClick={openModal}
                src={photo}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className='max-w-4xl px-8 h-[40rem] flex'
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
