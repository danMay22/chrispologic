const events = [
  {
    id: 1,
    href: '/services',
    src: '/Poster/sundaypost.jpg',
  },
  {
    id: 2,
    href: '/services',
    src: '/Poster/CHURCH CONFERENCE.jpg',
  },
  {
    id: 3,
    href: '/services',
    src: '/Poster/AnnouncementKidsChurch.jpg',
  },
];

export default function Announce() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Our Events
          </h2>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8'>
          {events.map((product) => (
            <div key={product.id} className='group relative'>
              <div className='h-98 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto'>
                <img
                  src={product.src}
                  className='h-full w-full object-cover object-center sm:object-cover'
                />
              </div>
              <h3 className='mt-4 text-base font-semibold text-gray-900'>
                <a href={product.href}></a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
