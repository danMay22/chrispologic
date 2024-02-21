import Image from 'next/image';

export default function LandingSection() {
  return (
    <section className='relative isolate overflow-hidden sm:pt-10'>
      <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <h1 className='max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-6xl lg:col-span-2 xl:col-auto'>
            Looking for practical solutions for your relationship/marriage?
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <p className='text-2xl leading-8 text-muted-foreground'>
              Look no further. We handle the most complex cases globally, and
              you can be guaranteed a solution.
            </p>
          </div>

          <div className='relative mt-5 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-8 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24'>
            <Image
              src='/images/therapy-sessions/landing.jpg'
              alt=''
              className='h-full w-full object-cover object-center sm:h-full sm:w-full rounded-2xl'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
