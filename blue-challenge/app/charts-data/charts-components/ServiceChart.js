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

import { Data } from "../charts/ServiceChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ServiceChart = () => {
  return (
    <div className="relative flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Nível de serviço</h1>
      </div>

      <Bar
        data={Data.data}
        options={Data.options}
        width={"500px"}
        height={"280px"}
      />
      <div className="flex w-full items-center justify-center gap-14 text-xs">
        <span>1,153</span>
        <span>635</span>
      </div>
    </div>
  );
};

export default ServiceChart;
