import { NavbarClient } from '@/components/navbar/navbarClient';
import { SidebarContainer } from '@/components/sidebar/sidebarContainer';
import { sidebarRoutes } from '@/utils/sidebarRoutes';

export default function ApplcationLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SidebarContainer routes={sidebarRoutes} />
      <div className="flex flex-col w-screen">
        <NavbarClient />
        {children}
      </div>
    </div>
  );
}
