const people = [
  {
    name: 'Bakhe Dlamini',
    role: 'Pastor',
    imageUrl: '/therapy_photo.jpg',
    bio: 'Bakhe is the senior founding pastor of Yonder Worship Centre. He is a world-class speaker, leader, Community Psychologist, and Author. He is a much-sought-after speaker and marriage therapist. He is well known throughout South Africa and beyond its borders with regards to his work on families and love relationships. Bakhe is part of Married at First Sight and XO (couples) Goals, which are two TV shows that broadcast on Mzansi Magic and DSTV. Bakhe runs a successful private practice in Sandton. He holds a degree in theology from Global University, Missouri, USA, and a Masters degree in community psychology from MAGU, Malawi.',
  },
  {
    name: 'Nokwanda Dlamini',
    role: 'Pastor',
    imageUrl: '/IMG.30.42_9ad4bbc8.jpg',
    bio: 'Nokwanda is a world-class leader and speaker. Alongside her husband, Bakhe, she runs their private practice in Sandton. She is a Community Psychologist, marriage and family Therapist. She holds a degree in social works from the University of KwaZulu-Natal and a Masters degree in Community Psychology from MAGU, Malawi. Nokwanda is part of the panel of experts cast for Married at First Sight SA, a popular TV show that broadcasts on Mzansi Magic and DSTV.',
  },
];
export default function Team() {
  return (
    <section className='py-20 isolate overflow-hidden bg-white px-4 lg:px-40'>
      <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
        <div className='max-w-2xl xl:col-span-2'>
          <h2 className='py-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our Pastors
          </h2>
        </div>
        <ul
          role='list'
          className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'
        >
          {people.map((person) => (
            <li
              key={person.name}
              className='flex flex-col gap-10 pt-12 sm:flex-row'
            >
              <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              />
              <div className='max-w-xl flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
