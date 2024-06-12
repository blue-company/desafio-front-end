import { BriefcaseBusiness, Ticket, WorkflowIcon } from "lucide-react";
import { ReactHTMLElement } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        <div
          key={index}
          className="legend-item flex flex-row gap-2"
          style={{ color: entry.color }}
        >
          {entry.value === "Contratos finalizados" ? (
            <BriefcaseBusiness
              className={`bg-[#4f9e58]/20 w-8 h-8 p-1 mb-1 rounded-md`}
            />
          ) : (
            <Ticket className={`bg-[#dbcd51]/20 w-8 h-8 p-1 rounded-md`} />
          )}
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function RealityChart() {
  const data = [
    { day: "Jan", Aguardando: 14000, Implantadas: 13000 },
    { day: "Fev", Aguardando: 16000, Implantadas: 12000 },
    { day: "Mar", Aguardando: 6000, Implantadas: 23000 },
    { day: "Abr", Aguardando: 15500, Implantadas: 6000 },
    { day: "Mai", Aguardando: 13000, Implantadas: 12000 },
    { day: "Jun", Aguardando: 15500, Implantadas: 13500 },
    { day: "Jul", Aguardando: 21000, Implantadas: 11000 },
  ];

  return (
    <BarChart
      width={350}
      height={230}
      data={data}
      barGap={8}
      barCategoryGap={10}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis dataKey="day" tickLine={false} axisLine={{ strokeWidth: 0 }} />
      <YAxis
        hide
        axisLine={false}
        ticks={[0, 5000, 10000, 15000, 20000, 25000]}
        tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
      />
      <Tooltip />
      <Legend content={<CustomLegend />} />
      <Bar
        dataKey="Implantadas"
        name="Contratos finalizados"
        fill="#4f9e58"
        radius={[5, 5, 0, 0]}
      />
      <Bar
        dataKey="Aguardando"
        name="Aguardando"
        fill="#dbcd51"
        radius={[5, 5, 0, 0]}
      />
    </BarChart>
  );
}
