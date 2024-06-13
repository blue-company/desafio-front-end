"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import ApexCharts from "apexcharts";
import { RealChartsComponent } from "../subComponentsCharts";
import { realChartOptions } from "@/utils/data.charts";



const RealChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (typeof window !== "undefined") {

      const chart = new ApexCharts(chartRef.current, realChartOptions);
      chart.render();

      return () => {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div>
     
        <div>
          <div id="chart" ref={chartRef}></div>
          <div className="flex flex-col gap-7 items-start px-6">
            <RealChartsComponent
              Icon={<IoBagOutline />}
              Title={"Contratos finalizados"}
              Label="Global"
              Value="2.343"
              background="#E2FFF3"
              color="#27AE60"
            />
            <RealChartsComponent
              Icon={<HiOutlineTicket />}
              Title={"Aguardando"}
              Label="Commercial"
              Value="12.122"
              background="#FFF4DE"
              color="#FFA412"
            />
          </div>
        </div>
    </div>
  );
};

export default RealChart;
