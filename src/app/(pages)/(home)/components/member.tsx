import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function MemberFeature() {
  return (
    <section className='py-10 bg-[linear-gradient(#fbf7ec,#e2f1ee)]'>
      <div className='container flex flex-col gap-16 lg:px-16'>
        <div className='lg:max-w-sm'>
          <h1 className='mb-3 font-semibold md:mb-4 md:text-5xl lg:mb-6'>
            I'm NEW
          </h1>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <Image
                src={'/logo/clock1.jpeg'}
                alt='clock'
                className='w-full aspect-square rounded-lg object-cover bg-secondary'
                width={600}
                height={600}
              />
            </div>
            <div className='flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6'>
                Service Time & Directions.
              </h3>
              <p className='text-muted-foreground lg:text-lg'>
                <strong className='text-2xl font-bold'>Service Time: </strong>
                <br />
                Our service starts at 10:00am to 12:00PM.
                <br />
                <strong className='text-2xl font-bold'>Unit 72</strong>{' '}
                Allandale Industrial Park, 917 Morkels CI, Halfway House
              </p>
              <Button
                href='https://www.google.com/maps/dir/-25.8464039,28.1978692/72,+917+Morkels+Cl,+Halfway+House,+Midrand,+1685/@-25.9289976,28.0653997,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x1e956de4a481be81:0x8ab03b57e8d1e981!2m2!1d28.12533!2d-26.01488!3e0?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D'
                className='mt-4 text-xl font-semibold'
                size='lg'
              >
                Get Google Maps Directions
              </Button>
            </div>
          </div>

          <div className='flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6'>
                Feel at Home
              </h3>
              <p className='mb-8 text-muted-foreground lg:text-lg'>
                No matter who you are, where are you from or your background,
                you’ll be welcome at Yonder.
                <br /> We hope that you feel at home, feel welcome, but most
                importantly, we hope that you meet and experience Jesus.
              </p>
            </div>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <Image
                src={'/logo/church.jpg'}
                alt='church'
                className='w-full aspect-square rounded-lg object-cover bg-secondary'
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
