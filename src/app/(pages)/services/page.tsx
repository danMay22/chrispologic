import Calendar from './component/calendar';
import Contact from './component/contact';

const features = [
  {
    name: 'Sundays: ',
    description: '10:00AM-12:00PM',
  },
  {
    name: 'Tuesday Prayer, Virtual',
    description: '6:30PM-7:00PM.',
  },
  {
    name: 'Gauteng',
    description:
      '917 Morkels CI, Halfway House, Midrand, Unit 72, South Africa',
  },
];

const events = [
  {
    name: 'Sundays',
    description:
      'The Bible says to rejoice in the house of the Lord. And, We at Yonder believe we are a fun and joyful church whilst remaining deeply spiritual. We love and enjoy spending time with God, with our world-class music ministry and powerful, insightful teaching (preaching).',
    imageSrc: '/Invites/invite.png',
  },
  {
    name: 'Tuesdays',
    description:
      'We also have online prayers every tuesday, for prayers requests please contact +27 73 841 8903 and join us as we pray together as the Bible has instructed us in Matthew 18:20',
    imageSrc: '/Invites/tuesdayinvite.jpg',
  },
  {
    name: 'Kids',
    description:
      'With in mind the importance of the next generation, we also believe in our children having not only the best services we have available (in terms of reliable deputies) but also teaching and soul-framing guidance to get them set on the ways and truth of our Lord.',
    imageSrc: '/Invites/KIDS.jpg',
  },
  {
    name: 'Others',
    description:
      'We have special events such as marriage camps and other activities alike, so keep an eye out for annoucements here or on our social platforms.',
    imageSrc: '/Invites/INVITE_cam.jpg',
  },
];

export default function Services() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='max-w-3xl'>
            <h2 className='text-5xl font-light tracking-tight text-gray-900 sm:text-4xl'>
              We would like to
            </h2>
            <h3 className='font-light tracking-tight text-red-700 sm:text-4xl'>
              extend these invitations to you
            </h3>
            <p className='mt-4 text-gray-500'>
              See some of our general events throughout the year and special
              ones too
            </p>
          </div>

          <div className='mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16'>
            {events.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
              >
                <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-2 text-sm text-gray-500'>
                    {feature.description}
                  </p>
                </div>
                <div className='flex-auto lg:col-span-7 xl:col-span-8'>
                  <div className='aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100'>
                    <img
                      src={feature.imageSrc}
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-white mt-10 sm:py-22'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <Contact />
          </div>
        </div>
        <Calendar />
      </div>
    </section>
  );
}
