import { useState } from "react";
import { menuRoutes } from "~/constants/menu-routes";

export function useFilterOptionsMenu() {
  const [optionsMenu, setOptionsMenu] = useState(menuRoutes);

  function handleFilterOptionsMenu(input: string) {
    const newOptionsMenu = menuRoutes.filter((itemMenu) =>
      itemMenu.label.toLowerCase().includes(input.toLowerCase())
    );

    setOptionsMenu(newOptionsMenu.length ? newOptionsMenu : menuRoutes);
  }

  return {
    optionsMenu,
    handleFilterOptionsMenu,
  };
}
