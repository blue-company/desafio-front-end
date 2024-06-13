import { Search } from "lucide-react";
import { useState } from "react";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center w-1/3 justify-start bg-gray-100 rounded-lg">
      <div className="flex gap-2 px-4 py-3 items-center">
        <Search size={18} className="text-blue-700 cursor-pointer" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar informações"
          className="text-sm text-gray-400 font-semibold bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
