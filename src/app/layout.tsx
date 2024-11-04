import { Karla } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const recoleta = localFont({
  variable: '--font-recoleta',
  src: [
    {
      path: '../../public/fonts/Alliance.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export const metadata: Metadata = {
  title: 'From South To South',
  description: 'FSTS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${recoleta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
