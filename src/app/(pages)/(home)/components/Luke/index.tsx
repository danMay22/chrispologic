import { ChurchIcon, Mail, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

function JoinUs() {
  return (
    <section
      className='
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative'
    >
      <div className='md:pr-[22rem]'>
        <p className='mt-5 text-lg leading-8 text-gray-900'>
          Now it came to pass on a certain day that he went into a ship with his
          disciples:
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
              <PhoneIcon className='h-7 w-6 text-gray-900' aria-hidden='true' />
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
      <div className='absolute -top-8 right-8 hidden md:block'>
        <Image
          src='/images/proposal_illustration.png'
          alt='proposal illustration'
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default JoinUs;
