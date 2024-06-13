import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="xl:grid h-screen xl:grid-cols-[14rem_1fr] flex flex-col ">
      <div className="flex flex-col xl:flex-row w-screen">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <main className="flex px-5 py-2 flex-col gap-2 ">
            <div className="flex xl:flex-row flex-col gap-4">
              <DashboardCard
                title="Vendas hoje"
                className="xl:w-[40vw] xl:h-[30vh] h-fit"
              >
                <SellsChart />
              </DashboardCard>

              <DashboardCard
                title="Plataformas"
                className="h-[30vh] xl:w-[35vw]"
              >
                <ChartCard />
              </DashboardCard>
            </div>
            <div className="xl:grid xl:grid-cols-[40%_27%_27%] flex flex-col xl:gap-8 gap-4">
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
