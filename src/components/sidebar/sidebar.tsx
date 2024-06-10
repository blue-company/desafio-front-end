import { useState } from "react";
import { BarChart2, PieChart, Menu } from "lucide-react";
import SidebarCard from "./sidebar-card";
import Logo from "./logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-xl  flex flex-col p-6">
      <header className="flex items-center gap-2">
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={26} />
        </button>
        <Logo />
      </header>

      <main
        className={`mt-10 flex-grow flex-col block ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="space-y-3">
          <li className="flex py-4 px-10 bg-blue-700 rounded-xl items-center font-semibold text-white">
            <PieChart size={26} className="mr-2" />
            Dashboard
          </li>
          <li className="flex py-4 px-10 items-center rounded-xl font-semibold text-gray-400">
            <BarChart2 size={26} className="mr-2 text-gray-500" />
            Leaderboard
          </li>
        </ul>

        <div className="mt-64">
          <SidebarCard />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
