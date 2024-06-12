import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const RealChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      colors: ["#4AB58E", "#FFCF00"],
      series: [
        {
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "85%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [],
      },
      yaxis: {
        show: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        opacity: 1,
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

export default RealChart;
