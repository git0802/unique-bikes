import { Barlow } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout/Layout';

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Unique bikes</title>
      </head>
      <body className={`min-h-[100dvh] ${barlow.className}`} id="main">
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
