import { menuRoutes } from "~/constants/menu-routes";

function getOptionsRoute() {
  return menuRoutes.map((itemRoute) => {
    return {
      value: itemRoute.path,
      label: itemRoute.label,
    };
  });
}

export const optionsRoute = getOptionsRoute();
