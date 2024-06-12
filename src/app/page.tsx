import React from "react";
import SideBar from "@/components/sideMenu";
import NavBar from "@/components/navbar";
import Dashboard from "@/screen/dashboard";

const Home = () => {
  return (
    <main className="flex font-Poppins">
      <SideBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <Dashboard />
      </div>
    </main>
  );
};

export default Home;
