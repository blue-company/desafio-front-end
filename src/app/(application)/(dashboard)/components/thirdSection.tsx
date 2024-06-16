import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from './card';
import { columns } from './columns';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export function ThirdSection() {
  const dataTable = [
    {
      id: 0o1,
      productName: 'BLUE START ENF SC',
      leverage: 80,
      percent: 45
    },
    {
      id: 0o2,
      productName: 'BLUE START ENF CO',
      leverage: 60,
      percent: 29
    },
    {
      id: 0o3,
      productName: 'BLUE START APT CO',
      leverage: 55,
      percent: 18
    },
    {
      id: 0o4,
      productName: 'BLUE START APT SC',
      leverage: 30,
      percent: 25
    }
  ];

  const table = useReactTable({
    data: dataTable,
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
            <BarChart data={data} barCategoryGap={16}>
              <Tooltip />
              <Bar dataKey="pv" stackId="a" fill="#00E096" radius={[1, 1, 0, 0]} />
              <Bar dataKey="uv" stackId="a" fill="#0095FF" radius={[1, 1, 0, 0]} />
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
