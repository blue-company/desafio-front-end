import { Menu } from 'lucide-react';
import { SidebarLogo } from '../icon/sidebarLogo';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { BlueCard } from './blueCard';

interface MobileSidebarProps {
  routes: {
    id: number;
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

export function MobileSidebar({ routes }: MobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <aside className="bg-white flex flex-col justify-between px-5 py-8 h-screen">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <SidebarLogo className="size-11 rounded-lg" />
              <h1 className="text-2xl text-[#151D48] font-bold">Blue</h1>
            </div>
            <div className="flex flex-col gap-6 text-sm text-white font-semibold">
              {routes.map((item) => (
                <a
                  key={item.id}
                  className="flex gap-4 px-5 items-center bg-[#2500FF] py-3 rounded-xl"
                  href={item.path}
                >
                  <item.icon />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <BlueCard />
        </aside>
      </SheetContent>
    </Sheet>
  );
}
