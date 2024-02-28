export default function AboutUsDescriptionSection() {
  return (
    <section className='isolate overflow-hidden bg-white px-4 lg:px-40'>
      <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          About Us
        </h1>
        <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
          Yonder Worship Centre is a dynamic multicultural church based in
          Midrand, South Africa. While deeply spiritual, Yonder is a fun place
          to be. Services at Yonder are a combination of powerful preaching and
          world-class music ministry. Yonder is a church of excellence. Yonder
          is a fast-growing church with a massive vision. The core focus of
          Yonder Worship Center is empowerment; people fulfill their God-given
          purpose. Everyone that comes to <strong>Yonder</strong> has to go
          Yonder with regards to their spiritual life, career, finances, family,
          marriage, dreams, etc. more info and contacts...{' '}
          <a className='hover:text-red-800' href='/services'>
            <strong> here.</strong>
          </a>
        </p>
      </div>
    </section>
  );
}
