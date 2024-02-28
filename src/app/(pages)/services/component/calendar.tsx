import Image from 'next/image';
const stats = [
    { id: 1, name: 'Weekly and Prayer and Fasting Meeting @6:30pm', value: '06 February 2024' },
    { id: 2, name: 'Weekly and Prayer and Fasting Meeting @6:30pm', value: '13 February 2024' },
    { id: 3, name: 'Valentines Theme Services/New Memebership Class', value: '18 February 2024' },
    { id: 4, name: 'Weekly and Prayer and Fasting Meeting @6:30pm', value: '20 February 2024' },
    { id: 2, name: 'Baby Dedication/Board Meeting', value: '25 February 2024' },
    { id: 3, name: 'Weekly and Prayer and Fasting Meeting @6:30pm', value: '27 February 2024' },
    { id: 4, name: 'Monthly Membership Service', value: '29 February 2024' }
  ]

export default function Calendar() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
        <div className='px-6 lg:px-0 lg:pt-4'>
          <div className='mx-auto max-w-2xl'>
            <div className='max-w-lg'>
              <h1 className='mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
               February events
              </h1>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            </div>
          </div>
        </div>
        <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
          <div className='bg-background border h-[48rem]  relative rounded-lg shadow-sm'>
            <Image
              className='h-full w-full object-contain rounded-sm'
              src='/Calendar/Screenshot(50).png'
              alt='hero section image'
              layout='fill'
            />
          </div>
        {/*   <div className="mt-10 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href='#'
          className="btn btn-circle h-20 w-20"
        >
          ❮ 
        </a>
        <a href='#' className="btn btn-circle">
         next  ❯ 
        </a>
      </div> */}
        </div>
      </div>
    </section>
  );
}