import { TypingAnimationDemo } from '@/components/demo/typing-animation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function MemberFeature() {
  return (
    <section className='py-4 px-4 sm:px-6'>
      <div className='container flex flex-col gap-8 sm:gap-12 lg:gap-16 lg:px-16'>
        <div className='w-full lg:max-w-sm'>
          <h1 className='mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold md:mb-4 lg:mb-6'>
            <TypingAnimationDemo />
          </h1>
        </div>
        <div className='grid gap-4 sm:gap-6 lg:gap-8'>
          <div className='flex flex-col overflow-clip rounded-xl border border-border sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
            <div className='sm:col-span-2 md:col-span-2 min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <Image
                src={'/logo/clock1.jpeg'}
                alt='clock'
                className='w-full h-full rounded-lg object-cover bg-secondary'
                width={600}
                height={600}
              />
            </div>
            <div className='sm:col-span-2 md:col-span-2 flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h3 className='mb-3 text-lg sm:text-xl md:text-2xl font-semibold md:mb-4 lg:mb-6'>
                Service Time & Directions.
              </h3>
              <p className='text-sm sm:text-base lg:text-lg text-muted-foreground'>
                <strong className='text-lg sm:text-xl md:text-2xl font-bold'>Service Time: </strong>
                <br />
                Our service starts at 10:00am - 12:00PM.
                <br />
                <strong className='text-lg sm:text-xl md:text-2xl font-bold'>Unit 72</strong>{' '}
                Allandale Industrial Park, 917 Morkels CI, Halfway House
              </p>
              <Button
                href='https://www.google.com/maps/dir/-25.8464039,28.1978692/72,+917+Morkels+Cl,+Halfway+House,+Midrand,+1685/@-25.9289976,28.0653997,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x1e956de4a481be81:0x8ab03b57e8d1e981!2m2!1d28.12533!2d-26.01488!3e0?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D'
                className='mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold w-full sm:w-auto'
                size='lg'
              >
                Get Google Maps Directions
              </Button>
            </div>
            
            <div className='sm:col-span-2 md:col-span-2 flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h3 className='mb-3 text-lg sm:text-xl md:text-2xl font-semibold md:mb-4 lg:mb-6'>
                Feel at Home
              </h3>
              <p className='mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-muted-foreground'>
                No matter who you are, where are you from or your background,
                you'll be welcome at Reality Church Worship.
                <br /> We hope that you feel at home, feel welcome, but most
                importantly, we hope that you meet and experience Jesus.
              </p>
            </div>
            <div className='sm:col-span-2 md:col-span-2 min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <Image
                src={'/pexels-jibarofoto-2351722.jpg'}
                alt='church'
                className='w-full h-full rounded-lg object-cover bg-secondary'
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}