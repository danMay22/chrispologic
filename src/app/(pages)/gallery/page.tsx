'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ImagesGrid } from './components/images-grid';
import SelectTab from './components/select-tab';
import { GALLERY } from './data';

export default function Page() {
  const [data] = useState<Record<string, string[]>>(GALLERY);
  const folders = ['bakhe-dlamini', 'bootcamp', 'seminars'];
  const [selectedFolder, setSelectedFolder] = useState(
    folders[0].toLowerCase(),
  );

  return (
    <div className='bg-background bg-cover min-h-96'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-3xl font-light tracking-tight text-gray-900'>
          Picture Gallery
        </h2>

        <div className='pb-6'>
          <SelectTab folders={folders} />

          <div className='hidden sm:block'>
            <div className='border-b border-gray-200 py-4'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                {folders.map((folder) => (
                  <span
                    onClick={() => setSelectedFolder(folder.toLowerCase())}
                    key={folder}
                    className={cn(
                      false
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize',
                    )}
                    aria-current={false ? 'page' : undefined}
                  >
                    {folder.replace('-', ' ')}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <ImagesGrid photos={data[selectedFolder]} />
      </div>
    </div>
  );
}
