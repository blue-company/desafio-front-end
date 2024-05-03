"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Data } from "../charts/RealityChartData";

import { GrTicket } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RealityChart = () => {
  return (
    <div className="relative flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Realidade</h1>
      </div>

      <Bar
        data={Data.data}
        options={Data.options}
        width={"500px"}
        height={"140px"}
      />
      <div className="flex flex-col items-start w-[95%] mt-2 gap-2">
        <div className="flex items-center w-[70%] gap-3">
          <div className="flex items-center justify-center w-6 h-6 bg-[#DCFCE7] rounded text-xs text-[#23ad80]">
            <BsHandbag />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[10px] flex-nowrap">
              Contratos finalizados
            </span>
            <span className="text-xxs">Global</span>
          </div>
          <span className="ml-auto font-bold text-[10px] text-[#23ad80]">
            8.823
          </span>
        </div>

        <div className="flex items-center w-[70%] gap-3">
          <div className="flex items-center justify-center w-6 h-6 bg-[#FFF4DE] rounded text-xs text-[#FFCF00]">
            <GrTicket />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[10px]">Aguardando</span>
            <span className="text-xxs">Commercial</span>
          </div>
          <span className="ml-auto font-bold text-[10px] text-[#FFCF00] ">
            12.122
          </span>
        </div>
      </div>
    </div>
  );
};

export default RealityChart;
