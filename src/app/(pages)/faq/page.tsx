import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ01 from './component/faq';

const features = [
  {
    category: 'Scan or Click',
    title:
      'Giving is a spiritual practice, Tithing is an act of worship that reflects our gratitude towards God and help build the kingdom of God.',
    details:
      'Your faithful tithing does more than sustain our church walls, it breathes life into a ministry that transforms lives and enables us to counsel those in crisis, support missionaries sharing God love worldwide.',
    tutorialLink: 'https://pos.snapscan.io/qr/vwiWJWTG',
  },
];

export default function FAQ() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-lg w-full py-10 px-6'>
        <h2 className='text-4xl md:text-5xl md:leading-[3.5rem] font-black tracking-tight max-w-xl md:text-center md:mx-auto'>
          For Tithes, Offering and/or Donations
        </h2>
        <div className='mt-8 md:mt-16 w-full mx-auto space-y-20'>
          {features.map((feature) => (
            <div
              key={feature.category}
              className='flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse'
            >
              <div className='w-full aspect-[6/4] rounded-xl border border-border/50 basis-1/2'>
                <Image
                  src='/images/snap-scan.jpg'
                  alt='snap-scan'
                  className='w-full aspect-square rounded-lg object-cover shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-secondary'
                  width={600}
                  height={600}
                />
              </div>

              <div className='basis-1/2 shrink-0'>
                <span className='uppercase font-semibold tracking-tight'>
                  {feature.category}
                </span>
                <h4 className='my-3 text-3xl font-bold tracking-tighter'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground text-[17px]'>
                  {feature.details}
                </p>
                <Button
                  asChild
                  className='mt-6 rounded-full min-w-40 text-[15px]'
                >
                  <Link href={feature.tutorialLink}>
                    Pay with SnapScan <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <FAQ01 />
      </div>
    </div>
  );
}
