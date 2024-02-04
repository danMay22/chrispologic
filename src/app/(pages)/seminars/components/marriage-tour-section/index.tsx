export default function MarriageTourSection() {
  return (
    <section className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14'>
      <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
            The Recharge Your Marriage 2024 Tour
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <ol
              role='list'
              className='mt-10 bg-white/60  grid grid-cols-2 gap-4'
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <li
                  key={i}
                  className='border p-4'
                  aria-label='Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST'
                >
                  <h4 className='text-lg font-semibold tracking-tight text-blue-900'>
                    Steven McHail
                  </h4>
                  <p className='mt-1 tracking-tight text-blue-900'>
                    Not so one-time payments
                  </p>
                  <p className='mt-1 font-mono text-sm text-slate-500'>
                    <time dateTime='2022-04-04T9:00AM-08:00'>9:00AM</time>{' '}
                    <time dateTime='2022-04-04T10:00AM-08:00'>10:00AM</time>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <img
            src='/images/seminars/marriage-seminars.jpg'
            alt=''
            className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
          />
        </div>
      </div>
    </section>
  );
}
