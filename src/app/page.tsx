import { DaySales } from "@/components/DaySales/DaySales";
import { Header } from "@/components/Header/Header";
import { Lifes } from "@/components/Lifes/Lifes";
import { Plataforms } from "@/components/Platforms/Platforms";
import { Reality } from "@/components/Reality/Reality";
import { ServiceLevel } from "@/components/ServiceLevel/ServiceLevel";
import { SideBar } from "@/components/Sidebar/Siderbar";
import { TopProducts } from "@/components/TopProducts/TopProducts";
import { TotalIncome } from "@/components/TotalIncome/TotalIncome";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row ">
      <SideBar />
      <section className="container mx-auto py-10">
      <Header />
      <div className="flex flex-col ">
        <div className="grid lg:grid-cols-2 gap-8">
          <DaySales />
          <Plataforms />
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
          <TotalIncome />
          <Lifes/>
          <Reality />
          <TopProducts />
          <ServiceLevel />
        </div>
      </div>
      </section>
    </main>
  );
}
