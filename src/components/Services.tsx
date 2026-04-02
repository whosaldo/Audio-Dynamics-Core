import { motion } from "motion/react";
import { Mic2, PartyPopper, Briefcase, Radio } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.s1_title'),
      description: t('services.s1_desc'),
      icon: Mic2,
    },
    {
      title: t('services.s2_title'),
      description: t('services.s2_desc'),
      icon: Briefcase,
    },
    {
      title: t('services.s3_title'),
      description: t('services.s3_desc'),
      icon: PartyPopper,
    },
    {
      title: t('services.s4_title'),
      description: t('services.s4_desc'),
      icon: Radio,
    }
  ];

  return (
    <section id="servicii" className="py-20 md:py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase"
          >
            {t('services.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(176,38,255,0.1)] transition-all duration-300 group will-change-transform"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
