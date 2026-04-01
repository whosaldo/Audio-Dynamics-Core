import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities";
import Equipment from "./components/Equipment";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-accent/30 selection:text-accent relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Qualities />
        <Equipment />
      </main>
      <Footer />
    </div>
  );
}
