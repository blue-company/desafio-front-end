import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="md:grid h-screen md:grid-cols-[14rem_1fr] flex flex-col ">
      <div className="flex flex-col md:flex-row w-screen">
        <Sidebar />
        <div className="flex w-screen flex-col">
          <Header />
          <main className="flex flex-col">
            <h1>dashboard conteudo</h1>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
