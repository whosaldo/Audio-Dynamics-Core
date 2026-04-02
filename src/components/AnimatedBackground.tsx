import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-deep-black pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#b026ff15_1px,transparent_1px),linear-gradient(to_bottom,#b026ff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Moving Neon Orbs */}
      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -150, 150, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -200, 200, 0],
          y: [0, 200, -200, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] will-change-transform"
      />
    </div>
  );
}
