import React, { useEffect, useRef, useCallback } from "react";
import ApexCharts from "apexcharts";

const LifesCharts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const renderChart = useCallback(() => {
    const options = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const cleanup = renderChart();

    return () => {
      cleanup();
    };
  }, [renderChart]);

  return <div id="chart" ref={chartRef}></div>;
};

export default LifesCharts;
