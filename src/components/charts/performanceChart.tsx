import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PerformanceChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: ApexCharts.ApexOptions = {
      colors: ["#0084ff", "#00fbb8"],
      series: [
        {
          name: "Aguardando",
          data: [44, 55, 57, 56, 61, 58, 60],
        },
        {
          name: "Implantados",
          data: [76, 85, 101, 98, 87, 35, 40],
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
          columnWidth: "35%",
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
        categories: [
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
          "Domingo",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val + "k";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " mil";
          },
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

export default PerformanceChart;
