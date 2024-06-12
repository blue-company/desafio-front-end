"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/icons/logoWhite.png";
import know from "@/assets/icons/know.png";
import DashBoard from "@/assets/icons/dashIcon.png";
import { RiBarChartLine } from "react-icons/ri";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    top: "2.5rem",
    left: "1rem",
  });

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
    setButtonPosition((prevPosition) => ({
      ...prevPosition,
      left: openMenu ? "1rem" : "19rem",
    }));
  };

  return (
    <div className={styles.sidebarContainer}>
      <button
        onClick={handleToggleMenu}
        className={styles.toggleButton}
        style={buttonPosition}
      >
        {openMenu ? (
          <FaArrowRightFromBracket className="rotate-180 text-[#2500FF]" />
        ) : (
          <FaArrowRightToBracket className="text-[#2500FF]" />
        )}
      </button>

      {openMenu && (
        <div className={styles.sidebar}>
          <main className={styles.logoContainer}>
            <span className={styles.logoBackground}>
              <Image src={logo} alt="Logo" width={40} height={50} />
            </span>
            <p className={styles.logoText}>Blue</p>
          </main>

          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Image
                src={DashBoard}
                width={30}
                height={30}
                alt="Dashboard Icon"
              />
              Dashboard
            </li>

            <li className={styles.menuItem}>
              <RiBarChartLine className="text-xl" />
              LeaderBoard
            </li>
          </ul>

          <div className={styles.infoBox}>
            <Image src={know} alt="Know Icon" width={50} />
            <h2 className="text-xl text-center font-bold">
              Conheça a <br /> blue
            </h2>
            <p className="text-sm text-center">
              Saiba mais informações sobre a Blue, uma operadora de saúde Health
              Tech
            </p>
            <button className={styles.infoButton}>conhecer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
