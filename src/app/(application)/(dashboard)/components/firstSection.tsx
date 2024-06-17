'use client';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { GetAllDashboardResponse } from '@/service/dashboard/type';
import { BarChartIcon, FileText, Tag, Upload, UserPlus } from 'lucide-react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Card } from './card';

interface FirstSectionProps {
  data: GetAllDashboardResponse;
}

export function FirstSection({ data }: FirstSectionProps) {
  function ExportActionButton() {
    return toast({
      variant: 'success',
      title: 'Sucesso',
      description: 'Em instantes seu download começará'
    });
  }

  function ExportButton() {
    return (
      <Button onClick={() => ExportActionButton()} className="gap-2" variant="outline">
        <Upload />
        Exportar
      </Button>
    );
  }

  return (
    <>
      <Card
        className="flex-grow"
        title="Vendas hoje"
        subtitle="Resumo de vendas"
        button={<ExportButton />}
      >
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 2xl:gap-0 2xl:justify-between">
          <div className="flex flex-col gap-1 bg-[#FFE2E5] px-4 py-6 rounded-lg transition duration-300 hover:scale-[1.1]">
            <div className="bg-[#FA5A7D] max-w-min p-2 rounded-full">
              <BarChartIcon
                strokeWidth={3}
                color="#FA5A7D"
                size={18}
                className="bg-white rounded-sm"
              />
            </div>
            <span className="font-bold text-[#151D48] text-lg 2xl:text-xl">
              R${data.salesToday.salesAmount.amount}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-sm 2xl:text-base text-[#425166]">
                Total de vendas
              </span>
              <span className="text-xs text-[#4079ED] font-semibold">
                +{data.salesToday.salesAmount.percentMoreYesterday}% a mais que ontem
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#FFF4DE] px-4 py-6 rounded-lg transition duration-300 hover:scale-[1.1]">
            <div className="bg-[#FF947A] max-w-min p-2 rounded-full">
              <FileText color="white" strokeWidth={3} size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-lg 2xl:text-xl">
              {data.salesToday.totalNumberContracts.amount}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-sm 2xl:text-base text-[#425166]">
                Total de contratos
              </span>
              <span className="text-xs text-[#4079ED] font-semibold">
                +{data.salesToday.totalNumberContracts.percentMoreYesterday}% a mais que ontem
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#DCFCE7] px-4 py-6 rounded-lg transition duration-300 hover:scale-[1.1]">
            <div className="bg-[#3CD856] max-w-min p-2 rounded-full">
              <Tag strokeWidth={3} color="white" size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-lg 2xl:text-xl">
              {data.salesToday.deployed.amount}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-sm 2xl:text-base text-[#425166]">Implantadas</span>
              <span className="text-xs text-[#4079ED] font-semibold">
                +{data.salesToday.deployed.percentMoreYesterday}% a mais que ontem
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#F3E8FF] px-4 py-6 rounded-lg transition duration-300 hover:scale-[1.1]">
            <div className="bg-[#BF83FF] max-w-min p-2 rounded-full">
              <UserPlus strokeWidth={3} color="white" size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-lg 2xl:text-xl">
              {data.salesToday.newContracts.amount}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-sm 2xl:text-base text-[#425166]">
                Novos contratos
              </span>
              <span className="text-xs text-[#4079ED] font-semibold">
                {data.salesToday.newContracts.percentMoreYesterday}% a mais que ontem
              </span>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Plataformas">
        <div className="flex justify-center items-center">
          <div className="w-full h-[240px] 2xl:w-[550px] 2xl:h-[210px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.platformData}>
                <CartesianGrid horizontal={true} vertical={false} />
                <XAxis dataKey="name" axisLine={{ strokeWidth: 0 }} tickLine={false} />
                <YAxis
                  axisLine={false}
                  ticks={[0, 100, 200, 300, 400]}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip />
                <Legend iconType="square" iconSize={10} />
                <Line
                  type="monotone"
                  dataKey="TD Consultoria"
                  stroke="#A700FF"
                  strokeWidth={4}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="RIKO Plataforma"
                  stroke="#EF4444"
                  strokeWidth={4}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Blue Serviços"
                  stroke="#3CD856"
                  strokeWidth={4}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </>
  );
}
