import { Playfair_Display } from 'next/font/google';

export const fontSans = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
});
