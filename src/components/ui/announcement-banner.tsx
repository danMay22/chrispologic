'use client';

import { useLanguage } from '@/components/providers/language';
import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();
  if (!visible) return null;
  return (
    <div className='relative bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium'>
      <span>
        🛍️ {t('banner.text')}{' '}
        <a href='/' className='underline underline-offset-2 hover:opacity-80 font-semibold'>
          {t('banner.cta')}
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className='absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity'
        aria-label='Dismiss'
      >
        <X className='h-4 w-4' />
      </button>
    </div>
  );
}
