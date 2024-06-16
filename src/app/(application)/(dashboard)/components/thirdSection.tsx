'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { GetAllDashboardResponse } from '@/service/dashboard/type';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from './card';
import { columns } from './columns';

interface ThirdSectionProps {
  data: GetAllDashboardResponse;
}

export function ThirdSection({ data }: ThirdSectionProps) {
  const table = useReactTable({
    data: data.topProducts,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <>
      <Card className="flex-grow" title="Top produtos">
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
      </Card>
      <Card title="Mapeamento de vendas por UF">
        <div className="flex items-center justify-center">
          <Image
            src="/brazilMap.svg"
            alt="Mapa do Brasil"
            className="w-96 2xl:w-56"
            width={230}
            height={230}
          />
        </div>
      </Card>
      <Card title="Nível de serviço">
        <div className="flex flex-col w-full h-[360px] 2xl:w-[300px] 2xl:h-[240px] gap-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.serviceLevel} barCategoryGap={16}>
              <Tooltip />
              <Bar dataKey="reality" stackId="a" fill="#00E096" radius={[1, 1, 0, 0]} />
              <Bar dataKey="expectation" stackId="a" fill="#0095FF" radius={[1, 1, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="h-1 border-b border-gray-200" />
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 items-center">
                <Circle fill="#69B7E5" color="#13CB8D" size={8} strokeWidth={1.75} />
                <span className="text-gray-400">Expectativa</span>
              </div>
              <h3 className="text-[#222B45] font-semibold">1,135</h3>
            </div>
            <div className="border-r border-gray-300" />
            <div className="flex flex-col items-center">
              <div className="flex gap-1 items-center">
                <Circle fill="#13CB8D" color="#13CB8D" size={8} strokeWidth={1.75} />
                <span className="text-gray-400">Realidade</span>
              </div>
              <h3 className="text-[#222B45] font-semibold">635</h3>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
