import { Profile } from "../profile";
import { SelectLanguage } from "../select-language";
import { MenuHamburguer } from "../menu-hamburger";
import { SelectRoute } from "../select-route";

export const Header = () => {
  return (
    <header className="py-5 px-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-4">
        <MenuHamburguer />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center">
        <SelectRoute />
        <SelectLanguage className="hidden lg:block" />
        <Profile />
      </div>
    </header>
  );
};
