import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
        <div className='px-6 lg:px-0 lg:pt-4'>
          <div className='mx-auto max-w-2xl'>
            <div className='max-w-lg'>
              <h1 className='mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                Community Psychologist, Marriage & Family Therapist
              </h1>
              <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                Bakhe Dlamini Consultancy is a private practice based in Sandton
                and has a clientele that spans throughout South Africa, the US,
                UK, Australia, Abu Dhabi, Suide Arabia, China, Taiwan, Botswana,
                Namibia, Eswatini, etc. The practice is an answer to the modern
                day couple. Relevance and practical solutions is what Bakhe
                Dlamini Consultancy is known for. Not only does Bakhe Dlamini
                Consultancy provide cutting edge therapy sessions for those in
                relationships and marriage, Bakhe Dlamini Consultancy hosts
                national ground breaking marriage seminars and marriage
                bootcamps.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <Button>Get starter</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
          <div className='bg-background border h-[48rem] relative rounded-lg shadow-sm'>
            <Image
              className='h-full w-full object-cover rounded-sm'
              src='/images/home/hero-section.jpg'
              alt='hero section image'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
