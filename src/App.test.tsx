import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Testes do App", () => {
  it("deve renderizar a aplicação toda sem erros", () => {
    render(<App />);
  });

  const titles = [
    "Vendas hoje",
    "Plataformas",
    "Rendimento total",
    "Vidas",
    "Realidade",
    "Top produtos",
    "Mapeamento de vendas por UF",
    "Nivel de serviço",
  ];

  titles.forEach((title) => {
    it(`deve renderizar o DashboardCard com o título "${title}"`, () => {
      const { getByText } = render(<App />);
      expect(getByText(title)).toBeInTheDocument();
    });
  });
});
