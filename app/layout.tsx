import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { createClient } from '@/supabase/server';
import NavBar from '@/components/Nav/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'A personal portfolio website to showcase projects and skills.',
  authors: [{ name: 'Arturo Ramirez', url: 'https://https://github.com/ArturoGabrielRamirezyour-website.com' }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()


  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} min-w-[270px]`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased min-w-[270px]`}
      >
        <main className='flex flex-col min-h-dvh'>
          <NavBar user={user} />
          {children}
        </main>
      </body>
    </html>
  );
}
