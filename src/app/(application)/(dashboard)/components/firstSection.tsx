import { Button } from '@/components/ui/button';
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

export function FirstSection() {
  function ExportButton() {
    return (
      <Button className="gap-2" variant="outline">
        <Upload />
        Exportar
      </Button>
    );
  }

  const data = [
    { name: 'Jan', 'TD Consultoria': 320, 'RIKO Plataforma': 250, 'Blue Serviços': 260 },
    { name: 'Feb', 'TD Consultoria': 350, 'RIKO Plataforma': 220, 'Blue Serviços': 380 },
    { name: 'Mar', 'TD Consultoria': 280, 'RIKO Plataforma': 190, 'Blue Serviços': 240 },
    { name: 'Apr', 'TD Consultoria': 240, 'RIKO Plataforma': 220, 'Blue Serviços': 180 },
    { name: 'May', 'TD Consultoria': 290, 'RIKO Plataforma': 270, 'Blue Serviços': 220 },
    { name: 'Jun', 'TD Consultoria': 330, 'RIKO Plataforma': 320, 'Blue Serviços': 380 },
    { name: 'Jul', 'TD Consultoria': 300, 'RIKO Plataforma': 330, 'Blue Serviços': 270 },
    { name: 'Aug', 'TD Consultoria': 250, 'RIKO Plataforma': 300, 'Blue Serviços': 250 },
    { name: 'Sep', 'TD Consultoria': 230, 'RIKO Plataforma': 270, 'Blue Serviços': 290 },
    { name: 'Oct', 'TD Consultoria': 260, 'RIKO Plataforma': 250, 'Blue Serviços': 310 },
    { name: 'Nov', 'TD Consultoria': 280, 'RIKO Plataforma': 240, 'Blue Serviços': 270 },
    { name: 'Dec', 'TD Consultoria': 250, 'RIKO Plataforma': 230, 'Blue Serviços': 260 }
  ];

  return (
    <>
      <Card
        className="flex-grow"
        title="Vendas hoje"
        subtitle="Resumo de vendas"
        button={<ExportButton />}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 bg-[#FFE2E5] px-4 py-6 rounded-lg">
            <div className="bg-[#FA5A7D] max-w-min p-2 rounded-full">
              <BarChartIcon
                strokeWidth={3}
                color="#FA5A7D"
                size={18}
                className="bg-white rounded-sm"
              />
            </div>
            <span className="font-bold text-[#151D48] text-xl">R$ 1,000</span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-[#425166]">Total de vendas</span>
              <span className="text-xs text-[#4079ED] font-semibold">+8% a mais que ontem</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#FFF4DE] px-4 py-6 rounded-lg">
            <div className="bg-[#FF947A] max-w-min p-2 rounded-full">
              <FileText color="white" strokeWidth={3} size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-xl">300</span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-[#425166]">Total de vendas</span>
              <span className="text-xs text-[#4079ED] font-semibold">+5% a mais que ontem</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#DCFCE7] px-4 py-6 rounded-lg">
            <div className="bg-[#3CD856] max-w-min p-2 rounded-full">
              <Tag strokeWidth={3} color="white" size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-xl">5</span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-[#425166]">Total de vendas</span>
              <span className="text-xs text-[#4079ED] font-semibold">+1,2% a mais que ontem</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#F3E8FF] px-4 py-6 rounded-lg">
            <div className="bg-[#BF83FF] max-w-min p-2 rounded-full">
              <UserPlus strokeWidth={3} color="white" size={18} />
            </div>
            <span className="font-bold text-[#151D48] text-xl">8</span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-[#425166]">Total de vendas</span>
              <span className="text-xs text-[#4079ED] font-semibold">0,5% a mais que ontem</span>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Plataformas">
        <div className="flex justify-center items-center">
          <div>
            <ResponsiveContainer width={550} height={210}>
              <LineChart data={data}>
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
