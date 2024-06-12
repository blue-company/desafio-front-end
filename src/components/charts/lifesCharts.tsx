import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PlataformChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      colors: ["#0084ff", "#00f43d"],
      series: [
        {
          name: "TD Consultoria",
          data: [31, 40, 28, 51, 42, 29, 40],
        },
        {
          name: "RIKO Plataforma",
          data: [35, 45, 45, 60, 50, 52, 45],
        },
      ],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 5,
        colors: ["#0084ff", "#00f43d"],
        strokeWidth: 3,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default PlataformChart;
