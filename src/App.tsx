import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0b0b10] text-white">
      <Header />

      <main>
        <Hero />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
