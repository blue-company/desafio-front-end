"use client";
import { useState } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { RiBarChartLine } from "react-icons/ri";

const DropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex md:hidden items-center justify-center w-[50px] h-[50px]">
      <button
        className="flex items-center justify-center text-xl text-gray-500"
        onClick={toggleMenu}
      >
        <TiThMenu />
      </button>
      {isOpen && (
        <ul className="absolute top-11 left-0 flex flex-col items-center w-[11vw] h-[100vh] bg-white  rounded shadow-lg">
          <li className="flex items-center justify-center w-10 h-10 my-2 mx-2 bg-blue-250 rounded-full">
            <Image
              src="/assets/ChartIcon.png"
              alt="Chart Icon"
              width={20}
              height={20}
            />
          </li>
          <li className="flex items-center justify-center w-10 h-10 my-2 mx-2 bg-blue-250 rounded-full">
            <RiBarChartLine className=" text-xl text-white" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 my-2 mx-2 bg-blue-250 rounded-full">
            <Image
              src="/assets/Arrows.png"
              alt="Arrows Icon"
              width={20}
              height={20}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMobile;
