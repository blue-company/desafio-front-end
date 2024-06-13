import {
  BarChart,
  FileSpreadsheet,
  Pencil,
  Upload,
  UserPlus,
} from "lucide-react";
import NewsMiniCard from "../news-mini-card";

const SellsChart = () => {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-gray-400 font-semibold">Resumo de vendas</span>

        <button className="flex border font-semibold rounded-lg border-blue-950/20 p-1 gap-1 text-sm items-center text-blue-950">
          <Upload size={20} />
          Exportar
        </button>
      </div>

      <div className="flex xl:flex-row flex-col items-center  gap-2 justify-around mt-10 mb-5">
        <NewsMiniCard
          icon={<BarChart className="bg-pink-700 w-9 h-9 p-1 rounded-full" />}
          results={"R$ 1,000"}
          description="Total de vendas"
          percentageText="8% a mais que ontem"
          className="bg-red-500/25"
        />
        <NewsMiniCard
          icon={
            <FileSpreadsheet className="bg-orange-400 w-9 h-9 p-1 rounded-full" />
          }
          results={300}
          description="Total de contratos"
          percentageText="5% a mais que ontem"
          className="bg-yellow-500/25"
        />
        <NewsMiniCard
          icon={<Pencil className="bg-green-500 w-9 h-9 p-1 rounded-full" />}
          results={5}
          description="Implantadas"
          percentageText="1,2% a mais que ontem"
          className="bg-green-500/25"
        />
        <NewsMiniCard
          icon={<UserPlus className="bg-purple-500 w-9 h-9 p-1 rounded-full" />}
          results={9}
          description="Novos contratos"
          percentageText="0,5% a mais que ontem"
          className="bg-purple-500/25"
        />
      </div>
    </>
  );
};

export default SellsChart;
