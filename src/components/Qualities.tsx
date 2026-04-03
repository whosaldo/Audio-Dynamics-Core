import { motion } from "motion/react";
import { Sliders, AudioWaveform, Mic2, MessageSquare, ArrowRight } from "lucide-react";
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
      icon: Sliders,
    },
    {
      title: t('qualities.q3_title'),
      description: t('qualities.q3_desc'),
      icon: AudioWaveform,
    },
    {
      title: t('qualities.q4_title'),
      description: t('qualities.q4_desc'),
      icon: Mic2,
    },
  ];

  return (
    <section id="calitati" className="py-20 md:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-bold tracking-widest uppercase"
            >
              {t('qualities.badge')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]"
            >
              {t('qualities.title')}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex w-16 h-16 rounded-full bg-white/5 items-center justify-center border border-white/10 mt-8"
            >
              <ArrowRight className="w-6 h-6 text-gray-500" />
            </motion.div>
          </div>

          {/* Right Side: Compact List in Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-2/3 w-full glass rounded-3xl border border-white/5 p-6 md:p-10 shadow-2xl"
          >
            <div className="flex flex-col">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row gap-6 py-8 border-b border-white/5 first:pt-0 last:pb-0 last:border-0"
                >
                  {/* Icon & Number */}
                  <div className="flex items-center sm:items-start justify-between sm:justify-start gap-6 sm:w-20 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500 shadow-inner">
                      <quality.icon className="w-6 h-6 text-gray-400 group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500 sm:hidden">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {quality.title}
                      </h3>
                      <span className="hidden sm:block text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed font-medium">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
