"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/icons/logoWhite.png";
import know from "@/assets/icons/know.png";
import DashBoard from "@/assets/icons/dashIcon.png";
import { RiBarChartLine } from "react-icons/ri";
import { Button } from "@mui/material";

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
        <div className="bg-white w-80 h-[100vh] shadow-xl flex flex-col items-center pt-7 ">
          <main className="flex gap-5 mb-10 items-center w-[100%] ml-20">
            <span className="bg-[#2500FF] p-2 rounded-xl">
              <Image src={logo} alt="" width={40} height={50} />
            </span>
            <p className="text-3xl font-bold">Blue</p>
          </main>

          {/* componentizar */}
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 rounded-2xl bg-[#2500FF] text-[20px] text-white p-3 w-64 text-center text-xl flex items-center gap-7">
              <Image src={DashBoard} width={30} height={30} alt="" />
              Dashboard
            </li>

            <li className="hover:bg-gray-700 rounded-2xl bg-[#2500FF] text-[20px] text-white p-3 w-64 text-center text-xl flex items-center gap-7">
              <RiBarChartLine className="text-xl" />
              LeaderBoard
            </li>
          </ul>

          <div className="bg-[#2500FF] w-[70%] h-[290px] flex flex-col items-center px-4 pt-2 pb-2 mt-[40vh] rounded-2xl text-white justify-around">
            <Image src={know} alt="" width={50} />
            <h2 className="text-xl text-center font-bold ">
              Conheça a <br /> blue
            </h2>
            <p className="text-sm text-center ">
              Saiba mais informações sobre a Blue, uma operadora de saúde Health
              Tech
            </p>
            <Button className="bg-white text-[#2500FF] rounded-md font-bold w-[70%] h-8">conhecer</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
