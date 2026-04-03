import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactBox() {
  const { t } = useLanguage();

  return (
    <section id="contact-box" className="px-6 pb-16 md:pb-24 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full -z-10" />
          
          <div className="flex flex-col items-center gap-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {t('contact_box.title')}
              </h3>
              <p className="text-gray-400 font-light">
                Suntem la un apel sau un email distanță.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 w-full">
              {/* Phone Numbers */}
              <a 
                href="tel:+40753792339" 
                aria-label="Sună-ne la +40 753 792 339"
                className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 px-4 py-4 md:px-6 md:py-4 glass border border-white/10 rounded-xl hover:border-accent/50 hover:bg-white/5 transition-all group flex-1 md:flex-none"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{t('contact_box.phone_label')}</div>
                  <div className="text-sm md:text-base text-white font-medium whitespace-nowrap">+40 753 792 339</div>
                </div>
              </a>
              <a 
                href="tel:+40740456079" 
                aria-label="Sună-ne la +40 740 456 079"
                className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 px-4 py-4 md:px-6 md:py-4 glass border border-white/10 rounded-xl hover:border-accent/50 hover:bg-white/5 transition-all group flex-1 md:flex-none"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{t('contact_box.phone_label')}</div>
                  <div className="text-sm md:text-base text-white font-medium whitespace-nowrap">+40 740 456 079</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@audio-dynamics-core.ro" 
                aria-label="Trimite-ne un email la contact@audio-dynamics-core.ro"
                className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 px-4 py-4 md:px-6 md:py-4 glass border border-white/10 rounded-xl hover:border-accent/50 hover:bg-white/5 transition-all group flex-1 md:flex-none"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{t('contact_box.email_label')}</div>
                  <div className="text-xs sm:text-sm md:text-base text-white font-medium break-all md:break-normal">contact@audio-dynamics-core.ro</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
