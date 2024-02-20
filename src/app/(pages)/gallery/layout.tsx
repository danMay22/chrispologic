import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery Page',
  description: 'This is the gallery page of the app',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return { children };
}
