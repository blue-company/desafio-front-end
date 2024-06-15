import { MobileSidebar } from '../sidebar/mobileSidebar';
import { DesktopNavbar } from './desktopNavbar';
import { MobileNavbar } from './mobileNavbar';

interface NavbarProps {
  currentRoute: string;
  languages: {
    id: number;
    name: string;
    value: string;
    flag: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
  }[];
  routes: {
    id: number;
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
  logout: () => void;
}

export function NavbarContainer({ currentRoute, languages, routes, logout }: NavbarProps) {
  return (
    <nav className="bg-white flex justify-between gap-6 xl:gap-8 w-full py-6 px-2 xs:px-4 md:px-10 items-center">
      <div className="md:hidden">
        <MobileSidebar routes={routes} />
      </div>
      <h2 className="text-[#151D48] text-xl xs:text-2xl sm:text-3xl font-bold">{currentRoute}</h2>
      <DesktopNavbar languages={languages} logout={logout} />
      <MobileNavbar languages={languages} logout={logout} />
    </nav>
  );
}
