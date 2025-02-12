import { List, Play, Sparkles } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export default function JoinUs() {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='mx-auto flex max-w-5xl flex-col items-center gap-6 text-center'>
          <h1 className='mb-6 text-pretty text-4xl font-semibold lg:text-5xl'>
            Get Involved
          </h1>
          <p className='text-xl font-semibold'>
            Grow closer to God through joyful services, as we build His kingdom
            together one action at a time.
          </p>
          <div className='mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader className='pb-1'>
                <Sparkles className='size-4' strokeWidth={1} />
              </CardHeader>
              <CardContent className='text-left'>
                <h2 className='mb-1 text-lg font-semibold'>Stewardship</h2>
                <p className='leading-snug text-muted-foreground'>
                  Your generous gifts, time and efforts help us serve our
                  community and spread God's love - every contribution, no
                  matter the size, makes a meaningful difference in our shared
                  ministry.
                </p>
              </CardContent>
              <CardFooter className='justify-end pb-0 pr-0'>
                <Image
                  src={'/logo/stew.jpg'}
                  alt='clock'
                  className='h-40 w-full rounded-tl-md object-cover object-center'
                  width={600}
                  height={600}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className='pb-1'>
                <List className='size-4' strokeWidth={1} />
              </CardHeader>
              <CardContent className='text-left'>
                <h2 className='mb-1 text-lg font-semibold'>Volunteer</h2>
                <p className='leading-snug text-muted-foreground'>
                  Make a lasting difference in your community while nurturing
                  your spirit <br />
                  Join our team of church volunteers that Transform lives and
                  find purpose by sharing your unique gifts as a church
                  volunteer - even a few hours makes an eternal impact.
                </p>
              </CardContent>
              <CardFooter className='justify-end pb-0 pr-0'>
                <Image
                  src={'/logo/know.jpeg'}
                  alt='clock'
                  className='h-40 w-full rounded-tl-md object-cover object-center'
                  width={600}
                  height={600}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className='pb-1'>
                <Play className='size-4' strokeWidth={1} />
              </CardHeader>
              <CardContent className='text-left'>
                <h2 className='mb-1 text-lg font-semibold'>
                  Become an active member
                </h2>
                <p className='leading-snug text-muted-foreground'>
                  Get to know your community and discover a welcoming community
                  where you can grow spiritually, make lifelong friendships, and
                  make a positive impact in your neighborhood through our
                  church's diverse programs and volunteer opportunities.
                </p>
              </CardContent>
              <CardFooter className='justify-end pb-0 pr-0'>
                <Image
                  src={'/logo/involve.jpg'}
                  alt='clock'
                  className='h-40 w-full rounded-tl-md object-cover object-center'
                  width={600}
                  height={600}
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
