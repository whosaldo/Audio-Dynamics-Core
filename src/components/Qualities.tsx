import { motion } from "motion/react";
import { Users, Radio, Mic2, MessageSquare } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Qualities() {
  const { t } = useLanguage();

  const qualities = [
    {
      title: t('qualities.q1_title'),
      description: t('qualities.q1_desc'),
      icon: MessageSquare,
    },
    {
      title: t('qualities.q2_title'),
      description: t('qualities.q2_desc'),
      icon: Users,
    },
    {
      title: t('qualities.q3_title'),
      description: t('qualities.q3_desc'),
      icon: Radio,
    },
    {
      title: t('qualities.q4_title'),
      description: t('qualities.q4_desc'),
      icon: Mic2,
    },
  ];

  return (
    <section id="calitati" className="py-20 md:py-32 px-6 bg-charcoal/30">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase"
          >
            {t('qualities.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            {t('qualities.title')}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="p-6 md:p-8 glass border border-white/5 rounded-3xl hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(176,38,255,0.1)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <quality.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 leading-tight">
                {quality.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
