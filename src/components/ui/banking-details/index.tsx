export default function BankingDetails() {
  return (
    <div className='mt-10'>
      <div className='lg:col-start-3 lg:row-end-1'>
        <h2 className='sr-only'>Our Banking Details</h2>
        <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
          <dl className='flex flex-wrap'>
            <div className='flex-auto pl-6 pt-6'>
              <dt className='text-base font-semibold leading-6 text-gray-900'>
                Our Banking Details
              </dt>
            </div>

            <div className='mt-6 flex w-full flex-none gap-x-2 border-t border-gray-900/5 px-6 pt-6'>
              <dt className='flex-none'>
                <span className='text-sm font-medium leading-6 text-foreground'>
                  FNB Bakhe Dlamini Entreprises
                </span>
              </dt>
            </div>
            <div className='flex w-full flex-none gap-x-2 px-6'>
              <dt className='flex-none'>
                <span className='text-sm leading-6 text-foreground'>
                  A/C No:
                </span>
              </dt>
              <dd className='text-sm leading-6 text-muted-foreground font-medium'>
                62876386882
              </dd>
            </div>
            <div className='flex w-full flex-none gap-x-2 px-6'>
              <dt className='flex-none'>
                <span className='text-sm leading-6 text-foreground'>
                  Branch:
                </span>
              </dt>
              <dd className='text-sm leading-6 text-muted-foreground font-medium'>
                251141
              </dd>
            </div>
            <div className='flex w-full flex-none gap-x-2 px-6'>
              <dt className='flex-none'>
                <span className='text-sm leading-6 text-foreground'>
                  Branch Name:
                </span>
              </dt>
              <dd className='text-sm leading-6 text-muted-foreground font-medium'>
                Clearwater
              </dd>
            </div>
            <div className='flex w-full flex-none gap-x-2 px-6 mb-6'>
              <dd className='text-sm leading-6 text-muted-foreground font-medium'>
                Mall, Jo&apos;burg
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
