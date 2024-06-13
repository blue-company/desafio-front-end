import { Header } from "@/components/Header.tsx/Header";
import { SideBar } from "@/components/Sidebar.tsx/Siderbar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <SideBar />
      <div className="container mx-auto py-10">
        <Header />
      </div>
    </main>
  );
}
