import { WordRotateDemo } from '@/components/demo/word-rotate';
import Image from 'next/image';

const services = [
  {
    icon: '/Poster/event1.jpg',
    title: 'Fresh Encounter Conference',
    description:
      'Acts 43-44: Everyone was filled with awe at the many wonders and signs performed by the apostles. 44 All the believers were together and had everything in common',
    href: '/services',
  },
  {
    icon: '/Poster/sundaypost.jpg',
    title: 'Sundays Services',
    description:
      'Psalm 95: Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation',
    href: '/services',
  },
  {
    icon: '/Poster/CHURCH CONFERENCE.jpg',
    title: 'Tuesday Prayer & Fasting',
    description:
      'Isaiah 58:6-7: Fasting is about action, and it calls us to stand with the poor and against injustice.',
    href: '/services',
  },
  {
    icon: '/Poster/AnnouncementKidsChurch.jpg',
    title: 'Kids Sunday Service',
    description:
      "Luke 18:16-17: Jesus called the children to him and said, 'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these'",
    href: '/services',
  },
];

export default function Announce() {
  return (
    <>
      <div className='md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto '>
        <h1 className='md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500'>
          <WordRotateDemo />
        </h1>
        <p className='md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500'>
          All of our services are designed to help your business stand out
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
          {services.map((service) => (
            <div
              key={service.title}
              className='flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md'
            >
              <Image
                src={service.icon}
                width={100000}
                height={100000}
                className='object-contain bg-gray-100 p-4 w-full h-40 rounded-md'
                alt='image'
              />
              <h1 className='text-xl font-medium'>{service.title}</h1>
              <p className='text-gray-500'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
