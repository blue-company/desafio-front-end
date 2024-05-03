"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiBarChartLine } from "react-icons/ri";

const Sidebar = () => {
  const [dashboardSelected, setDashboardSelected] = useState(true);
  const [leaderboardSelected, setLeaderboardSelected] = useState(false);

  const handleClickDashboard = () => {
    setDashboardSelected(true);
    setLeaderboardSelected(false);
  };

  const handleClickLeaderboard = () => {
    setLeaderboardSelected(true);
    setDashboardSelected(false);
  };

  return (
    <div className="hidden md:flex flex-col items-center w-[15vw] lg:w-58 h-[100vh] bg-white">
      <Link href="/">
        <div className="flex items-center lg:w-42 mt-8 space-x-4 cursor-pointer">
          <div className="flex items-center justify-center w-[10vw] lg:w-[38px] h-[40px] lg:h-[38px] p-[6px] bg-blue-250 rounded-md text-white transition-all duration-500 hover:w-[45px] hover:h-[45px]">
            <Image
              src="/assets/LogoBlue.png"
              alt="Logo Icon"
              width={25}
              height={25}
            />
          </div>
          <h1 className="hidden lg:flex text-xl font-bold text-black-title">
            Blue
          </h1>
        </div>
      </Link>

      <div
        className={`flex items-center justify-center lg:justify-start w-[10vw] lg:w-42 mt-8 px-4 py-3 space-x-4 rounded-xl cursor-pointer transition-all duration-500 bg-${
          dashboardSelected ? "blue" : "transparent"
        }-250 text-${dashboardSelected ? "white" : "zinc-500"} font-${
          dashboardSelected ? "bold" : "normal"
        }`}
        onClick={handleClickDashboard}
      >
        <Image
          src="/assets/ChartIcon.png"
          alt="Chart Icon"
          width={20}
          height={20}
        />
        <h2 className="hidden lg:flex text-13">Dashboard</h2>
      </div>

      <div
        className={`flex items-center justify-center lg:justify-start w-[10vw] lg:w-42 mt-5 px-4 py-3 space-x-4 rounded-xl cursor-pointer transition-all duration-500 bg-${
          leaderboardSelected ? "blue" : "transparent"
        }-250 text-${leaderboardSelected ? "white" : "zinc-500"} font-${
          leaderboardSelected ? "bold" : "normal"
        }`}
        onClick={handleClickLeaderboard}
      >
        <RiBarChartLine className=" text-xl" />
        <h2 className="hidden lg:flex text-13">Leaderboard</h2>
      </div>

      <div className="relative flex flex-col items-center w-[80%] lg:w-40 h-[100px] lg:h-48 mt-auto mb-5 lg:mb-16 px-xxs py-1 space-y-1.5">
        <Image
          src="/assets/Background.png"
          alt="Background"
          height={200}
          width={200}
          className="absolute top-0 w-full h-full z-0 object-none rounded-xl"
        />

        <Image
          src="/assets/Arrows.png"
          alt="Arrows Icon"
          width={38}
          height={38}
          className="z-10"
        />
        <h3 className="w-20 text-center text-[12px] font-bold text-white z-10 tracking-wider text-wrap">
          Conheça a Blue
        </h3>
        <p className="hidden lg:flex text-center text-xxs text-zinc-300 leading-tight z-10">
          Saiba mais informações sobre a Blue, uma operadora de saúde Health
          Tech
        </p>
        <div className="hidden lg:flex z-10">
          <button className="mt-4 px-5 py-1.5 bg-white rounded text-[10px] font-bold text-blue-700 transition-all duration-500 hover:bg-blue-250 hover:text-white hover:border hover:border-white">
            Conhecer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
