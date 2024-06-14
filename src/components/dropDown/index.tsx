"use client";
import Link from "next/link";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center space-x-2 bg-[#ddddddae] text-white px-4 py-2 rounded-md hover:bg-[#828282cf]"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-controls="my-dropdown"
      >
        <div className="flex flex-col items-start">
          <span className="font-semibold text-black">João Keuwe</span>
          <span className="text-sm text-black">Commercial</span>
        </div>
        <FaArrowAltCircleDown className="text-black" />
      </button>
      <div
        id="my-dropdown"
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-1">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
