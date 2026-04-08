import { ThemeProvider } from '@/components/providers/theme';
import { LanguageProvider } from '@/components/providers/language';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import SiteFooter from '@/components/ui/site-footer';
import { SiteHeader } from '@/components/ui/site-header';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <AnnouncementBanner />
              <div className='flex-1'>{children}</div>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
