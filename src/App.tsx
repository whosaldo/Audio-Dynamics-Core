import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities";
import Services from "./components/Services";
import DividerQuote from "./components/DividerQuote";
import SectionTransition from "./components/SectionTransition";
import Equipment from "./components/Equipment";
import InstagramPromo from "./components/InstagramPromo";
import CallToAction from "./components/CallToAction";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-accent/30 selection:text-accent relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DividerQuote />
        <SectionTransition />
        <Qualities />
        <Equipment />
        <InstagramPromo />
        <CallToAction />
        <ContactBox />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
