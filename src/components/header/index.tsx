"use client";

import { Profile } from "../profile";
import { SelectLanguage } from "../select-language";
import { MenuHamburguer } from "../menu-hamburger";
import { SelectRoute } from "../select-route";
import { useRouter } from "~/hook/useRouter";

export const Header = () => {
  const { getTitlePage } = useRouter();
  return (
    <header className="py-5 px-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-4">
        <MenuHamburguer />
        <h1 className="text-2xl font-bold capitalize">{getTitlePage()}</h1>
      </div>

      <div className="flex items-center">
        <SelectRoute />
        <SelectLanguage className="hidden lg:block" />
        <Profile />
      </div>
    </header>
  );
};
