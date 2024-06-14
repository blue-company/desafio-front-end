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
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";

interface TopProductsProps {
  id: number;
  product: string;
  leverage: number;
}

const data: TopProductsProps[] = [
  { id: 1, product: "Product 1", leverage: 90 },
  { id: 2, product: "Product 2", leverage: 50 },
  { id: 3, product: "Product 3", leverage: 24 },
  { id: 4, product: "Product 4", leverage: 65 },
];

function padNumber(num: number): string {
  if (num > 0 && num < 10) {
    return "0" + num;
  }
  return "" + num;
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
          <Progress value={percentage} />
        </div>
      );
    },
  },
  {
    accessorKey: "leverage",
    header: "%",
    cell: ({ row }) => {
      const percentage = row.getValue("leverage") as number;
      return (
        <div>
          <Badge variant="outline">{percentage}%</Badge>
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
                    <TableCell key={cell.id}>
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
