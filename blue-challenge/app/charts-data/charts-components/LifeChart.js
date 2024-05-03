"use client";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Data } from "../charts/LifeChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LifeChart = () => {
  return (
    <div className="relative flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Vidas</h1>
      </div>

      <Line
        data={Data.data}
        options={Data.options}
        width={"400px"}
        height={"150px"}
      />
      <div className="flex gap-2 text-[10px]">
        <div className="flex flex-col items-center">
          <span className="flex items-center gap-x-1 text-slate-400">
            <Image
              src="/assets/DataIconBlue.png"
              alt="Icon"
              width={20}
              height={20}
            />
            Último mês
          </span>
          <span className="font-bold">3.432</span>
        </div>

        <div className="w-[1px] h-5 bg-grey-custom"></div>

        <div className="flex flex-col items-center">
          <span className="flex items-center gap-x-1 text-slate-400">
            <Image
              src="/assets/DataIconGreen.png"
              alt="Icon"
              width={20}
              height={20}
            />
            Este mês
          </span>
          <span className="font-bold">4.504</span>
        </div>
      </div>
    </div>
  );
};

export default LifeChart;
