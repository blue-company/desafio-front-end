import { Bell, PanelLeft } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { ChangeLanguage } from "../Header/ChangeLanguage";
import { Profile } from "../Header/Profile";
import { SidebarLinkButtonIcon } from "./SidebarLinkButtonIcon";
import { SideBarCard } from "./SideBarCard";
import dashboard from "../assets/dashboard.svg";
import leaderboard from "../assets/leaderboard.svg";
import { Notification } from "../Header/Notification";

export function SideBarMobile() {
  return (
    <div className="flex items-center md:hidden bg-white">
      <Sheet>
        <SheetTrigger className="">
          <PanelLeft className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent
          className="rounded-r-2xl h-full max-w-[320px]"
          side="left"
        >
          <SheetHeader>
            <SheetDescription className="flex flex-col justify-between gap-9 mt-5 h-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col-reverse items-center gap-2">
                  <ChangeLanguage />
                  <Notification name="Notificações"/>
                  <Profile />
                </div>
                <SidebarLinkButtonIcon
                  href="/"
                  image={dashboard}
                  text="Dashboard"
                  alt="Dashboard icon"
                />
                <SidebarLinkButtonIcon
                  href="/leaderboard"
                  text="Leaderboard"
                  image={leaderboard}
                  alt="Leaderboard icon"
                />
              </div>
              <SideBarCard />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
