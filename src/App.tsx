import React from "react";
import DashboardCard from "./components/dashboard/card/card";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import ChartCard from "./components/dashboard/card/charts/platforms-chart";
import IncomesChart from "./components/dashboard/card/charts/incoming-chart";
import LifesChart from "./components/dashboard/card/charts/lifes-chart";
import RealityChart from "./components/dashboard/card/charts/reality-chart";
import CountryChart from "./components/dashboard/card/charts/country-chart";
import ServiceChart from "./components/dashboard/card/charts/service-chart";
import ProductsChart from "./components/dashboard/card/charts/products-chart";
import SellsChart from "./components/dashboard/card/charts/sells-chart";

function App() {
  return (
    <div className="2xl:grid h-screen 2xl:grid-cols-[14rem_1fr] flex flex-col ">
      <div className="flex flex-col 2xl:flex-row w-screen">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <main className="flex px-5 py-2 flex-col gap-2">
            <div className="flex 2xl:flex-row flex-col gap-4">
              <DashboardCard title="Vendas hoje" className="2xl:h-[30vh] h-fit">
                <SellsChart />
              </DashboardCard>

              <DashboardCard
                title="Plataformas"
                className="2xlh-[30vh] 2xl:w-[35vw]"
              >
                <ChartCard />
              </DashboardCard>
            </div>
            <div className="xl:grid xl:grid-cols-[40%_27%_27%] flex flex-col xl:gap-8 gap-4">
              <DashboardCard
                title="Rendimento total"
                className="2xl:h-[30vh]  flex items-center"
              >
                <IncomesChart />
              </DashboardCard>

              <DashboardCard title="Vidas" className="2xl:h-[30vh]  ">
                <LifesChart />
              </DashboardCard>

              <DashboardCard
                title="Realidade"
                className="2xl:h-[30vh] flex items-center"
              >
                <RealityChart />
              </DashboardCard>
            </div>

            <div className="lg:grid lg:grid-cols-[40%_27%_27%] flex flex-col lg:gap-8 gap-4">
              <DashboardCard title="Top produtos" className="2xl:h-[27vh]">
                <ProductsChart />
              </DashboardCard>

              <DashboardCard
                title="Mapeamento de vendas por UF"
                className="2xl:h-[27vh]"
              >
                <CountryChart />
              </DashboardCard>

              <DashboardCard title="Nivel de serviço" className="2xl:h-[27vh]">
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
