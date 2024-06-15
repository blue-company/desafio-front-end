"use client";
import { SidebarLinkButtonIcon } from "./SidebarLinkButtonIcon";
import dashboard from "../assets/dashboard.svg";
import blueLogo from "../assets/logoBlue.svg";
import leaderboard from "../assets/leaderboard.svg";
import Image from "next/image";
import { SideBarCard } from "./SideBarCard";
import { ChangeLanguage } from "../Header/ChangeLanguage/ChangeLanguage";
import { Profile } from "../Profile/Profile";
import { Notification } from "../Notification/Notification";

export function SideBarDesktop() {
  return (
    <div className="fixed w-80 h-screen hidden md:flex lg:gap-8 md:gap-4 flex-col items-center px-4 py-8 bg-white">
      <div className="flex flex-col gap-5">
        <Image
          src={blueLogo}
          alt="Blue Company Icon"
          className="md:w-28 md:mb-3 lg:mb-0 lg:w-36"
        />
      </div>
      <div className="hidden md:flex md:flex-col-reverse md:items-center gap-3 lg:hidden">
        <ChangeLanguage />
        <Notification name="Notificações" />
        <Profile />
      </div>
      <SidebarLinkButtonIcon
        href="/dashboard"
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
