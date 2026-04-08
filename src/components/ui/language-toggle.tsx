'use client';

import { useLanguage } from '@/components/providers/language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className='flex items-center gap-1 border px-2.5 py-1 text-xs font-black uppercase tracking-widest transition-colors hover:bg-muted'
      aria-label='Toggle language'
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
