import { Header } from "@/components/Header/Header";
import { SideBarDesktop } from "@/components/Sidebar/SideBarDesktop";
import { TopSellers } from "@/components/TopSellers/TopSellers";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/auth";
import { redirect } from "next/navigation";

export default async function Leaderboard() {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col md:flex-row ">
      <SideBarDesktop />
      <section className="w-full md:calc(w-full - 320px) md:ml-80">
        <Header title="Leaderboard" />
        <div className="p-8 ">
          <h1 className="text-2xl font-bold text-center pb-8">
            Ranking de Vendas
          </h1>
          <TopSellers />
        </div>
      </section>
    </main>
  );
}
