'use client';

import { useLanguage } from '@/components/providers/language';

export default function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className='border-t bg-background'>
      <div className='mx-auto px-10 py-3'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Chrispology. {t('footer.rights')}
          </p>
          <div className='flex gap-6 text-sm text-muted-foreground'>
            <a href='/' className='hover:text-foreground transition-colors'>{t('footer.home')}</a>
            <a href='/' className='hover:text-foreground transition-colors'>{t('footer.shop')}</a>
            <a href='/contact' className='hover:text-foreground transition-colors'>{t('footer.story')}</a>
            <a href='/contact#faq' className='hover:text-foreground transition-colors'>{t('footer.faq')}</a>
            <a href='#' className='hover:text-foreground transition-colors'>{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
