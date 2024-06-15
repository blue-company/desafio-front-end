'use client';
import { SelectLanguages } from '@/utils/selectLanguages';
import { sidebarRoutes } from '@/utils/sidebarRoutes';
import { usePathname } from 'next/navigation';
import { NavbarContainer } from './navbarContainer';

export function NavbarClient() {
  const currentRoute = usePathname();

  const test = currentRoute === '/' ? 'Dashboard' : 'Leaderboard';

  return <NavbarContainer currentRoute={test} languages={SelectLanguages} routes={sidebarRoutes} />;
}
