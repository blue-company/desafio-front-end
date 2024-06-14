import { NavbarClient } from '@/components/navbar/navbarClient';
import { Sidebar } from '@/components/sidebar/sidebar';
import { sidebarRoutes } from '@/utils/sidebarRoutes';

export default function ApplcationLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar routes={sidebarRoutes} />
      <div className="flex flex-col w-screen">
        <NavbarClient />
        {children}
      </div>
    </div>
  );
}
