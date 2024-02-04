import { cn } from '@/lib/utils';
import fs from 'fs';
import { Metadata } from 'next';
import Link from 'next/link';
// import Carousel from '../component/UI/carousel';
import { ImagesGrid } from './components/images-grid';

const path = 'public/images/gallery';

const folders = fs.readdirSync(path).filter((file) => {
  return fs.statSync(`${path}/${file}`).isDirectory();
});

export const metadata: Metadata = {
  title: 'Gallery Page',
  description: 'This is the gallery page of the app',
};

export default function Page({ searchParams }: any) {
  const selectedFolder = (searchParams.tabs || folders[0])?.toLowerCase();

  const photoPath = `${path}/${selectedFolder}`;
  const photos = fs
    .readdirSync(photoPath)
    .filter((file) => {
      return !fs.statSync(`${photoPath}/${file}`).isDirectory();
    })
    .map((photo) => `${photoPath}/${photo}`.replace('public', ''));

  return (
    <div className='bg-background bg-cover min-h-96'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-3xl font-light tracking-tight text-gray-900'>
          Picture Gallery
        </h2>

        <div className='pb-6'>
          <div className='sm:hidden'>
            <label htmlFor='tabs' className='sr-only'>
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id='tabs'
              name='tabs'
              className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              defaultValue={folders.find((folder) => folder)}
            >
              {folders.map((folder) => (
                <option key={folder}>{folder}</option>
              ))}
            </select>
          </div>
          <div className='hidden sm:block'>
            <div className='border-b border-gray-200 py-4'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                {folders.map((folder) => (
                  <Link key={folder} href={`?tabs=${folder}`}>
                    <span
                      key={folder}
                      className={cn(
                        false
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                      )}
                      aria-current={false ? 'page' : undefined}
                    >
                      {folder}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <ImagesGrid photos={photos}>
          <p>SSS</p>
          {/* <Carousel photos={photos} /> */}
        </ImagesGrid>
      </div>
    </div>
  );
}
