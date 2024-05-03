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

import { Data } from "../charts/RevenueChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  return (
    <div className="relative flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Rendimento Total</h1>
      </div>

      <Bar
        data={Data.data}
        options={Data.options}
        width={"700px"}
        height={"270px"}
      />
    </div>
  );
};

export default RevenueChart;
