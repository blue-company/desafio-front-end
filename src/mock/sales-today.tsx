import { NewContract } from "~/components/ui/icon/new-contract";
import { TotalContract } from "~/components/ui/icon/total-contract";
import { TotalDeploy } from "~/components/ui/icon/total-deploy";
import { TotalSales } from "~/components/ui/icon/total-sales";

export const salesTodayData = [
  {
    label: "Total de vendas",
    amount: "R$ 1,000",
    percent: "+8%",
    type: "totalSales",
    icon: () => <TotalSales />,
  },
  {
    label: "Total de contratos",
    amount: "300",
    percent: "+5%",
    type: "totalContract",
    icon: () => <TotalContract />,
  },
  {
    label: "Implatados",
    amount: "5",
    percent: "+1,2%",
    type: "totalDeploy",
    icon: () => <TotalDeploy />,
  },
  {
    label: "Novos contratos",
    amount: "8",
    percent: "+0,5%",
    type: "newContract",
    icon: () => <NewContract />,
  },
];
