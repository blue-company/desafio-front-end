import React from "react";
import Typography from "@mui/material/Typography";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import USA from "@/assets/icons/usa.png";
import profile from "@/assets/images/profile.jpg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div
        className={`${styles.navbar} shadow-md flex items-center justify-around`}
      >
        <Typography
          variant="h5"
          className="text-3xl text-black p-5 font-semibold"
        >
          Dashboard
        </Typography>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Pesquisar informações"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
        <div className="flex gap-3 items-center">
          <Image src={USA} alt="usa logo" width={30} />
          <p className="font-bold text-[14px]">PT (BR)</p>
          <IoIosArrowDown />
        </div>
        <div className="flex gap-4 items-center">
          <div className={styles.notificationIcon}>
            <CiBellOn className="text-[35px] text-[#af570f]" />
            <div className="absolute bg-red-600 rounded-[50%] top-1 right-1.5 w-1 h-1" />
          </div>
          <Image
            src={profile}
            alt="profile image"
            width={50}
            className="rounded-xl"
          />
          <div>
            <span className="flex gap-3">
              <p>João Keuwe</p>
              <IoIosArrowDown />
            </span>
            Comercial
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
