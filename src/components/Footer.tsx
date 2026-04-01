import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 md:py-20 px-6 bg-deep-black border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10 text-center md:text-left">
        
        {/* Branding */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="https://i.postimg.cc/bYG3mCQW/logo-(1).png" 
              alt="Audio Dynamics Core Logo" 
              className="h-16 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-gray-500 font-light leading-relaxed max-w-xs text-sm md:text-base">
            {t('footer.desc')}
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg tracking-tight">{t('footer.contact')}</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-500 font-light text-sm md:text-base w-full">
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span className="break-all">contact@audio-dynamics-core.ro</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span>+40 753 792 339 / +40 740 456 079</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span>Sibiu, România</span>
            </li>
          </ul>
        </div>
        
        {/* Social Media Column */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg tracking-tight">{t('footer.social')}</h4>
          <p className="text-gray-500 font-light text-sm">
            {t('footer.social_desc')}
          </p>
          <a 
            href="https://instagram.com/audio.dynamics.core" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 px-5 py-3 glass border border-white/10 rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all group w-full sm:w-auto justify-center md:justify-start"
          >
            <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">@audio.dynamics.core</span>
          </a>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 md:pt-20 mt-10 md:mt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-xs font-mono tracking-widest uppercase text-center md:text-left">
        <div>Audio Dynamics Core - 2026. {t('footer.rights')}</div>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
          <a href="#" className="hover:text-accent transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-accent transition-colors">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
