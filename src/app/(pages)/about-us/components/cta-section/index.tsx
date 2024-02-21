import Image from 'next/image';

export default function CTASection() {
  return (
    <section className='bg-background py-24 sm:py-32'>
      <div className='relative isolate'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-foreground/5 px-6 py-16 ring-1 ring-foreground/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
            <div className='relative h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'>
              <Image
                className='h-full w-full object-cover rounded-2xl'
                src='/images/about-us/dlamini-couple.jpg'
                alt=''
                layout='fill'
              />
            </div>
            <div className='w-full flex-auto'>
              <p className='mt-6 text-lg leading-8 text-foreground'>
                Bakhe Dlamini is married to Nokwanda Dlamini, and together they
                run their private practice in Sandton.
              </p>

              <div className='mt-10 flex'>
                <a
                  href='https://wa.link/bakhedlaminiconsultancy'
                  className='text-sm font-semibold leading-6 text-primary'
                >
                  Reach out <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
          aria-hidden='true'
        >
          <div
            className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-foreground opacity-25'
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
