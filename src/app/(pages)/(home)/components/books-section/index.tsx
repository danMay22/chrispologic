import { BOOKS } from '@/constants/books';
import { InfoIcon } from 'lucide-react';
import BookCard from './book-card';

export default function BooksSection() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40'>
        <div className='py-6'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold tracking-tight'>Books</h2>

            <div className='rounded-md bg-muted-foreground/10 p-4'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <InfoIcon
                    className='h-5 w-5 text-muted-foreground'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3'>
                  <h3 className='text-sm font-medium text-muted-foreground'>
                    {"Buy any of Bakhe Dlamini's books. Each copy: R300"}
                  </h3>
                  <div className='mt-2 text-sm text-muted-foreground/90'>
                    <ul role='list' className='list-disc space-y-1 pl-5'>
                      <li>Combo offer: R1200</li>
                      <li>
                        We deliver nation wide via PEP Paxi at a fee of R100
                      </li>
                      <li>eBook: R200</li>
                      <li>
                        Once you have made payment, forward proof of payment via
                        our Whatsapp button, you will be assisted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative grid sm:grid-cols-4 grid-cols-2 gap-8 mt-6'>
          {BOOKS.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              className='col-span-1'
              aspectRatio='portrait'
              width={250}
              height={330}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
