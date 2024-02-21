import Image from 'next/image';

export default function SnapScanCard() {
  return (
    <div className='mt-10'>
      <div className='lg:col-start-3 lg:row-end-1'>
        <h2 className='sr-only'>Scan or Click the QR code Here</h2>
        <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
          <dl className='flex flex-wrap'>
            <div className='flex-auto pl-6 pt-6'>
              <dt className='text-base font-semibold leading-6 text-gray-900'>
                Scan or Click the QR code Here
              </dt>
            </div>

            <div className='my-6 flex w-full flex-none gap-x-2 border-t border-gray-900/5 px-6 pt-6'>
              <div className='flex-none relative w-full h-60'>
                <a href='https://pos.snapscan.io/qr/ol493Oxh' target='_blank'>
                  <Image
                    src='/images/payment/snap-scan.jpg'
                    alt='snap-scan'
                    className='h-full w-full object-contain object-center sm:h-full sm:w-full'
                    layout='fill'
                  />
                </a>
              </div>
            </div>
          </dl>
        </div>
        <p className='mt-5 text-xl text-foreground'>
          Please forward proof of payment via Whatsapp
          <a
            href='https://pos.snapscan.io/qr/ol493Oxh'
            className='text-red-800'
          >
            {' '}
            here
          </a>
          <br />
          or at <strong>seminars@bakhedlamini.co.za</strong>
        </p>
      </div>
    </div>
  );
}
