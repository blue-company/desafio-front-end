"use client";
import { Bell, PanelLeft } from "lucide-react";

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
import { SideBarCard } from "./SideBarCard";
import { ChangeLanguage } from "../Header/ChangeLanguage";
import { Profile } from "../Header/Profile";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function SideBar() {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div className="w-80 min-h-screen hidden md:flex gap-8 flex-col items-center px-4 py-8 bg-white">
        <div className="flex flex-col gap-5">
          <Image src={blueLogo} alt="Blue Company Icon" className="w-36" />
        </div>
        <div className="hidden md:flex md:flex-col-reverse md:items-center gap-2 lg:hidden">
          <ChangeLanguage />
          <Bell className="w-5 h-5" />
          <Profile />
        </div>
        <SidebarLinkButtonIcon
          href="/"
          text="Dashboard"
          image={dashboard}
          alt="Dashboard icon"
        />
        <SidebarLinkButtonIcon
          href="/leaderboard"
          text="Leaderboard"
          image={leaderboard}
          alt="Leaderboard icon"
        />
        <SideBarCard />
      </div>
    );
  }
  return (
    <div className="flex items-center py-3 px-7 md:hidden bg-white">
      <Sheet>
        <SheetTrigger className="">
          <PanelLeft className="p-2 w-9 h-9 " />
        </SheetTrigger>
        <SheetContent className="rounded-r-2xl h-full" side="left">
          <SheetHeader>
            <SheetDescription className="flex flex-col justify-between gap-9 mt-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col-reverse items-center gap-2">
                  <ChangeLanguage />
                  <Bell className="w-5 h-5" />
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
