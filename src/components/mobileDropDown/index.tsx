'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed block 2xl:hidden xl:hidden lg:hidden md:block sm:block mx-5 mt-5">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ background: "#9f9f9f" }}
      >
        <CiMenuBurger className="text-[#fff]" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/">
          <MenuItem onClick={handleClose}>DashBoard</MenuItem>
        </Link>

        <Link href="/profile">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link href="/leaderBoard">
          <MenuItem onClick={handleClose}>Leaderboard</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
