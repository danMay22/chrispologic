'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';

type ImagesGridProps = {
  children?: React.ReactNode;
  photos: string[];
};

export function ImagesGrid({ photos }: ImagesGridProps) {
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
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 '>
              <Image
                onClick={openModal}
                src={photo}
                alt=''
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                fill
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className='sm:max-w-[425px] bg-[linear-gradient(#fbf7ec,#e2f1ee)] max-w-xs px-8 sm:h-[40rem] h-96 flex'
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <Carousel className='w-full'>
            <CarouselContent className='sm:h-[37rem] h-80'>
              {photos.map((photo) => (
                <CarouselItem key={photo} className='relative'>
                  <Image
                    onClick={openModal}
                    src={photo}
                    alt=''
                    className='h-full w-full object-contain object-center lg:h-full lg:w-full aspect-square rounded-lg bg-[linear-gradient(#fbf7ec,#e2f1ee)]'
                    fill
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
