'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className='relative bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium'>
      <span>
        🙌 Join us this Sunday at 9:00 AM &amp; 11:00 AM — Reality Church Worship, Midrand.{' '}
        <a href='/services' className='underline underline-offset-2 hover:opacity-80 font-semibold'>
          View service times →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className='absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity'
        aria-label='Dismiss banner'
      >
        <X className='h-4 w-4' />
      </button>
    </div>
  );
}
