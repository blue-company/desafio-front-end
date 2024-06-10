import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] gap-8">
      <Sidebar />
      <header>
        <main>
          <h1>hello world</h1>
        </main>
      </header>
    </div>
  );
}

export default App;
