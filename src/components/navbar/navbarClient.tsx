'use client';
import { SelectLanguages } from '@/utils/selectLanguages';
import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';

export function NavbarClient() {
  const currentRoute = usePathname();

  const test = currentRoute === '/' ? 'Dashboard' : 'Leaderboard';

  return <Navbar currentRoute={test} languages={SelectLanguages} />;
}
