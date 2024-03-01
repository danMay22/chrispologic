import { ChurchIcon, Mail, PhoneIcon } from 'lucide-react';

export default function ChurchServices() {
  return (
    <section className='overflow-hidden bg-background py-10'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='relative'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <p className=' text-lg leading-8 text-gray-900'>
              “And above all these, put on love which binds everything together
              in perfect harmony. Let the peace of Christ rule in your hearts,
              to which indeed you were called in one body and be thankful.
              <br />
              Let the word of Christ dwell in you richly, teaching and
              admonishing one another in all wisdom, singing psalms and
              spiritual hymns, with thankfulness in your hearts to God.”
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-900'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
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
      </div>
    </section>
  );
}
