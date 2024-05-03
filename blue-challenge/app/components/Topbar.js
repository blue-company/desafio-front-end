import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { TfiBell } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";

import DropdownMobile from "./DropdownMobile";

const Topbar = () => {
  return (
    <div className="flex items-center w-[100%] h-[100%] bg-white">
      <h1 className="hidden lg:flex ml-7 text-2xl text-black-title font-bold">
        Dashboard
      </h1>

      <div>
        <DropdownMobile />
      </div>

      <div className="flex items-center w-[100%] sm:ml-4 lg:ml-40 sm:space-x-10">
        <div className="flex items-center w-[50%] sm:w-[30%] lg:w-80 px-5 py-2.5 bg-gray-50 rounded-xl">
          <button type="submit" className=" text-xs sm:text-lg text-blue-250">
            <IoSearch />
          </button>
          <input
            type="text"
            placeholder="Pesquisar informações"
            className="w-full ml-1.5 bg-transparent text-13 outline-none placeholder:text-[8px] sm:placeholder:text-13"
          ></input>
        </div>

        <div className="hidden sm:flex items-center cursor-pointer">
          <Image
            src="/assets/EUAIcon.png"
            alt="Eua Flag"
            width={18}
            height={18}
          />
          <a className="flex items-center ml-2 text-sm font-bold text-nowrap ">
            PT (BR) <IoIosArrowDown className="ml-3 text-zinc-400" />
          </a>
        </div>

        <div className="flex items-center ml-[25%] sm:ml-0 sm:space-x-4">
          <div className="flex items-center justify-center h-8 w-8 sm:bg-orange-50 rounded-md text-orange-400 cursor-pointer">
            <TfiBell />
          </div>

          <div className="flex items-center cursor-pointer">
            <div className="w-10 h-10 mr-4 overflow-hidden rounded-md">
              <Image
                src="/assets/foto.jpg"
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="hidden sm:flex flex-col text-xs">
              <span className="flex items-center">
                Camilla Barreto <IoIosArrowDown className="ml-2" />
              </span>
              <span className="text-zinc-400">Comercial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
