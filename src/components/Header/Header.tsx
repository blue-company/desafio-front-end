"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeLanguage } from "./ChangeLanguage";
import { Profile } from "./Profile";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SideBarMobile } from "../Sidebar/SideBarMobile";
import { Notification } from "./Notification";

export function Header() {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <header className="bg-white p-8 flex flex-col lg:flex-row justify-between items-center gap-5 xl:gap-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Input
          type="search "
          icon={<Search className="text-[#5D5FEF]" />}
          placeholder="Pesquisar Informações"
          className="border-none lg:w-[35%] w-full max-w-sm bg-[#F9FAFB]"
        />
        <div className="hidden lg:flex items-center gap-3 justify-around">
          <ChangeLanguage />
          <Notification />
          <Profile />
        </div>
      </header>
    );
  }
  return (
    <header className="bg-white p-8 flex flex-col gap-3 justify-between items-center ">
        <div className="flex gap-2 items-center justify-start w-full">
            <div className="flez-none">
                <SideBarMobile />
            </div>
            <div  className="grow">
                <h1 className="text-2xl font-bold text-center">Dashboard</h1>
            </div>
        </div>
      <Input
        type="search "
        icon={<Search className="text-[#5D5FEF]" />}
        placeholder="Pesquisar Informações"
        className="w-full max-w-sm border-none bg-[#F9FAFB]"
      />
    </header>
  );
}
