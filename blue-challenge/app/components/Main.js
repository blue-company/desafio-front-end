"use client";
import { useState, useEffect } from "react";

import DashboardCard from "./DashboardCard";

import SalesChart from "../charts-data/charts-components/SalesChart";
import PlatformsChart from "../charts-data/charts-components/PlatformsChart";
import RevenueChart from "../charts-data/charts-components/RevenueChart";
import LifeChart from "../charts-data/charts-components/LifeChart";
import RealityChart from "../charts-data/charts-components/RealityChart";
import MapChart from "../charts-data/charts-components/MapChart";
import ServiceChart from "../charts-data/charts-components/ServiceChart";
import TopProductsChart from "../charts-data/charts-components/TopProductsChart";

const Main = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && (
        <div className="flex justify-center p-6 flex-wrap gap-6 overflow-auto">
          <DashboardCard
            width={"min-[1420px]:w-[600px]"}
            children={<SalesChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[550px]"}
            children={<PlatformsChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[450px]"}
            children={<RevenueChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[340px]"}
            children={<LifeChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[340px]"}
            children={<RealityChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[450px]"}
            children={<TopProductsChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[340px]"}
            children={<MapChart />}
          />
          <DashboardCard
            width={"min-[1420px]:w-[340px]"}
            children={<ServiceChart />}
          />
        </div>
      )}
    </>
  );
};

export default Main;
