import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { performanceChartData } from "@/utils/data.charts";

const PerformanceChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, performanceChartData);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default PerformanceChart;
