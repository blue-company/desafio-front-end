import React from "react";
import Typography from "@mui/material/Typography";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import USA from "@/assets/icons/usa.png";
import profile from "@/assets/images/profile.jpg";

export const NavBar = () => {
  return (
    <div>
      <div className="h-24 bg-[#fff] shadow-md flex items-center justify-around">
        <Typography variant="h5" className="text-3xl text-black p-5 font-bold">
          dashboard
        </Typography>
        <div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Pesquisar informações"
              className="
          bg-[#f3f3f3]
          rounded-xl
          text-[#c0c0c0]
          h-12
          pl-10
          pr-5
          w-96
        "
            />
            <FaSearch className="text-[#2c02ff] absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image src={USA} alt="usa logo" width={30} />
          <p className="font-bold text-[14px]">PT (BR)</p>
          <IoIosArrowDown />
        </div>

        <div className="flex gap-4 items-center">
          <div className="bg-[#ffcba075] rounded-xl h-10">
            <CiBellOn className="text-[35px]  text-[#af570f]" />
          </div>
          <Image
            src={profile}
            alt="profile image"
            width={50}
            className="rounded-xl"
          />
          <span>
            <p>João Keuwe</p>
            Comercial
          </span>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
