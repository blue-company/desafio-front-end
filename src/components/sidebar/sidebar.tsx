import { useState } from "react";
import { BarChart2, PieChart, Menu, X } from "lucide-react";
import SidebarCard from "./sidebar-card";
import Logo from "./logo";
import React from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-xl flex flex-col p-6">
      <header className="flex items-center gap-2">
        <button
          className="2xl:hidden"
          onClick={toggleMenu}
          data-testid="menu-toggle"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <Logo />
      </header>

      <main
        className={`mt-10 flex-grow flex-col block ${
          isOpen ? "block" : "hidden"
        } 2xl:block`}
      >
        <ul className="space-y-3">
          <li className="flex cursor-pointer py-4 px-10 bg-blue-700 rounded-xl items-center font-semibold text-white">
            <PieChart size={26} className="mr-2" aria-label="PieChart Icon" />
            Dashboard
          </li>
          <li className="flex cursor-pointer py-4 px-10 items-center hover:bg-blue-700 hover:text-white rounded-xl font-semibold text-gray-400">
            <BarChart2
              size={26}
              className="mr-2 hover:text-white"
              aria-label="BarChart2 Icon"
            />
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
