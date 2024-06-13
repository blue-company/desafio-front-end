import { DaySales } from "@/components/DaySales/DaySales";
import { Header } from "@/components/Header.tsx/Header";
import { Overview } from "@/components/Platforms/Platforms";
import { SideBar } from "@/components/Sidebar.tsx/Siderbar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <SideBar />
      <section className="container mx-auto py-10">
        <Header />
        <DaySales />
        <Overview />
      </section>
    </main>
  );
}
