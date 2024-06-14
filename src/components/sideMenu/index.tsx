"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/icons/logoWhite.png";
import know from "@/assets/icons/know.png";
import DashBoard from "@/assets/icons/dashIcon.png";
import { RiBarChartLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import Link from "next/link";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="hidden md:hidden lg:block xl:block 2xl:block">
      <button
        onClick={handleToggleMenu}
        className="fixed top-10 left-18 bg-[#e5e5e5] text-white px-2 py-1 rounded-lg z-10 transition-left duration-300 ease"
        style={{ left: openMenu ? "19rem" : "1rem" }}
      >
        {openMenu ? (
          <FaArrowRightFromBracket className="rotate-180 text-[#2500FF]" />
        ) : (
          <FaArrowRightToBracket className="text-[#2500FF]" />
        )}
      </button>

      <div
        className="sidebar bg-white w-80  h-screen flex flex-col items-center pt-12 fixed left-0 top-0 transform transition-transform duration-300 ease z-0"
        style={{ transform: openMenu ? "translateX(0)" : "translateX(-100%)" }}
      >
        <main className="logoContainer flex items-center gap-3 mb-10 ml-5">
          <span className="logoBackground bg-[#2500FF] p-2 rounded-lg">
            <Image src={logo} alt="Logo" width={40} height={50} />
          </span>
          <p className="logoText text-3xl font-bold">Blue</p>
        </main>

        <ul className="menuList flex flex-col gap-4">
          <Link href="/">
            <li className="menuItem bg-[#2500FF] text-gray-300 px-3 w-64  font-semibold h-14 flex items-center gap-3 rounded-lg cursor-pointer transition duration-300 ease hover:bg-[#1c0072]">
              <Image
                src={DashBoard}
                width={30}
                height={30}
                alt="Dashboard Icon"
              />
              Dashboard
            </li>
          </Link>

          <Link href="/leaderBoard">
            <li className="menuItem bg-[#2500FF] text-gray-300 px-3 w-64  font-semibold h-14 flex items-center gap-3 rounded-lg cursor-pointer transition duration-300 ease hover:bg-[#1c0072]">
              <RiBarChartLine className="text-xl" />
              LeaderBoard
            </li>
          </Link>

          <Link href="/profile">
            <li className="menuItem bg-[#2500FF] text-gray-300 px-3 w-64  font-semibold h-14 flex items-center gap-3 rounded-lg cursor-pointer transition duration-300 ease hover:bg-[#1c0072]">
              <IoPerson className="text-xl" />
              Profile
            </li>
          </Link>
        </ul>

        <div className="infoBox bg-[#2500FF] w-[80%] h-[290px] flex flex-col items-center p-2 mt-[30vh] rounded-lg text-white justify-around">
          <Image src={know} alt="Know Icon" width={50} />
          <h2 className="text-xl font-bold text-center">
            Conheça a <br /> blue
          </h2>
          <p className="text-sm text-center">
            Saiba mais informações sobre a Blue, uma operadora de saúde Health
            Tech
          </p>
          <Link
            href="https://www.saudeblue.com/"
            target="_blank"
            className="w-full flex justify-center"
          >
            <button className=" bg-[#fff] text-[#713fdd] font-bold w-[70%] h-8 rounded-2xl">
              conhecer
            </button>
          </Link>
        </div>
      </div>
      <div
        style={{
          marginLeft: openMenu ? "20rem" : "0",
          transition: "margin-left 0.3s ease",
        }}
      ></div>
    </div>
  );
};

export default SideBar;
