import { BriefcaseBusiness, GitCommitHorizontal, Ticket } from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Card } from './card';

const teste = [
  { day: 'Segunda', Aguardando: 14000, Implantadas: 13000 },
  { day: 'Terça', Aguardando: 17500, Implantadas: 12000 },
  { day: 'Quarta', Aguardando: 6000, Implantadas: 22500 },
  { day: 'Quinta', Aguardando: 16000, Implantadas: 6500 },
  { day: 'Sexta', Aguardando: 13000, Implantadas: 12000 },
  { day: 'Sábado', Aguardando: 16500, Implantadas: 13500 },
  { day: 'Domingo', Aguardando: 21000, Implantadas: 11000 }
];

const lifes = [
  {
    uv: 2000,
    pv: 4300,
    amt: 2400
  },
  {
    uv: 2800,
    pv: 3800,
    amt: 2210
  },
  {
    uv: 1500,
    pv: 4000,
    amt: 2210
  },
  {
    uv: 1600,
    pv: 3000,
    amt: 2210
  },
  {
    uv: 1900,
    pv: 4000,
    amt: 2210
  },
  {
    uv: 1800,
    pv: 2700,
    amt: 2210
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2210
  }
];

const reality = [
  { day: 'Jan', Aguardando: 10000, Implantadas: 7000 },
  { day: 'Fev', Aguardando: 9000, Implantadas: 6000 },
  { day: 'Mar', Aguardando: 11000, Implantadas: 5000 },
  { day: 'Abr', Aguardando: 8300, Implantadas: 7000 },
  { day: 'Mai', Aguardando: 15000, Implantadas: 8823 },
  { day: 'Jun', Aguardando: 15000, Implantadas: 8823 },
  { day: 'Jul', Aguardando: 15000, Implantadas: 8823 }
];

export function SecondSection() {
  return (
    <>
      <Card className="flex-grow" title="Rendimento total">
        <div className="h-[230px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={teste} barGap={4} barCategoryGap={38}>
              <CartesianGrid horizontal={true} vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={{ strokeWidth: 0 }} />
              <YAxis
                axisLine={false}
                ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}k`)}
              />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar dataKey="Aguardando" fill="#0095FF" radius={3} />
              <Bar dataKey="Implantadas" fill="#00E096" radius={3} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card title="Vidas">
        <div className="flex flex-col w-full h-[250px] 2xl:w-[300px] 2xl:h-[160px] gap-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={830} data={lifes}>
              <defs>
                <linearGradient id="lastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#6698de" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="thisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CAF9E9" stopOpacity={1} />
                  <stop offset="200%" stopColor="#FFFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                name="Último mês"
                stroke="#007ED7"
                fillOpacity={1}
                strokeWidth={3}
                fill="url(#lastMonth)"
                dot
              />
              <Area
                type="monotone"
                dataKey="pv"
                name="Este mês"
                stroke="#13CB8D"
                fillOpacity={1}
                strokeWidth={3}
                fill="url(#thisMonth)"
                dot
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="h-1 border-b border-gray-200" />
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 items-center">
                <GitCommitHorizontal fill="#69B7E5" color="#69B7E5" size={28} strokeWidth={1.75} />
                <span className="text-gray-400">Ultimo mês</span>
              </div>
              <h3 className="text-[#222B45] font-semibold">4.504</h3>
            </div>
            <div className="border-r border-gray-300" />
            <div className="flex flex-col items-center">
              <div className="flex gap-1 items-center">
                <GitCommitHorizontal fill="#13CB8D" color="#13CB8D" size={28} strokeWidth={1.75} />
                <span className="text-gray-400">Este mês</span>
              </div>
              <h3 className="text-[#222B45] font-semibold">4.504</h3>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Realidade">
        <div className="flex w-full h-[350px] 2xl:w-[300px] 2xl:h-[250px] flex-col gap-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={reality} barGap={4} barCategoryGap={4}>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={{ strokeWidth: 0 }}
                tick={{
                  fontSize: '12px',
                  fontWeight: '500',
                  fill: '#7B91B0'
                }}
              />
              <Tooltip />
              <Bar dataKey="Implantadas" name="Contratos finalizados" fill="#4AB58E" radius={3} />
              <Bar dataKey="Aguardando" name="Aguardando" fill="#FFCF00" radius={3} />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#E2FFF3] p-2.5 rounded-lg">
                  <BriefcaseBusiness size={16} color="#4AB58E" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#151D48] text-sm font-bold">Contratos finalizados</h3>
                  <span className="text-[#737791] text-xs">Global</span>
                </div>
              </div>
              <span className="text-[#27AE60] font-semibold">8.823</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFF4DE] p-2.5 rounded-lg">
                  <Ticket size={16} color="#FFB21C" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#151D48] text-sm font-bold">Aguardando</h3>
                  <span className="text-[#737791] text-xs">Commercial</span>
                </div>
              </div>
              <span className="text-[#FFA412] font-semibold">12.122</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
