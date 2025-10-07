import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="font-sans bg-gray-950 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
