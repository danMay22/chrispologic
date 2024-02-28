export default function Note() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
            Our Mission
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            For us, church should be meaningful,
            <br />
            enriching, fun to be at, and simple.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          <div>
            <h3 className='border-l border-indigo-600 pl-6 font-semibold text-gray-900'></h3>
            <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
              <p>
                Our job is not to take from you but to empower you to fulfill
                your God-given assignment.
              </p>
            </address>
          </div>
          <div>
            <h3 className='border-l border-indigo-600 pl-6 font-semibold text-gray-900'></h3>
            <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
              <p>
                Your life cannot remain in the same place. God has called you to
                go to a place Yonder. It's time to cross over to the other side.
              </p>
            </address>
          </div>
          <div>
            <h3 className='border-l border-indigo-600 pl-6 font-semibold text-gray-900'></h3>
            <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
              <p>
                God wants you to be happy, to succeed in life, to be able to
                take care of your family...
              </p>
            </address>
          </div>
          <div>
            <h3 className='border-l border-indigo-600 pl-6 font-semibold text-gray-900'></h3>
            <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
              <p>
                May you go further in your career, business, family, marriage,
                spirituality, finances, etc.
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
