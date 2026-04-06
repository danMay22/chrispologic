'use client';

import { useLanguage } from '@/components/providers/language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className='rounded-md border px-2 py-1 text-xs font-semibold hover:bg-accent transition-colors'
      aria-label='Toggle language'
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
