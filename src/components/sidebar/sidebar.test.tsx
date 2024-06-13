import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./sidebar";

describe("Sidebar", () => {
  test("deve mostrar os ícones corretamente", () => {
    render(<Sidebar />);
    expect(screen.getByLabelText("PieChart Icon")).toBeInTheDocument();
    expect(screen.getByLabelText("BarChart2 Icon")).toBeInTheDocument();
  });
});
