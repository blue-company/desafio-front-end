import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="grid h-screen grid-cols-[14rem_1fr] ">
      <div className="flex w-screen">
        <Sidebar />
        <Header />
        <main></main>
      </div>
    </div>
  );
}

export default App;
