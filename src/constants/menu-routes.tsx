import { BarChart2, PieChart } from "lucide-react";

export const menuRoutes = [
  {
    path: "/",
    label: "Dashboard",
    icon(className: string) {
      return <PieChart className={className} />;
    },
  },
  {
    path: "/leaderboard",
    label: "Leaderboard",
    icon(className: string) {
      return <BarChart2 className={className} />;
    },
  },
];
