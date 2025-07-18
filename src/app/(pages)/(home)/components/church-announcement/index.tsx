import { WordRotateDemo } from '@/components/demo/word-rotate';
import Image from 'next/image';

const services = [
  {
    icon: '/pexels-rquiros-2330141.jpg',
    title: 'Fresh Encounter Conference',
    description:
      'Acts 43-44: Everyone was filled with awe at the many wonders and signs performed by the apostles. 44 All the believers were together and had everything in common',
    href: '/services',
  },
  {
    icon: '/pexels-yungsaac-2305084.jpg',
    title: 'Sundays Services',
    description:
      'Psalm 95: Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation',
    href: '/services',
  },
  {
    icon: '/pexels-jibarofoto-2014774.jpg',
    title: 'Kids Sunday Service',
    description:
      "Luke 18:16-17: Jesus called the children to him and said, 'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these'",
    href: '/services',
  },
  {
    icon: '/pexels-pixabay-372326.jpg',
    title: 'Tuesday Prayer & Fasting',
    description:
      'Isaiah 58:6-7: Fasting is about action, and it calls us to stand with the poor and against injustice.',
    href: '/services',
  },
];

export default function Announce() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-black tracking-tight text-center'>
          <WordRotateDemo />
        </h1>
        <p className='md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500'>
          All of our services are designed to help your spiritual, growth and
          help you go Yonder.
        </p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12'>
          {services.map((feature) => (
            <div key={feature.title}>
              <Image
                src={feature.icon}
                alt={feature.title}
                className='w-full aspect-square rounded-lg object-cover bg-secondary'
                width={600}
                height={600}
              />
              <h3 className='mt-4 text-lg font-bold'>{feature.title}</h3>
              <p className='mt-3 text-muted-foreground'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
