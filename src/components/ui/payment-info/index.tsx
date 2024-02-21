import Image from 'next/image';
import BankingDetails from '../banking-details';
import ReferenceCode from '../reference-code';
import SnapScanCard from '../snap-scan-card';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type PaymentInfoProps = {
  product: Product;
};

export default function PaymentInfo({ product }: PaymentInfoProps) {
  return (
    <>
      <div className='bg-background'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          {/* Book details */}
          <div className='lg:max-w-lg lg:self-end'>
            <h1 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
              {product.name}
            </h1>

            <section aria-labelledby='information-heading' className='mt-4'>
              <h2 id='information-heading' className='sr-only'>
                Product information
              </h2>
              <div className='flex items-center'>
                <p className='text-lg font-semibold text-foreground sm:text-xl'>
                  R{product.price}
                </p>
              </div>

              <div className='mt-4 space-y-6'>
                <p className='text-base text-muted-foreground'>
                  {product.description}
                </p>
              </div>
            </section>
          </div>

          {/* Book image */}
          <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 '>
            <div className='relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-foreground/10'>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className='h-full w-full object-contain object-center'
                layout='fill'
              />
            </div>
          </div>

          {/* Book form */}
          <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
            <section aria-labelledby='options-heading'>
              <h2 id='options-heading' className='sr-only'>
                Product options
              </h2>

              <form>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Your reference code
                  </p>
                  <ReferenceCode />
                </div>
                <BankingDetails />
                <SnapScanCard />
              </form>
            </section>
          </div>
        </div>
      </div>
      <a
        className='fixed bottom-4 right-4'
        aria-label='Chat on WhatsApp'
        href='https://wa.link/bakhedlaminiconsultancy'
      >
        <Image
          alt='Chat on WhatsApp'
          src='/images/download.png'
          width={112}
          height={40}
        />
      </a>
    </>
  );
}
