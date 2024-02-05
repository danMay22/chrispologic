import Link from 'next/link';

export const footerLinks = [
  {
    title: 'Address: ',

    links: [
      {
        title:
          ' 6 Albury Road, Corner Jan Smut, Dunkeld West, Hyde Park. Albury Office Park, Unit 4, Suit no.61',
        url: '/contact',
      },
    ],
  },
  {
    title: ' Landline: ',
    links: [{ title: '0115933275', url: '/contact' }],
  },
  {
    title: ' Cell: ',
    links: [{ title: ' 0730492342', url: '/contat' }],
  },
];

export default function SiteFooter() {
  return (
    <footer className='flex flex-col text-black-100 border-t border-white-400 bg-zinc-800'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-10 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <p className='font-semibold text-xl text-white'>Bakhe Dlamini</p>
        </div>

        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className='flex flex-col gap-6 text-base min-w-[170px]'
            >
              <h3 className='font-bold text-white'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-400'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t text-gray-400 border-gray-400 sm:px-16 px-6 py-10'>
        <p> &copy; 2023 designed by Dan Mayunga. All rights reserved.</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-400'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-400'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
