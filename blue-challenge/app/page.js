import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-gray-50 font-poppins">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <div className="w-full h-[7vh] lg:h-[11vh] ">
          <Topbar />
        </div>
        <div className="flex w-full h-[89vh]">
          <Main />
        </div>
      </div>
    </div>
  );
}
