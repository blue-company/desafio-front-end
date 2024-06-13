import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import Image from "next/image";
import IconBlue from "@/assets/icons/iconBlue.png";
import IconGreen from "@/assets/icons/iconGreen.png";

const LifesCharts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
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
      legend: {
        show: false,
      },
      chart: {
        height: 250,
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

  return (
    <div>
      <div>
        <div>
          <div id="chart" ref={chartRef}></div>
          <span className="flex justify-center">
            <hr className="h-[0.8px] w-[90%] bg-[#ddd] mt-[-1rem]" />
          </span>
          <div className="gap-3 flex mt-[-1rem] items-center justify-center ">
            <div className="flex items-center flex-col">
              <div className="flex items-center gap-4 mt-1">
                <Image width={30} src={IconBlue} alt="Icon Blue" />
                Utimo mês
              </div>
              <span className="">4.520</span>
            </div>

            <hr className="h-5 w-[0.10px] bg-[#DDD] mb-4" />

            <div className="flex items-center flex-col">
              <div className="flex items-center gap-4 mt-1">
                <Image width={30} src={IconGreen} alt="Icon Blue" />
                Este mês
              </div>
              <span>3.452</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifesCharts;
