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
import Link from "next/link";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.sidebarContainer}>
      <button
        onClick={handleToggleMenu}
        className={styles.toggleButton}
        style={{ left: openMenu ? "19rem" : "1rem" }}
      >
        {openMenu ? (
          <FaArrowRightFromBracket className="rotate-180 text-[#2500FF]" />
        ) : (
          <FaArrowRightToBracket className="text-[#2500FF]" />
        )}
      </button>

      <div
        className={styles.sidebar}
        style={{ transform: openMenu ? "translateX(0)" : "translateX(-100%)" }}
      >
        <main className={styles.logoContainer}>
          <span className={styles.logoBackground}>
            <Image src={logo} alt="Logo" width={40} height={50} />
          </span>
          <p className={styles.logoText}>Blue</p>
        </main>

        <ul className={styles.menuList}>
          <Link href="/">
            <li className={styles.menuItem}>
              <Image
                src={DashBoard}
                width={30}
                height={30}
                alt="Dashboard Icon"
              />
              Dashboard
            </li>
          </Link>

          <li className={styles.menuItem}>
            <RiBarChartLine className="text-xl" />
            LeaderBoard
          </li>

          <Link href="/profile">
            <li className={styles.menuItem}>
              <RiBarChartLine className="text-xl" />
              Profile
            </li>
          </Link>
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
          <Link
            href="https://www.saudeblue.com/"
            target="blank"
            className="w-full flex justify-center"
          >
            <button className={styles.infoButton}>conhecer</button>
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
