import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";

interface DataItem {
  pv: number;
  amt: number;
}

interface LegendEntry {
  color: string;
  value: string;
}

interface CustomLegendProps {
  payload: LegendEntry[];
  maxValues: { [key: string]: number };
}

const data: DataItem[] = [
  {
    pv: 1050,
    amt: 600,
  },
  {
    pv: 1135,
    amt: 635,
  },
  {
    pv: 1050,
    amt: 250,
  },
  {
    pv: 980,
    amt: 300,
  },
  {
    pv: 880,
    amt: 280,
  },
  {
    pv: 1000,
    amt: 550,
  },
];

const maxValue = (data: DataItem[], key: keyof DataItem): number => {
  return Math.max(...data.map((item) => item[key]));
};

const maxValues = {
  Realidade: maxValue(data, "amt"),
  Expectativa: maxValue(data, "pv"),
};

const CustomLegend = (props: CustomLegendProps) => {
  const { payload, maxValues } = props;
  return (
    <div
      className="custom-legend"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        borderTop: "1px solid #e0e0e0",
        marginTop: "10px",
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <span
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: entry.color,
                marginRight: "5px",
              }}
            ></span>
            <span className="text-gray-400 font-medium">{entry.value}</span>
            {entry.value === "Realidade" && (
              <div className="bg-gray-200 h-[2vh] ml-5 w-px"></div>
            )}
          </div>
          <div className="text-black ml-4 font-semibold">
            {maxValues[entry.value]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ServiceChart() {
  const legendPayload = [{ value: "Realidade" }, { value: "Expectativa" }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={20} data={data}>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis hide dataKey="name" />
        <YAxis hide />
        <Tooltip />
        <Legend
          content={
            <CustomLegend
              payload={legendPayload.map((entry) => ({
                ...entry,
                color: entry.value === "Realidade" ? "#66de90" : "#6698de",
              }))}
              maxValues={maxValues}
            />
          }
        />
        <Bar
          dataKey="amt"
          stackId="a"
          name="Realidade"
          fill="#66de90"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="pv"
          stackId="a"
          name="Expectativa"
          fill="#6698de"
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
