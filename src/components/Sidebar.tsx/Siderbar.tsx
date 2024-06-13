import { PanelLeft } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarLinkButtonIcon } from "./SidebarLinkButtonIcon";
import dashboard from "../assets/dashboard.svg";
import blueLogo from "../assets/logoBlue.svg";
import leaderboard from "../assets/leaderboard.svg";
import Image from "next/image";

export function SideBar() {
  return (
    <>
      <div className="w-80 min-h-screen hidden md:flex gap-8 flex-col border-r border-r-1 items-center px-4 py-8 bg-white">
        <Image src={blueLogo} width={500} height={300} alt="Blue Company Icon" className="w-36" />
        <SidebarLinkButtonIcon
          href="/"
          text="Dashboard"
          image={dashboard}
          alt="Dashboard icon"
          icon
        />
        <SidebarLinkButtonIcon
          href="/leaderboard"
          text="Leaderboard"
          image={leaderboard}
          alt="Leaderboard icon"
          icon
        />
        
        {/* <a href="/painel-administratitvo/tabuleiros">
          <Frame className="text-stone-500 p-1 w-8 h-8 hover:text-stone-700 hover:bg-stone-200 hover:rounded" />
        </a> */}
      </div>

      <div className="flex items-center py-3 px-7 md:hidden">
        <Sheet>
          <SheetTrigger className="">
            <PanelLeft className="p-2 w-9 h-9 " />
          </SheetTrigger>
          <SheetContent className="rounded-r-2xl" side="left">
            <SheetHeader>
              <SheetDescription className="flex flex-col gap-9 mt-5">
              <SidebarLinkButtonIcon
                    href="/"
                    image={dashboard}
                    text="Dashboard"
                    alt="Dashboard icon"
                    icon
              />
                      <SidebarLinkButtonIcon
                    href="/leaderboard"
                    text="Leaderboard"
                    image={leaderboard}
                    alt="Leaderboard icon"
                    icon
                  />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
