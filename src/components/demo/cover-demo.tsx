import { Cover } from '@/components/ui/cover';

export function CoverDemo() {
  return (
    <div className='bg-[url(/pexels-brett-sayles-3633711.jpg)] object-contain overflow-hidden top-5 md:mx-auto xl:w-4/5 2xl:w-[68%] py-6 px-4 md:px-8 mx-6 '>
      <div className='w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-15 '>
        <div className='text-5xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text border-transparent'>
          <Cover>Reality Church Worship</Cover>
        </div>
      </div>
    </div>
  );
}
