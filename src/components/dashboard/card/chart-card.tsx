import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { LineChart } from "@mui/x-charts/LineChart";

const lineChartsParams = {
  series: [
    {
      id: "td",
      data: [320, 300, 260, 200, 190, 220, 280, 310, 300, 280, 180, 140],
      label: "TD Consultoria",
      showMark: false,
      color: "#9C27B0",
    },
    {
      id: "riko",
      data: [250, 220, 180, 130, 180, 280, 350, 340, 320, 280, 200, 140],
      label: "RIKO Plataforma",
      showMark: false,
      color: "#F44336",
    },
    {
      id: "blue",
      data: [280, 360, 350, 300, 210, 200, 240, 290, 310, 300, 240, 200],
      label: "Blue Serviços",
      showMark: false,
      color: "#4CAF50",
    },
  ],
  xAxis: [
    {
      data: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      scaleType: "point",
      id: "axis1",
    },
  ],
  height: 300,
};

export default function ChartCard() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <LineChart {...lineChartsParams} />
      </Box>
    </Stack>
  );
}
