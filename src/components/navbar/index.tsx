"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import USA from "@/assets/icons/usa.png";
import profile from "@/assets/images/profile.jpg";
import BasicSelect from "@/components/dropDown";
import { usePathname } from "next/navigation";


const NavBar = ({ shiftRight }: any) => {
  const pathname = usePathname();

  let pageTitle = "Dashboard";

  if (pathname === "/profile") {
    pageTitle = "Profile";
  } else if (pathname === "/leaderBoard") {
    pageTitle = "Leaderboard";
  }

  return (
    <div className="hidden 2xl:block xl:block lg:block ">
      <div
        className={`h-16 transition-transform transition-width ${
          shiftRight ? "w-[calc(100% - 20rem)]" : "w-full"
        } bg-white shadow-md flex items-center justify-around`}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
        >
          {pageTitle}
        </Typography>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Pesquisar informações"
            className="bg-[#f3f3f3] rounded-lg text-[#c0c0c0] h-10 px-10 2xl:w-96 xl:w-44 lg:w-32 md:w-12 sm:w-5"
          />
          <FaSearch className="text-[#2c02ff] absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex gap-5 items-center">
          <Image src={USA} alt="usa logo" width={30} />
          <p className="font-bold text-[14px]">PT (BR)</p>
          <IoIosArrowDown />

          <div className="bg-[#ffcba075] rounded-lg h-10 relative">
            <CiBellOn className="text-[#af570f] text-2xl m-2" />
            <div className="absolute bg-red-600 rounded-full top-1 right-1 w-2 h-2" />
          </div>
          <Image
            src={profile}
            alt="profile image"
            width={50}
            className="rounded-xl"
          />
          <div>
            <BasicSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
