import { motion } from "motion/react";

export default function SectionTransition() {
  return (
    <div className="w-full flex justify-center items-center h-24 md:h-32 relative">
      {/* Faint background line */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      {/* Animated glowing line (Signal traveling down) */}
      <motion.div
        initial={{ top: "-50%", opacity: 0 }}
        whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: false }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute w-[2px] h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(176,38,255,1)]"
      />
      
      {/* Center glowing dot with pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="absolute w-4 h-4 rounded-full border border-accent/50 animate-ping" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(176,38,255,0.8)]" />
      </div>
    </div>
  );
}
