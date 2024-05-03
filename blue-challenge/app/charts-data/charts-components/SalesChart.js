import SalesComponentCard from "@/app/components/SalesComponentCard";

import { BiExport } from "react-icons/bi";

const SalesChart = () => {
  return (
    <div className="flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full">
        <div>
          <h1 className="text-13 font-bold">Vendas hoje</h1>
          <h2 className="mt-1 text-[11px] text-zinc-400">Resumo de vendas</h2>
        </div>
        <button className="flex items-center h-8 ml-auto px-3 border-2 rounded-lg text-[10px] cursor-pointer hover:bg-blue-250 hover:text-white hover:border-0">
          <BiExport /> Exportar
        </button>
      </div>

      <div className="flex w-full h-full mt-7 gap-6 overflow-x-auto">
        <SalesComponentCard
          backgroundColor={"bg-[#FFE2E5]"}
          imageSrc={"/assets/GraphIcon.png"}
          imageAlt={"Graph Icon"}
          spanFirst={"R$ 1,000"}
          spanSecond={"Total de vendas"}
          spanThird={"+8% a mais que ontem"}
        />

        <SalesComponentCard
          backgroundColor={"bg-[#FFF4DE]"}
          imageSrc={"/assets/NoteIcon.png"}
          imageAlt={"Note Icon"}
          spanFirst={"300"}
          spanSecond={"Total de contratos"}
          spanThird={"+5% a mais que ontem"}
        />

        <SalesComponentCard
          backgroundColor={"bg-[#DCFCE7]"}
          imageSrc={"/assets/TagIcon.png"}
          imageAlt={"Tag Icon"}
          spanFirst={"5"}
          spanSecond={"Implantados"}
          spanThird={"+1,2% a mais que ontem"}
        />

        <SalesComponentCard
          backgroundColor={"bg-[#F3E8FF]"}
          imageSrc={"/assets/AddIcon.png"}
          imageAlt={"Add Icon"}
          spanFirst={"8"}
          spanSecond={"Novos contratos"}
          spanThird={"0.5% a mais que ontem"}
        />
      </div>
    </div>
  );
};

export default SalesChart;
