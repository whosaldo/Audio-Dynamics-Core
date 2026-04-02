import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const Equalizer = () => {
  // Generate random heights for the equalizer bars
  const bars = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    duration: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center opacity-30 -z-10 overflow-hidden h-1/2 pointer-events-none">
      <div className="flex items-end gap-1 md:gap-2 w-full max-w-7xl px-4 h-full">
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            className="flex-1 bg-gradient-to-t from-accent/80 via-accent/40 to-transparent rounded-t-full origin-bottom"
            style={{ height: "100%" }}
            animate={{
              scaleY: [0.1, 0.8, 0.3, 1, 0.2],
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: bar.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 blur-[100px] md:blur-[120px] rounded-full -z-20 pointer-events-none will-change-transform"
      />
      
      {/* Audio Equalizer Effect */}
      <Equalizer />
      
      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-10 z-10">
        <motion.div
          initial={{ opacity: 0.01, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 md:py-2 rounded-full glass border border-accent/30 text-accent text-xs md:text-sm font-mono tracking-[0.15em] md:tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(176,38,255,0.2)] will-change-transform"
        >
          {t('hero.badge')}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0.01, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight md:leading-[0.9] text-gradient px-2 will-change-transform"
        >
          {t('hero.title1')} <br className="hidden sm:block" />
          <span className="text-accent drop-shadow-[0_0_25px_rgba(176,38,255,0.5)]">{t('hero.title2')}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4 sm:px-0"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 md:pt-8 w-full px-4 sm:px-0"
        >
          <a href="#contact-box" className="w-full max-w-[220px] sm:max-w-none sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 bg-accent text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-accent-hover transition-all accent-glow hover:scale-105 active:scale-95 text-center">
            {t('hero.quote')}
          </a>
          <a href="#servicii" className="w-full max-w-[220px] sm:max-w-none sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 glass border border-white/10 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 hover:border-accent/50 transition-all hover:scale-105 active:scale-95 text-center">
            {t('hero.services')}
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown className="text-accent w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
      </motion.div>
    </section>
  );
}
