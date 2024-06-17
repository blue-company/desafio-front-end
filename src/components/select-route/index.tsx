"use client";

import { optionsRoute } from "~/utils/get-options-route";
import { AutoComplete } from "../ui/autocomplete";
import { useRouter } from "~/hook/useRouter";

export function SelectRoute() {
  const { handleChangePage } = useRouter();

  return (
    <div className="hidden lg:block">
      <AutoComplete
        options={optionsRoute}
        emptyMessage="Não existe essa página"
        placeholder="Pesquisar informações"
        onValueChange={(option) => {
          handleChangePage(option.value);
        }}
      />
    </div>
  );
}
