'use client';

import { LanguageToggle } from '@/components/ui/language-toggle';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../button';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className='bg-background sticky top-0 z-40 w-full border-b'>
      <div className='container flex h-16 items-center sm:justify-between sm:space-x-0'>
        <div className='flex gap-6 md:gap-10 justify-between w-full items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image src='/logo/logo.jpg' alt='logo' width={50} height={50} />
          </Link>
          <nav className='lg:flex gap-6 hidden'>
            {siteConfig.mainNav.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  (nav.href === '/' ? pathname === nav.href : pathname.includes(nav.href || ''))
                    ? 'text-muted-foreground'
                    : '',
                )}
              >
                {nav.title}
              </Link>
            ))}
          </nav>
          <div className='flex items-center gap-1 border-l pl-3'>
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
                  {siteConfig.mainNav.map((nav) => (
                    <Link
                      key={nav.href}
                      href={nav.href}
                      className='text-sm font-medium transition-colors hover:text-primary w-full block py-2'
                    >
                      {nav.title}
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
