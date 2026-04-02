import { motion } from "motion/react";
import { Speaker, Music, Mic, Radio } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Equipment() {
  const { t } = useLanguage();

  const equipment = [
    { name: "Mixer digital Behringer x32 Compact", icon: Radio },
    { name: "Mixer digital Behringer x32 Rack", icon: Radio },
    { name: "Digital Stagebox Behringer SD8", icon: Radio },
    { name: "2x Sistem HK Polar 12", icon: Speaker },
    { name: "Subwoofer activ The Box TA18", icon: Speaker },
    { name: "Microfoane Shure SM58", icon: Mic },
    { name: t('equipment.more'), icon: Music },
  ];

  return (
    <section id="echipament" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-accent/5 blur-[80px] md:blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase"
            >
              {t('equipment.badge')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
            >
              {t('equipment.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
            >
              {t('equipment.subtitle')} <span className="text-white font-bold">{t('equipment.capacity')}</span>
              {t('equipment.subtitle2')}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto px-6 py-5 md:px-8 md:py-6 bg-charcoal/80 border border-white/5 rounded-3xl flex items-center gap-5 md:gap-6"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Music className="text-accent w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">300-500</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{t('equipment.cap_label')}</div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap gap-3 md:gap-4">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-3 md:px-6 md:py-4 bg-charcoal/80 border border-white/5 rounded-2xl flex items-center gap-3 md:gap-4 hover:border-accent/30 transition-all group cursor-default w-full sm:w-auto"
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-accent transition-colors shrink-0" />
              <span className="text-sm md:text-base text-white font-medium tracking-tight">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
