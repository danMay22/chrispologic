import { Cover } from '@/components/ui/cover';

export function CoverDemo() {
  return (
    <div className='bg-[url(/photo-1561448817-bb90ab1327b5-960w.jpeg)] object-contain overflow-hidden  rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%]s flex item-center justify-between py-6 px-4 md:px-8 mx-6'>
      <div className='w-[89%] m-auto grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1400px] gap-15 '>
        <p className='text-5xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'>
          <Cover>Yonder Worship Centre</Cover>
        </p>
      </div>
    </div>
  );
}
