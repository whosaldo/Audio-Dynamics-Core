import { Instagram } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function InstagramPromo() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[80px] rounded-full -z-10" />
        
        <div className="space-y-5 text-center lg:text-left z-10">
          <div className="flex items-center justify-center lg:justify-start gap-3 text-accent mb-2">
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-mono tracking-widest uppercase text-xs md:text-sm">{t('instagram.badge')}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            {t('instagram.title')}
          </h3>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
            {t('instagram.subtitle')}
          </p>
          <a 
            href="https://instagram.com/audio.dynamics.core" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Urmărește-ne pe Instagram"
            className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold rounded-xl hover:opacity-90 transition-all hover:scale-105 mt-2 shadow-lg shadow-orange-500/20"
          >
            <Instagram className="w-5 h-5" />
            <span>@audio.dynamics.core</span>
          </a>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full lg:w-1/2 z-10">
          {[1, 2, 3].map((item, index) => (
            <a 
              key={item}
              href="https://instagram.com/audio.dynamics.core"
              target="_blank"
              rel="noreferrer"
              aria-label="Vezi postarea pe Instagram"
              className={`aspect-square rounded-2xl overflow-hidden relative group border border-white/10 ${index === 2 ? 'hidden sm:block' : ''}`}
            >
              <img 
                src={`https://picsum.photos/seed/audio${item + 10}/400/400`} 
                alt="Instagram preview" 
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
