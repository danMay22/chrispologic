import { ChurchIcon, Mail, PhoneIcon } from 'lucide-react';

export default function JoinUs() {
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
          <h1 className='mt-12 text-4xl sm:mt-5 xl:text-[62px] sm:text-[4px] text-[50px] font-light tracking-tight text-gray-900 sm:text-6xl'>
            Luke 8:22
          </h1>
          <p className='mt-5 text-lg leading-8 text-gray-900'>
            Now it came to pass on a certain day that he went into a ship with
            his disciples:
            <br />
            and he said unto them, Let us go over to the other side of the lake.
            And they launched forth.
          </p>
          <dl className='mt-5 space-y-4 text-base leading-7 text-gray-900'>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Address </span>
                <ChurchIcon
                  className='h-7 w-6 text-gray-900'
                  aria-hidden='true'
                />
              </dt>
              <dd>
                917 Morkels CI, Halfway House,<br></br>
                Midrand, Unit 72, South Africa
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Telephone</span>
                <PhoneIcon
                  className='h-7 w-6 text-gray-900'
                  aria-hidden='true'
                />
              </dt>
              <dd>
                <a className='hover:text-white' href='tel:+27 73 841 8903'>
                  +27 73 841 8903
                </a>
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Email</span>
                <Mail className='h-7 w-6 text-gray-900' aria-hidden='true' />
              </dt>
              <dd>
                <a
                  className='hover:text-white'
                  href='mailto:info@yonderworshipcentre.co.za'
                >
                  info@yonderworshipcentre.co.za
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 px-8 pb-8 pt-8 sm:pt-10 lg:pt-20'>
        <img
          className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-2xl'
          src='./images/home/IMG-20231027-WA0068.jpg'
          alt=''
        />
      </div>
    </div>
  );
}
