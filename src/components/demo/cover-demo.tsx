import { Cover } from '@/components/ui/cover';

export function CoverDemo() {
  return (
    <div className='bg-[url(/pexels-brett-sayles-3633711.jpg)] object-contain overflow-hidden px-4 py-6 sm:px-6 md:px-8 lg:mx-auto lg:w-4/5 xl:w-4/5 2xl:w-[68%]'>
      <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-15'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text border-transparent'>
          <Cover>Reality Church Worship</Cover>
        </h1>
      </div>
    </div>
  );
}
