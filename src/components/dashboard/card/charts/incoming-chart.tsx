import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function IncomesChart() {
  const [chartWidth, setChartWidth] = useState(525);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 768 ? 430 : 525; // 768px é um breakpoint comum para dispositivos sm
      setChartWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { day: "Segunda", Aguardando: 14000, Implantadas: 13000 },
    { day: "Terça", Aguardando: 16000, Implantadas: 12000 },
    { day: "Quarta", Aguardando: 6000, Implantadas: 23000 },
    { day: "Quinta", Aguardando: 15500, Implantadas: 6000 },
    { day: "Sexta", Aguardando: 13000, Implantadas: 12000 },
    { day: "Sábado", Aguardando: 15500, Implantadas: 13500 },
    { day: "Domingo", Aguardando: 21000, Implantadas: 11000 },
  ];

  return (
    <BarChart
      width={chartWidth}
      height={230}
      data={data}
      barGap={8}
      barCategoryGap={10}
    >
      <CartesianGrid horizontal={true} vertical={false} />
      <XAxis dataKey="day" tickLine={false} axisLine={{ strokeWidth: 0 }} />
      <YAxis
        axisLine={false}
        ticks={[0, 5000, 10000, 15000, 20000, 25000]}
        tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
      />
      <Tooltip />
      <Legend iconType="circle" />
      <Bar dataKey="Aguardando" fill="#6698de" radius={[5, 5, 0, 0]} />
      <Bar dataKey="Implantadas" fill="#66de90" radius={[5, 5, 0, 0]} />
    </BarChart>
  );
}
