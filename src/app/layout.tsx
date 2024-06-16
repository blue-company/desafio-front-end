import { Toaster } from '@/components/ui/toaster';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Blue Company',
    template: '%s | Blue Company'
  },
  description:
    'System developed by Henrique Braga that was subjected to a technical test for entry into the company Blue Company',
  authors: {
    name: 'Henrique Braga',
    url: 'https://henriquebraga.vercel.app/pt'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
