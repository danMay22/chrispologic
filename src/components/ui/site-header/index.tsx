'use client';

import { LanguageToggle } from '@/components/ui/language-toggle';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useLanguage } from '@/components/providers/language';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../button';

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { title: t('nav.ourStory'), href: '/contact' },
    { title: t('nav.details'), href: '/details' },
  ];

  return (
    <header className='bg-background sticky top-0 z-40 w-full border-b'>
      <div className='w-full px-10 flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <span className='font-sans text-[2rem] font-black tracking-widest uppercase border border-current px-2 py-0.5'>
            Chrispology
          </span>
        </Link>

        <nav className='lg:flex gap-6 hidden absolute left-1/2 -translate-x-1/2'>
          {navItems.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className={cn(
                'text-[1.1rem] font-bold transition-colors hover:text-primary',
                pathname.startsWith(nav.href) ? 'text-muted-foreground' : '',
              )}
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2 border-l pl-3'>
          <LanguageToggle />
          <ModeToggle />
          <div className='lg:hidden ml-1'>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <MenuIcon className='h-6 w-6' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-screen rounded-t-none space-y-2'>
                {navItems.map((nav) => (
                  <Link
                    key={nav.href}
                    href={nav.href}
                    className='text-sm font-bold transition-colors hover:text-primary w-full block py-2'
                  >
                    {nav.title}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
