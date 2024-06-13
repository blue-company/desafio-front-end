import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import React from "react";
import { useTable, Column, Row, HeaderGroup, Cell } from "react-table";

interface Data {
  id: string;
  produto: string;
  alavancagem: number;
  porcentagem: number;
}

const data: Data[] = [
  { id: "01", produto: "BLUE START ENF SC", alavancagem: 45, porcentagem: 45 },
  { id: "02", produto: "BLUE START ENF CO", alavancagem: 29, porcentagem: 29 },
  { id: "03", produto: "BLUE START APT CO", alavancagem: 18, porcentagem: 18 },
  { id: "04", produto: "BLUE START APT SC", alavancagem: 25, porcentagem: 25 },
];

interface ColorMap {
  [key: string]: { strong: string; light: string };
}

const getColor = (id: string, shade: "strong" | "light" = "strong"): string => {
  const colors: ColorMap = {
    "01": { strong: "#6698de", light: "#b3d2fc" },
    "02": { strong: "#10eb1a", light: "#c8f7ca" },
    "03": { strong: "#6035a1", light: "#e9d8fd" },
    "04": { strong: "#c76b1c", light: "#ffe5d3" },
  };
  return colors[id] ? colors[id][shade] : "#000";
};

interface ProgressBarProps {
  id: string;
  now: number;
}

const StyledProgressBar = styled(ProgressBar)<ProgressBarProps>`
  & .progress-bar {
    background-color: ${(props) => getColor(props.id, "strong")} !important;
  }
  background-color: ${(props) => getColor(props.id, "light")} !important;
  height: 5px;
`;

interface PercentageBoxProps {
  color: string;
  borderColor: string;
}

const PercentageBox = styled.div<PercentageBoxProps>`
  background-color: ${(props) => `${props.color}40`};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 8px;
  padding: 1px 10px;
  margin-left: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.borderColor};
`;

const columns: Column<Data>[] = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Produto",
    accessor: "produto",
  },
  {
    Header: "Alavancagem",
    accessor: "alavancagem",
    Cell: ({ row }: { row: Row<Data> }) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "23px",
        }}
      >
        <StyledProgressBar
          now={row.original.alavancagem}
          id={row.original.id}
          style={{ flex: 1 }}
        />
      </div>
    ),
  },
  {
    Header: "%",
    accessor: "porcentagem",
    Cell: ({ row }: { row: Row<Data> }) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <PercentageBox
          color={getColor(row.original.id, "light")}
          borderColor={getColor(row.original.id, "strong")}
        >
          {`${row.original.alavancagem}%`}
        </PercentageBox>
      </div>
    ),
  },
];

const ProductsChart = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ color: "#a0aec0", fontWeight: "400" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row<Data>) => {
          prepareRow(row);
          return (
            <tr style={{ fontWeight: "400" }} {...row.getRowProps()}>
              {row.cells.map((cell: Cell<Data>) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsChart;
