import HeaderSearch from "./header-search";
import LanguageSelector from "./language-selector";
import Notifications from "./notifications";
import UserCard from "./user-card";

const Header = () => {
  return (
    <div className="shadow-xl p-4 justify-evenly flex w-screen items-center flex-row h-fit">
      <h1 className="text-3xl font-bold text-blue-950">Dashboard</h1>
      <HeaderSearch />

      <LanguageSelector />

      <div className="flex gap-2 items-center">
        <Notifications />
        <UserCard />
      </div>
    </div>
  );
};

export default Header;
