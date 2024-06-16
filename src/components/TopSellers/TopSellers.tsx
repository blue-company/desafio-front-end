"use client"
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
import { TopSellersProps } from "./types";
import { data } from "./data";
import { ImageDown } from "lucide-react";
import Image from "next/image";

  

  
  function padNumber(num: number): string {
    if (num > 0 && num < 10) {
      return "0" + num;
    }
    return "" + num;
  }
  
  
  export const columns: ColumnDef<TopSellersProps>[] = [
    {
      accessorKey: "position",
      header: "Posição",
      cell: ({ row }) => <div className="text-center">{padNumber(row.getValue("position") as number)} º</div>,
    },
    {
      accessorKey: "img",
      header: "    ",
      cell: ({ row }) => {
        const img = row.getValue("img") as string;
  
        return <Image src={img} alt="profile" width={40} height={40} />;
      },
    },
    {
      accessorKey: "name",
      header: "Nome do Vendedor",
      cell: ({ row }) => {
        const name = row.getValue("name") as string;
  
        return <div className="captalize text-center md:text-start">{name}</div>;
      },
    },
    {
      accessorKey: "total",
      header: "Total de vendas",
      cell: ({ row }) => {
        const total = row.getValue("total") as number;
        return (
          <div>
            <Progress value={total} className="border" />
          </div>
        );
      },
    },
    {
      header:" ",
      cell: ({ row }) => {
        const total = row.getValue("total") as number;
        return (
          <div>
            <Badge
              variant="outline"
              className="rounded-md text-primary-foreground border-primary-foreground"
            >
              {total}
            </Badge>
          </div>
        );
      },
    },
  ];
  
  export function TopSellers() {
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
        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="text-center md:text-start" key={header.id}>
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
                      <TableCell key={cell.id} className="p-0 px-1 xl:px-4 py-2">
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
  