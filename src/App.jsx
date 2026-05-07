import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"; // Keep your existing Navbar
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // Keep your existing Projects or update it later
import Contact from "./components/Contact"; // Keep your existing Contact
import Footer from "./components/Footer"; // Keep your existing Footer

function App() {
  return (
    <BrowserRouter>
      {/* Modern Tech Grid Background */}
      <div className="bg-scene">
        <div className="tech-grid"></div>
        <div className="glow-overlay"></div>
      </div>

      {/* The rest of your app stays exactly the same! */}
      <div className="min-h-screen relative z-10">
        <Navbar />
        {/* ... */}
        <main className="container mx-auto px-6 pt-24 space-y-10">
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;