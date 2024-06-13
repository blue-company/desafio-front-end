import React, { useEffect, useRef } from "react";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import ApexCharts from "apexcharts";
import { RealChartsComponent } from "../subComponentsCharts";

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
        height: 200,
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
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
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

  return (
    <div>
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
    </div>
  );
};

export default RealChart;
