import novoContrato from "../../assets/DaySales/novoContrato.svg";
import implantadas from "../../assets/DaySales/implantadas.svg";
import vendas from "../../assets/DaySales/vendas.svg";
import { DaySalesCardProps } from "./types";
import totalContratos from "../../assets/DaySales/totalContratos.svg";

export const data:DaySalesCardProps[] = [
    {
        icon: vendas,
        color: "#FFE2E5",
        number: 1000,
        title: "Total de vendas",
        description: "+8% a mais que ontem"
    },
    {
        icon: totalContratos,
        color: "#FFF4DE",
        number: 300,
        title: "Total de contratos",
        description: "+5% a mais que ontem"
    },
    {
        icon: implantadas,
        color: "#DCFCE7",
        number: 5,
        title: "Implantadas",
        description: "+1,2% a mais que ontem"
    },
    {
        icon: novoContrato,
        color: "#F3E8FF",
        number: 8,
        title: "Novos Contratos",
        description: "+0,5% a mais que ontem"
    }
];