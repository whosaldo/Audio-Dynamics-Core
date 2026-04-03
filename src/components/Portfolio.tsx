import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Mic2, SlidersHorizontal, Play, Headphones, Youtube, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'live' | 'studio'>('studio');
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={ref} id="portofoliu" className="py-20 md:py-32 px-6 relative z-10 overflow-hidden">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-40"
      >
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent/10 blur-[120px] md:blur-[150px] rounded-full" />
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase"
          >
            {t('portfolio.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            {t('portfolio.title')}
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="glass p-1.5 rounded-full flex gap-2 border border-white/10">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'live' 
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(176,38,255,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Mic2 className="w-4 h-4" />
              {t('portfolio.tab_live')}
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'studio' 
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(176,38,255,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {t('portfolio.tab_studio')}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'live' ? (
              <motion.div
                key="live"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="glass px-10 py-16 rounded-3xl border border-white/5 text-center space-y-4 w-full max-w-lg mx-auto">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mic2 className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('portfolio.coming_soon')}</h3>
                  <p className="text-gray-400">Pregătim materiale video de la evenimentele noastre recente.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="studio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl mx-auto space-y-6"
              >
                <div className="glass rounded-3xl border border-white/5 overflow-hidden shadow-2xl group">
                  {/* Video Container */}
                  <div className="aspect-video w-full bg-black relative">
                    <iframe 
                      className="w-full h-full absolute inset-0"
                      src="https://www.youtube.com/embed/t6ka64lpAPo?si=in4EPG6MRXZiTaJg" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Compact Details Bar */}
                  <div className="p-5 md:p-6 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    
                    {/* Left: Track Info */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                        {t('portfolio.song_title')}
                      </h3>
                      <p className="text-base text-gray-400 font-medium">
                        {t('portfolio.artist_name')}
                      </p>
                    </div>

                    {/* Right: Platform Links */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <a 
                        href="https://open.spotify.com/track/4HD86P8nVZZsDLJJFuRKE5?si=e44ae44feb134caa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20 border border-[#1DB954]/20 rounded-xl transition-all hover:scale-105 text-xs md:text-sm font-bold tracking-wide"
                      >
                        <Headphones className="w-4 h-4" />
                        <span className="hidden sm:inline">{t('portfolio.listen_spotify')}</span>
                        <span className="sm:hidden">Spotify</span>
                      </a>
                      <a 
                        href="https://music.youtube.com/watch?v=D-N6vOUKzGw&si=xrjE77jpy9XAmFdX" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000]/20 border border-[#FF0000]/20 rounded-xl transition-all hover:scale-105 text-xs md:text-sm font-bold tracking-wide"
                      >
                        <Youtube className="w-4 h-4" />
                        <span className="hidden sm:inline">{t('portfolio.listen_yt')}</span>
                        <span className="sm:hidden">YouTube</span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Credits Section */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-40"></div>
                    <img 
                      src="https://i.postimg.cc/xC3PKYns/503550585-18480252745068047-2676641055369957747-n.jpg" 
                      alt="Aldo Calef" 
                      className="relative w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide">
                    {t('portfolio.mixed_by')} <span className="text-accent font-bold">Aldo Calef</span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
