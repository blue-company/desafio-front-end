import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PlataformChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      colors: ["#9C27B0", "#00f43d", "#f20c0c"],
      series: [
        {
          name: "TD Consultoria",
          data: [31, 40, 28, 51, 42, 29, 40],
        },
        {
          name: "RIKO Plataforma",
          data: [26, 32, 45, 32, 34, 52, 41],
        },
        {
          name: "Blue Serviços",
          data: [22, 42, 25, 32, 44, 32, 38],
        },
      ],
      chart: {
        height: 300,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "date",
        categories: [
          "jan",
          "fev",
          "mar",
          "abr",
          "mai",
          "jun",
          "jul",
          "ago",
          "set",
          "out",
          "nov",
          "dez",
        ],
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
