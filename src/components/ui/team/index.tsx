import Image from 'next/image';

const people = [
  {
    name: 'Goerge Example',
    imageUrl: '/pexels-cottonbro-6276705.jpg',
    title: 'Senior Founding Pastor',
    bio: '',
  },
  {
    name: 'Wanda Example',
    imageUrl: '/pexels-pavel-danilyuk-8817483.jpg',
    title: 'Pastor',
    bio: '',
  },
];
export default function Team() {
  return (
    <div className='flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8'>
      <h2 className='mt-3 text-4xl sm:text-5xl font-bold tracking-tight'>
        Our Leardership
      </h2>
      <div className='mt-20 w-full grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-screen-lg mx-auto'>
        <p className='mt-4 text-base sm:text-lg'>
          <strong>George: </strong> He is a world-class speaker, leader,
          Community Psychologist, and Author. He is a much-sought-after speaker
          and marriage therapist. <br />
          He is well known throughout Australia and beyond its borders with
          regards to his work on families and love relationships. He is part
          of Married at First Sight and XO (couples) Goals, which are two TV
          shows that broadcast on DSTV. He also runs a successful
          private practice in london. He holds a degree in theology from Global
          University, Missouri, USA, and a Masters degree in community
          psychology from MAU (where he met he's wife).
        </p>

        <p className='mt-4 text-base sm:text-lg'>
          <strong>Wanda: </strong> is a world-class leader and speaker.
          Alongside her husband, she runs their private practice in
          Sandton. She is a Community Psychologist, marriage and family
          Therapist. She holds a degree in social works from the University of
          Australia and a Masters degree in Community Psychology from MAU,
          she is also is part of the panel of experts cast for Married at
          First Sight, a popular TV show that broadcasts on
          DSTV.
        </p>
      </div>
      <div className='mt-20 w-full grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-screen-lg mx-auto'>
        {people.map((member) => (
          <div key={member.name} className='text-center'>
            <Image
              src={member.imageUrl}
              alt={member.name}
              className='h-60 w-60 rounded-e-md object-cover mx-auto bg-secondary shadow-[0_35px_35px_rgba(0,0,0,0.25)]'
              width={120}
              height={120}
            />
            <h3 className='mt-4 text-lg font-bold'>{member.name}</h3>
            <p className=''>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
