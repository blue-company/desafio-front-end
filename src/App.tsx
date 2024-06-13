import "bootstrap/dist/css/bootstrap.min.css";
import {
  BarChart,
  FileSpreadsheet,
  Pencil,
  Upload,
  UserPlus,
} from "lucide-react";
import DashboardCard from "./components/dashboard/card/card";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import NewsMiniCard from "./components/dashboard/card/news-mini-card";
import ChartCard from "./components/dashboard/card/charts/platforms-chart";
import IncomesChart from "./components/dashboard/card/charts/incoming-chart";
import LifesChart from "./components/dashboard/card/charts/lifes-chart";
import RealityChart from "./components/dashboard/card/charts/reality-chart";
import CountryChart from "./components/dashboard/card/charts/country-chart";
import ServiceChart from "./components/dashboard/card/charts/service-chart";
import ProductsChart from "./components/dashboard/card/charts/products-chart";

function App() {
  return (
    <div className="md:grid h-screen md:grid-cols-[14rem_1fr] flex flex-col ">
      <div className="flex flex-col lg:flex-row w-screen">
        <Sidebar />
        <div className="flex w-screen flex-col">
          <Header />
          <main className="flex p-5 flex-col gap-2 ">
            <div className="flex xl:flex-row flex-col gap-4">
              <DashboardCard
                title="Vendas hoje"
                className="xl:w-[40vw] xl:h-[30vh] h-fit"
              >
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">
                    Resumo de vendas
                  </span>

                  <button className="flex border font-semibold rounded-lg border-blue-950/20 p-1 gap-1 text-sm items-center text-blue-950">
                    <Upload size={20} />
                    Exportar
                  </button>
                </div>

                <div className="flex xl:flex-row flex-col items-center  gap-2 justify-around mt-10 mb-5">
                  <NewsMiniCard
                    icon={
                      <BarChart className="bg-pink-700 w-9 h-9 p-1 rounded-full" />
                    }
                    results={"R$ 1,000"}
                    description="Total de vendas"
                    percentageText="8% a mais que ontem"
                    className="bg-red-500/25"
                  />
                  <NewsMiniCard
                    icon={
                      <FileSpreadsheet className="bg-orange-400 w-9 h-9 p-1 rounded-full" />
                    }
                    results={300}
                    description="Total de contratos"
                    percentageText="5% a mais que ontem"
                    className="bg-yellow-500/25"
                  />
                  <NewsMiniCard
                    icon={
                      <Pencil className="bg-green-500 w-9 h-9 p-1 rounded-full" />
                    }
                    results={5}
                    description="Implantadas"
                    percentageText="1,2% a mais que ontem"
                    className="bg-green-500/25"
                  />
                  <NewsMiniCard
                    icon={
                      <UserPlus className="bg-purple-500 w-9 h-9 p-1 rounded-full" />
                    }
                    results={9}
                    description="Novos contratos"
                    percentageText="0,5% a mais que ontem"
                    className="bg-purple-500/25"
                  />
                </div>
              </DashboardCard>

              <DashboardCard
                title="Plataformas"
                className="h-[30vh] xl:w-[35vw]"
              >
                <ChartCard />
              </DashboardCard>
            </div>
            <div className="lg:grid lg:grid-cols-[40%_27%_27%] flex flex-col lg:gap-8 gap-4">
              <DashboardCard title="Rendimento total" className="h-[30vh]">
                <IncomesChart />
              </DashboardCard>

              <DashboardCard title="Vidas" className="h-[30vh]">
                <LifesChart />
              </DashboardCard>

              <DashboardCard title="Realidade" className="h-[30vh]">
                <RealityChart />
              </DashboardCard>
            </div>

            <div className="lg:grid lg:grid-cols-[40%_27%_27%] flex flex-col lg:gap-8 gap-4">
              <DashboardCard title="Top produtos" className="h-[30vh]">
                <ProductsChart />
              </DashboardCard>

              <DashboardCard
                title="Mapeamento de vendas por UF"
                className="h-[30vh]"
              >
                <CountryChart />
              </DashboardCard>

              <DashboardCard title="Nivel de serviço" className="h-[30vh]">
                <ServiceChart />
              </DashboardCard>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
