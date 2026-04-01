import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import InstagramPromo from "./components/InstagramPromo";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-accent/30 selection:text-accent relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Qualities />
        <Equipment />
        <InstagramPromo />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
