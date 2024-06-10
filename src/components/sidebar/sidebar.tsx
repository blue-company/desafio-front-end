import { BarChart2, PieChart } from "lucide-react";
import SidebarCard from "./sidebar-card";
import Logo from "./logo";

const Sidebar = () => {
  return (
    <div className="shadow-xl flex flex-col p-10">
      <header className="flex items-center gap-2">
        <Logo />
      </header>

      <main className="mt-10 flex flex-grow flex-col">
        <ul className="space-y-3">
          <li className="flex py-4 px-10 bg-blue-700 rounded-xl  font-semibold text-white">
            <PieChart size={26} className="mr-2" />
            Dashboard
          </li>
          <li className="flex p-4 items-center justify-center  rounded-xl font-semibold text-gray-400">
            <BarChart2 size={26} className="mr-2 text-gray-500" />
            Leaderboard
          </li>
        </ul>

        <div className="mt-auto">
          <SidebarCard />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
