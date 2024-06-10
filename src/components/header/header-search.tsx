import { Search } from "lucide-react";

const HeaderSearch = () => {
  return (
    <div className="flex  items-center w-1/3 justify-start  bg-gray-100 rounded-lg">
      <div className="flex gap-2 px-4 py-3 items-center">
        <Search size={18} className="text-blue-700" />
        <p className="text-sm  text-gray-400 font-semibold">
          Pesquisar informações
        </p>
      </div>
    </div>
  );
};

export default HeaderSearch;
