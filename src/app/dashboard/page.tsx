import { DaySales } from "@/components/DaySales/DaySales";
import { Header } from "@/components/Header/Header";
import { Lifes } from "@/components/Lifes/Lifes";
import { Map } from "@/components/Map/Map";
import { Plataforms } from "@/components/Platforms/Platforms";
import { Reality } from "@/components/Reality/Reality";
import { ServiceLevel } from "@/components/ServiceLevel/ServiceLevel";
import { SideBarDesktop } from "@/components/Sidebar/SideBarDesktop";
import { TopProducts } from "@/components/TopProducts/TopProducts";
import { TotalIncome } from "@/components/TotalIncome/TotalIncome";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue | Dashboard",
};

export default async function Dashboard() {
  const session = await getServerSession(nextAuthOptions);
  if(!session){
    redirect("/")
  } 
  return (
    <main className="flex flex-col md:flex-row ">
      <SideBarDesktop />
      <section className="w-full md:calc(w-full - 320px) md:ml-80">
        <Header title="Dashboard"/>
        <div className="p-8 gap-5">
          <div className="gap-5 grid  grid-cols-12">
            <DaySales />
            <Plataforms />
            <TotalIncome />
            <Lifes />
            <Reality />
            <TopProducts />
            <Map />
            <ServiceLevel />
          </div>
        </div>
      </section>
    </main>
  );
}
