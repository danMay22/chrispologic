import Image from 'next/image';
const jobOpenings = [
  {
    id: 1,
    role: 'Public Speaker',
    href: '#',
    description:
      'Bakhe Dlamini is a highly experienced and much sought after public speaker. He is known for his captivating, exciting, and powerful delivery on stage.',
    location:
      'You can send your invite via our Whatsapp button or bookings@bakhedlamini.co.za',
  },
];

export default function PublicSpeaker() {
  return (
    <section aria-labelledby='information-heading' className='mt-4'>
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
          <div className='relative aspect-[7/5] w-[30rem] h-[35rem] max-w-none rounded-2xl bg-background'>
            <Image
              src='/images/about-us/public-speaker.jpg'
              alt=''
              className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
              layout='fill'
            />
          </div>
          <div className='w-full lg:max-w-xl lg:flex-auto'>
            <h3 className='sr-only'>Public Speaking</h3>
            <ul className='-my-8 divide-y divide-gray-100'>
              {jobOpenings.map((opening) => (
                <li key={opening.id} className='py-8'>
                  <dl className='relative flex flex-wrap gap-x-3'>
                    <dt className='sr-only'>Role</dt>
                    <dd className='mt-5 sm:mt-10 w-full flex-none text-lg font-semibold tracking-tight text-gray-900'>
                      {opening.role}
                      <span className='absolute inset-0' aria-hidden='true' />
                    </dd>
                    <dt className='sr-only'>Description</dt>
                    <dd className='mt-2 w-full flex-none text-base leading-7 text-gray-600'>
                      {opening.description}
                    </dd>
                    <dt className='sr-only'>Book: </dt>
                    <dd className='mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500'>
                      <svg
                        viewBox='0 0 2 2'
                        className='h-0.5 w-0.5 flex-none fill-gray-300'
                        aria-hidden='true'
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
