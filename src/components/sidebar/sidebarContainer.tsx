import { DesktopSidebar } from './desktopSidebar';

interface SidebarProps {
  routes: {
    id: number;
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export function SidebarContainer({ routes }: SidebarProps) {
  return (
    <>
      <DesktopSidebar routes={routes} />
    </>
  );
}
