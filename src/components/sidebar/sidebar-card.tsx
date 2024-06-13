import { CodeXml } from "lucide-react";
import React from "react";


const SidebarCard = () => {
  return (
    <div className="flex flex-col bg-blue-800 items-center justify-center rounded-xl gap-4 p-4">
      <div className="items-center justify-center flex flex-col">
        <CodeXml
          size={30}
          className="text-blue-800 rounded-2xl w-12 h-12 p-2 bg-white"
        />
        <h1 className="text-xl font-semibold text-white text-center w-32">
          Conheça a Blue
        </h1>
      </div>

      <p className="font-semibold text-white/80 text-xs text-center">
        Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech
      </p>

      <button className="bg-white 00 hover:text-black font-bold text-blue-800 px-8 mt-2 py-1 rounded-lg">
        Conheçer
      </button>
    </div>
  );
};

export default SidebarCard;
