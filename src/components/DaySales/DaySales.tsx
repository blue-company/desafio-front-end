import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { DaySalesCard } from "./DaySalesCard";
import vendas from "./assets/vendas.svg";
import totalContratos from "./assets/totalContratos.svg";
import novoContrato from "./assets/novoContrato.svg";
import implantadas from "./assets/implantadas.svg";


export function DaySales() {
    return (
        <Card className ="bg-white mt-10 w-full">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Vendas Hoje
            <CardDescription>Resumo de vendas</CardDescription>
          </CardTitle>
          <Button variant="outline" className="w-28"><Upload className="w-4"/>Exportar</Button>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-between gap-1">
          <DaySalesCard icon={vendas} color="#FFE2E5" number={1000} title="Total de vendas" description="+8% a mais que ontem" />
          <DaySalesCard icon={totalContratos} color="#FFF4DE" number={300} title="Total de contratos" description="+5% a mais que ontem" />
          <DaySalesCard icon={implantadas} color="#DCFCE7" number={5} title="Implantadas" description="+1,2% a mais que ontem" />
          <DaySalesCard icon={novoContrato} color="#F3E8FF" number={8} title="Novos Contratos" description="+0,5% a mais que ontem" />
        </CardContent>
      </Card>
    )
}   