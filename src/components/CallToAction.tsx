import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-20 border border-accent/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/20 blur-[120px] rounded-full -z-10" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
              {t('cta.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">{t('cta.title2')}</span>?
            </h2>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact-box" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover transition-all hover:scale-105 accent-glow text-base md:text-lg w-full sm:w-auto"
              >
                {t('cta.quote')} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
