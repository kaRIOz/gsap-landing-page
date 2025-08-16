import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
//gsap
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default App;
