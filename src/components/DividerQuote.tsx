import { motion } from "motion/react";
import { AudioWaveform, Disc3 } from "lucide-react";

export default function DividerQuote() {
  // Create an array of items to ensure the screen is filled for the infinite loop
  const items = Array.from({ length: 6 });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-full h-[250px] bg-accent/10 blur-[100px] -z-10 pointer-events-none" />

      {/* Tilted Container */}
      <div className="w-[110vw] -ml-[5vw] rotate-[-2deg] flex flex-col gap-6 md:gap-8">
        
        {/* Row 1 - Moving Left (Solid & Gradient) */}
        <div className="flex overflow-hidden glass border-y border-white/10 py-4 md:py-6 shadow-[0_0_30px_rgba(176,38,255,0.1)]">
          <div className="flex whitespace-nowrap w-max animate-marquee">
            {/* Two identical halves for a seamless loop */}
            {[1, 2].map((half) => (
              <div key={half} className="flex items-center">
                {items.map((_, i) => (
                  <div key={i} className="flex items-center px-4 md:px-10">
                    <span className="text-xl sm:text-2xl md:text-5xl font-black tracking-tighter uppercase text-white">
                      The sound that <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 drop-shadow-[0_0_10px_rgba(176,38,255,0.3)]">defines</span> the moment
                    </span>
                    <AudioWaveform className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-accent/50 ml-8 md:ml-20" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right (Outlined/Stroke) */}
        <div className="flex overflow-hidden py-2">
          <div className="flex whitespace-nowrap w-max animate-marquee-slow" style={{ animationDirection: 'reverse' }}>
            {[1, 2].map((half) => (
              <div key={half} className="flex items-center">
                {items.map((_, i) => (
                  <div key={i} className="flex items-center px-4 md:px-10">
                    <span 
                      className="text-xl sm:text-2xl md:text-5xl font-black tracking-tighter uppercase text-transparent"
                      style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}
                    >
                      The sound that defines the moment
                    </span>
                    <Disc3 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/20 ml-8 md:ml-20 animate-[spin_4s_linear_infinite]" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
