import Team from '@/components/ui/team';
import { Blocks, HeartHandshake, MicVocal, UserRound } from 'lucide-react';
import Image from 'next/image';
import BannerSection from './components/banner-section';

export default function AboutPage() {
  return (
    <section className='py-32'>
      <div className='container flex flex-col gap-28'>
        <div className='flex flex-col gap-7'>
          <BannerSection />
          <h1 className='text-4xl font-semibold lg:text-7xl'>
            Empowers, support and help share Christ's love through worship,
            outreach, and service.
          </h1>
          <p className='max-w-xl text-lg'>
            Building strong relationships - creating an environment where people
            can form meaningful connections, support each other, and grow
            together as a spiritual family.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <Image
            src={'/christ.jpeg'}
            alt='clock'
            className='w-full aspect-square rounded-lg object-cover bg-secondary'
            width={600}
            height={600}
          />
          <div className='flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10'>
            <p className='text-2xl text-muted-foreground'>OUR MISSION</p>
            <p className='text-lg font-medium'>
              At Yonder, we are more than just a church - we are a vibrant
              family united in our love for God. Nestled in the heart of
              Midrand, South Africa, we celebrate our diversity through our
              multicultural congregation that brings together people from all
              walks of life. We believe that spirituality and joy go hand in
              hand. Our services are a powerful fusion of dynamic preaching that
              touches hearts and transforms lives, complemented by an
              exceptional music ministry that raises the standard of worship.
              Excellence is not just a goal at Yonder - it's who we are. In
              everything we do, from our weekly services to our community
              outreach, we strive to honor God through our commitment to
              excellence. As a rapidly growing congregation, we are driven by a
              bold and ambitious vision. We believe that God has called us to
              make a lasting impact not just in Midrand, but throughout South
              Africa and beyond. Our growth is not just in numbers, but in the
              depth of our faith, the strength of our community, and the reach
              of our influence. Together, we are building a spiritual home where
              everyone is welcome, where faith is lived out with authenticity,
              and where lives are transformed through the power of God's love.
            </p>
          </div>
        </div>
        <Team />
        <div className='flex flex-col gap-6 md:gap-20'>
          <div className='max-w-xl'>
            <h2 className='mb-2.5 text-3xl font-semibold md:text-5xl'>
              We at Yonder are committed to:
            </h2>
            <p className='text-muted-foreground'>
              A focus on spiritual growth and discipleship throughout all of our
              ministries. With main goal of helping members deepen their faith
              and relationship with God through services, worship, prayer, and
              Bible study.
            </p>
          </div>
          <div className='grid gap-10 md:grid-cols-4'>
            <div className='flex flex-col'>
              <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent'>
                <MicVocal className='size-8' />
              </div>
              <h3 className='mb-3 mt-2 text-lg font-semibold'>
                Music Ministry: <br />
                Worship Team
              </h3>
              <p className='font-medium text-muted-foreground'>
                {' '}
                Our Worship and Music Ministry create an atmosphere of authentic
                worship that transcends cultural boundaries and brings people
                into God's presence. With skilled musicians and vocalists who
                understand both the technical and spiritual aspects of leading
                worship. The team aim to incorporate diverse musical styles that
                reflect the congregation's multicultural makeup while
                maintaining excellence in execution. Regular rehearsals,
                spiritual devotions, and technical training sessions are
                essential to maintain high standards.
                <br /> contact us if you'd like to join the team or for more
                information.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent'>
                <UserRound className='size-8' />
              </div>
              <h3 className='mb-3 mt-2 text-lg font-semibold'>
                The Welcome Ministry: <br />
                Hospitality squad
              </h3>
              <p className='font-medium text-muted-foreground'>
                {' '}
                This team serves as the church's first point of contact,
                creating an environment where every visitor feels valued and
                welcomed from the moment they arrive. This ministry develop a
                systematic approach to greeting, from the parking lot to the
                sanctuary, with trained volunteers who can assist newcomers,
                answer questions, and help people find their way. The team also
                establish a follow-up system for first-time visitors, including
                welcoming quick session, connection cards, and personal
                follow-up calls or visits (if need be).
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent'>
                <HeartHandshake className='size-8' />
              </div>
              <h3 className='mb-3 mt-2 text-lg font-semibold'>
                Community Outreach Programs:
                <br />
                Moving the needle
              </h3>
              <p className='font-medium text-muted-foreground'>
                Focus on meeting both spiritual and practical needs in Midrand
                and surrounding areas. The ministry will identify specific
                community needs and develop targeted programs such as food
                distribution, educational support, skills development workshops,
                and counseling services. Building partnerships with local
                organizations and maintaining consistent engagement with the
                community helps establish the church as a reliable source of
                support and hope.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent'>
                <Blocks className='size-8' />
              </div>
              <h3 className='mb-3 mt-2 text-lg font-semibold'>
                The Youth and Children's Ministry: <br />
                The team for the future
              </h3>
              <p className='font-medium text-muted-foreground'>
                create age-appropriate programs that make faith relevant and
                exciting for young people. This includes developing curriculum
                that balances biblical teaching with practical life application,
                organizing engaging activities that foster spiritual growth, and
                training dedicated teachers who can mentor young people
                effectively.
              </p>
            </div>
          </div>
        </div>
        <div className='grid gap-10 md:grid-cols-2'>
          <div>
            <p className='mb-10 text-sm font-medium text-muted-foreground'>
              JOIN ANY OUR TEAM
            </p>
            <h2 className='mb-2.5 text-3xl font-semibold md:text-5xl'>
              And together, we&apos;re going to change lifes and make real
              impact.
            </h2>
          </div>
          <div>
            <Image
              src={'/images/gallery/Church Events/IMG-20231027-WA0004.jpg'}
              alt='clock'
              className='mb-6 max-h-36 w-full rounded-xl object-cover'
              width={600}
              height={600}
            />
            <p className='text-muted-foreground'>
              And we&apos;re looking for the right people to help us do it. If
              you&apos;re passionate about chirst&apos;s love and the desire to
              help make change in the world, this might be the place for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  /* 
import Team from '@/components/ui/team';
import { Metadata } from 'next';
import AboutUsDescriptionSection from './components/about-description-section';
import ChurchServices from './components/church';
import { default as Note } from './components/mission';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of the app',
};

export default function Page() {
  return (
    <>
      <BannerSection />

      <AboutUsDescriptionSection />

      <Team />

      <Note />

      <ChurchServices />
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
      <div className='bg-white py-5 sm:py-11'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl flex justify-between items-right'></div>
        </div>
      </div>
    </>
  );
}
*/
}
