import { BriefcaseBusiness, Ticket } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LegendEntry {
  value: string;
}

interface CustomLegendProps {
  payload: LegendEntry[];
  maxValues: { [key: string]: number };
}

const CustomLegend = (props: CustomLegendProps) => {
  const { payload, maxValues } = props;
  return (
    <div className="flex flex-col gap-2">
      {payload.map((entry: LegendEntry, index: number) => (
        <div
          key={index}
          className="legend-item flex items-center flex-row gap-2 text-blue-950 font-bold"
        >
          {entry.value === "Contratos finalizados" ? (
            <BriefcaseBusiness
              className={`bg-[#7ac28d]/20 text-[#7ac28d] w-8 h-8 p-1 mb-1 rounded-md`}
            />
          ) : (
            <Ticket
              className={`bg-[#f0df46]/20 text-[#f0df46] w-8 h-8 p-1 mb-1 rounded-md`}
            />
          )}
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col">
              <span className="text-sm">{entry.value}</span>
              <span className="text-xs text-gray-400 font-semibold">
                {entry.value === "Contratos finalizados"
                  ? "Global"
                  : "Commercial"}
              </span>
            </div>
            <span
              className={`text-sm font-semibold ${
                entry.value === "Contratos finalizados"
                  ? "text-[#7ac28d]"
                  : "text-[#f0df46]"
              }`}
            >
              {maxValues[entry.value]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function RealityChart() {
  const data = [
    { day: "Jan", Aguardando: 10000, Implantadas: 7000 },
    { day: "Fev", Aguardando: 9000, Implantadas: 6000 },
    { day: "Mar", Aguardando: 11000, Implantadas: 5000 },
    { day: "Abr", Aguardando: 9000, Implantadas: 7000 },
    { day: "Mai", Aguardando: 12122, Implantadas: 8823 },
    { day: "Jun", Aguardando: 12122, Implantadas: 8823 },
    { day: "Jul", Aguardando: 12122, Implantadas: 8823 },
  ];

  const maxValues = {
    Aguardando: Math.max(...data.map((item) => item.Aguardando)),
    "Contratos finalizados": Math.max(...data.map((item) => item.Implantadas)),
  };

  return (
    <BarChart
      width={350}
      height={230}
      data={data}
      barGap={8}
      barCategoryGap={10}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis
        dataKey="day"
        tickLine={false}
        axisLine={{ strokeWidth: 0 }}
        tick={{
          fontSize: "12px",
          fontWeight: "500",
          fill: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <YAxis
        hide
        axisLine={false}
        tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
      />
      <Tooltip />
      <Legend content={<CustomLegend maxValues={maxValues} payload={[]} />} />
      <Bar
        dataKey="Implantadas"
        name="Contratos finalizados"
        fill="#7ac28d"
        radius={[3, 3, 0, 0]}
      />
      <Bar
        dataKey="Aguardando"
        name="Aguardando"
        fill="#f0df46"
        radius={[3, 3, 0, 0]}
      />
    </BarChart>
  );
}
