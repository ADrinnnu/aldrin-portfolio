import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";

function App() {
  return (
    <BrowserRouter>
      {/* Page-wide dot texture backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="dots dots-lg fade-tr absolute right-0 top-0 h-[70vh] w-[60vw] opacity-[0.16]" />
        <div className="dots fade-bl absolute bottom-0 left-0 h-[55vh] w-[50vw] opacity-[0.12]" />
      </div>

      <Navbar />

      <div className="relative z-10 lg:pl-64">
        <main className="mx-auto max-w-[44rem] space-y-24 px-6 sm:space-y-28">
          <Hero />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Projects />
          <Activities />
          <Contact />
        </main>
        <div className="mx-auto max-w-[44rem] px-6">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;