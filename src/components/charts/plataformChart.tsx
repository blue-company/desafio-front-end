import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { plataformChartData } from "@/utils/data.charts";

const PlataformChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const chart = new ApexCharts(chartRef.current, plataformChartData);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default PlataformChart;
