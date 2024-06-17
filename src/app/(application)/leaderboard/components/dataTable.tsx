'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useState } from 'react';
import { columns } from './columns';
import { Toolbar } from './toolbar';

export interface DataType {
  name: string;
  sales: string;
  sector: string;
  amount: string;
  date: string;
}

const data: DataType[] = [
  {
    name: 'John Doe',
    sales: '193',
    sector: 'Administrativo',
    amount: 'R$19.500,00',
    date: '2024-01-15'
  },
  {
    name: 'Jane Smith',
    sales: '287',
    sector: 'Comercial',
    amount: 'R$25.750,00',
    date: '2024-02-20'
  },
  {
    name: 'Carlos Silva',
    sales: '175',
    sector: 'Tecnologia',
    amount: 'R$22.300,00',
    date: '2024-03-05'
  },
  {
    name: 'Maria Garcia',
    sales: '210',
    sector: 'Vendas',
    amount: 'R$28.150,00',
    date: '2024-04-18'
  },
  {
    name: 'Pedro Santos',
    sales: '320',
    sector: 'Marketing',
    amount: 'R$31.900,00',
    date: '2024-05-22'
  },
  {
    name: 'Luciana Costa',
    sales: '145',
    sector: 'Financeiro',
    amount: 'R$17.400,00',
    date: '2024-06-10'
  },
  {
    name: 'Roberto Lima',
    sales: '280',
    sector: 'Recursos Humanos',
    amount: 'R$26.800,00',
    date: '2024-07-30'
  },
  {
    name: 'Fernanda Oliveira',
    sales: '200',
    sector: 'Jurídico',
    amount: 'R$24.500,00',
    date: '2024-08-12'
  },
  {
    name: 'Rafael Moreira',
    sales: '165',
    sector: 'Logística',
    amount: 'R$21.300,00',
    date: '2024-09-19'
  },
  {
    name: 'Beatriz Almeida',
    sales: '290',
    sector: 'Pesquisa e Desenvolvimento',
    amount: 'R$29.600,00',
    date: '2024-10-25'
  },
  {
    name: 'Gustavo Souza',
    sales: '185',
    sector: 'Administrativo',
    amount: 'R$20.800,00',
    date: '2024-11-02'
  },
  {
    name: 'Laura Martins',
    sales: '255',
    sector: 'Comercial',
    amount: 'R$23.500,00',
    date: '2024-12-15'
  },
  {
    name: 'Victor Pereira',
    sales: '300',
    sector: 'Tecnologia',
    amount: 'R$27.400,00',
    date: '2025-01-08'
  },
  {
    name: 'Ana Clara Fernandes',
    sales: '225',
    sector: 'Vendas',
    amount: 'R$25.600,00',
    date: '2025-02-14'
  },
  {
    name: 'Ricardo Barbosa',
    sales: '350',
    sector: 'Marketing',
    amount: 'R$33.700,00',
    date: '2025-03-21'
  },
  {
    name: 'Patrícia Lima',
    sales: '170',
    sector: 'Financeiro',
    amount: 'R$19.100,00',
    date: '2025-04-11'
  },
  {
    name: 'Felipe Azevedo',
    sales: '290',
    sector: 'Recursos Humanos',
    amount: 'R$28.900,00',
    date: '2025-05-17'
  }
];

export function DataTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      sorting
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <Toolbar table={table} />
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
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
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
