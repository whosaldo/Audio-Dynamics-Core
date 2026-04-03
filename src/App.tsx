import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Lazy load below-the-fold components
const Qualities = lazy(() => import("./components/Qualities"));
const Services = lazy(() => import("./components/Services"));
const DividerQuote = lazy(() => import("./components/DividerQuote"));
const SectionTransition = lazy(() => import("./components/SectionTransition"));
const Equipment = lazy(() => import("./components/Equipment"));
const InstagramPromo = lazy(() => import("./components/InstagramPromo"));
const CallToAction = lazy(() => import("./components/CallToAction"));
const ContactBox = lazy(() => import("./components/ContactBox"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-transparent selection:bg-accent/30 selection:text-accent relative">
      <AnimatedBackground />
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
          <Services />
          <DividerQuote />
          <SectionTransition />
          <Qualities />
          <Equipment />
          <InstagramPromo />
          <CallToAction />
          <ContactBox />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
