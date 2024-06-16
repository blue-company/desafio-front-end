import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { Progress } from "../../ui/progress";
import { Badge } from "../../ui/badge";
import { TopProductsProps } from "./types";
import { data } from "./data";

function padNumber(num: number): string {
  if (num > 0 && num < 10) {
    return "0" + num;
  }
  return "" + num;
}

function getColor(percentage: number): string {
  if (percentage >= 0 && percentage < 25) {
    return "#FF8900";
  } else if (percentage >= 25 && percentage < 50) {
    return "#884DFF";
  } else if (percentage >= 50 && percentage < 75) {
    return "#00E096";
  } else if (percentage >= 75 && percentage <= 100) {
    return "#0095FF";
  } else {
    return "default";
  }
}

export const columns: ColumnDef<TopProductsProps>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => <div>{padNumber(row.getValue("id") as number)}</div>,
  },
  {
    accessorKey: "product",
    header: "Produto",
    cell: ({ row }) => {
      const product = row.getValue("product") as string;

      return <div className="uppercase">{product}</div>;
    },
  },
  {
    accessorKey: "leverage",
    header: "Alavancagem",
    cell: ({ row }) => {
      const percentage = row.getValue("leverage") as number;
      return (
        <div>
          <Progress value={percentage} className="border" />
        </div>
      );
    },
  },
  {
    header: "%",
    cell: ({ row }) => {
      const percentage = row.getValue("leverage") as number;
      return (
        <div>
          <Badge
            variant="outline"
            className="rounded-md"
            style={{
              borderColor: getColor(percentage),
              color: getColor(percentage),
            }}
          >
            {percentage}%
          </Badge>
        </div>
      );
    },
  },
];

export function TopProductsDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-0 px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
