import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0b0b10] text-white">
      <Header />

      <main>{<Hero />}</main>
    </div>
  );
}

export default App;
