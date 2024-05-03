"use client";

import { GraphBar, GraphPercentage } from "@/app/components/GraphBar";

import { Data } from "../charts/TopProductsChartData";

const TopProductsChart = () => {
  return (
    <div className="relative flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-2 text-13 font-bold">
        <h1>Top produtos</h1>
      </div>
      <div className="w-full h-[90] overflow-x-auto">
        <table className="w-full table-auto border-collapse text-[10px]">
          <thead className="">
            <tr>
              {Data.data.datasets.map((dataset) => (
                <th
                  key={dataset.label}
                  className="px-4 py-2 font-normal text-[#94A3B8] text-left"
                >
                  {dataset.label}
                </th>
              ))}
            </tr>
          </thead>
          {Data.data.datasets.map((dataset, index) => (
            <tbody key={index}>
              <tr>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200 text-[#3F3F3F]`}
                >
                  {dataset.index}
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200 uppercase text-[#3F3F3F]`}
                >
                  {dataset.product}
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200`}
                >
                  <GraphBar
                    percentageData={dataset.percentage}
                    color={dataset.graphBarColor}
                    background={dataset.graphBarBackground}
                  />
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200`}
                >
                  <GraphPercentage
                    percentageData={dataset.percentage}
                    borderColor={dataset.graphPercentageBorder}
                    background={dataset.graphPercentageBackground}
                    textColor={dataset.percentageTextColor}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TopProductsChart;
