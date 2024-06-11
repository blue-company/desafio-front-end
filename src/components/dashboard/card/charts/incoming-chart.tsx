import { BarChart } from "@mui/x-charts/BarChart";

export default function IncomesChart() {
  return (
    <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], label: "Aguardando" },
        { data: [14, 6, 5, 8, 9], label: "Implantadas" },
      ]}
      width={600}
      height={350}
    />
  );
}
