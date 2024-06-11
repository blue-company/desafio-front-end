"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="relative h-screen">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute top-10 left-72 bg-blue-500 text-white p-2 rounded z-10"
      >
        {openMenu ? "Close Menu" : "Open Menu"}
      </button>

      {openMenu && (
        <div className="bg-white w-72 h-[100vh] shadow-xl flex flex-col items-center mt-7 ">
          <main className="flex gap-5 mb-10  items-center">
            <span className="bg-purple-500 p-2 rounded-xl ">
              <Image src={logo} alt="" width={50} height={50} />
            </span>
            <p className="text-3xl font-bold">Blue</p>
          </main>
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 rounded-2xl bg-[#2500FF] text-white p-3 w-60 text-center text-xl">
              Dashboard
            </li>
            <li className="hover:bg-gray-700 rounded-2xl bg-[#2500FF] text-white p-3 w-60 text-center text-xl">
              LeaderBoard
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
