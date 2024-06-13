"use client";
import React from "react";

interface Dataset {
  label: string;
  index: string;
  product: string;
  percentage: number;
  graphBarColor: string;
  graphPercentageBorder: string;
  graphBarBackground: string;
  graphPercentageBackground: string;
  percentageTextColor: string;
  customPadding: string;
}

const TopProductsChart: React.FC = () => {
  const data: Dataset[] = [
    {
      label: "#",
      index: "01",
      product: "Green Start Pro",
      percentage: 70,
      graphBarColor: "bg-green-500",
      graphPercentageBorder: "border-green-500",
      graphBarBackground: "bg-green-200",
      graphPercentageBackground: "bg-green-100",
      percentageTextColor: "text-green-500",
      customPadding: "py-3",
    },
    {
      label: "Produto",
      index: "02",
      product: "Red Start Pro",
      percentage: 50,
      graphBarColor: "bg-red-500",
      graphPercentageBorder: "border-red-500",
      graphBarBackground: "bg-red-200",
      graphPercentageBackground: "bg-red-100",
      percentageTextColor: "text-red-500",
      customPadding: "py-3",
    },
    {
      label: "Alavancagem",
      index: "03",
      product: "Yellow Start Pro",
      percentage: 80,
      graphBarColor: "bg-yellow-500",
      graphPercentageBorder: "border-yellow-500",
      graphBarBackground: "bg-yellow-200",
      graphPercentageBackground: "bg-yellow-100",
      percentageTextColor: "text-yellow-500",
      customPadding: "py-3",
    },
    {
      label: "%",
      index: "04",
      product: "Blue Start Pro",
      percentage: 40,
      graphBarColor: "bg-blue-500",
      graphPercentageBorder: "border-blue-500",
      graphBarBackground: "bg-blue-200",
      graphPercentageBackground: "bg-blue-100",
      percentageTextColor: "text-blue-500",
      customPadding: "pt-3",
    },
  ];

  const GraphBar = ({
    percentage,
    color,
    background,
  }: {
    percentage: number;
    color: string;
    background: string;
  }) => (
    <div className="flex items-center w-full">
      <div className={`w-full h-2 ${background} rounded-xl overflow-hidden`}>
        <div
          className={`h-full rounded-xl ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const GraphPercentage = ({
    percentage,
    borderColor,
    background,
    textColor,
  }: {
    percentage: number;
    borderColor: string;
    background: string;
    textColor: string;
  }) => (
    <div className="flex items-center w-full">
      <div
        className={`flex items-center justify-center w-16 h-5 border-2 ${background} ${borderColor} rounded-lg text-[10px] ${textColor}`}
      >
        <span>{percentage}%</span>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="w-full">
        <table className="w-full table-auto border-collapse text-[10px] mt-10 h-full">
          <thead>
            <tr>
              <th className="px-4 py-2 font-normal text-[#94A3B8] text-left">#</th>
              <th className="px-4 py-2 font-normal text-[#94A3B8] text-left">Produto</th>
              <th className="px-4 py-2 font-normal text-[#94A3B8] text-left">Alavancagem</th>
              <th className="px-4 py-2 font-normal text-[#94A3B8] text-left">%/</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataset, index) => (
              <tr key={index}>
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
                    percentage={dataset.percentage}
                    color={dataset.graphBarColor}
                    background={dataset.graphBarBackground}
                  />
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200`}
                >
                  <GraphPercentage
                    percentage={dataset.percentage}
                    borderColor={dataset.graphPercentageBorder}
                    background={dataset.graphPercentageBackground}
                    textColor={dataset.percentageTextColor}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsChart;
