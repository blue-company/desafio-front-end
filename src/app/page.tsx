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
      <section className="w-full">
        <Header />
        <div className="p-8 gap-5">
          <div className="gap-5 grid  grid-cols-12">
            <DaySales />
            <Plataforms />
            <TotalIncome />
            <Lifes />
            <Reality />
            <TopProducts />
            <ServiceLevel />
          </div>
        </div>
      </section>
    </main>
  );
}
