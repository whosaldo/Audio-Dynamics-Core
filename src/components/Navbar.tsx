import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-deep-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg transition-all duration-500"
      >
        {/* Left Side: Navigation Links (Desktop) & Mobile Lang Toggle */}
        <div className="flex items-center gap-4 md:gap-8 text-sm font-medium tracking-widest uppercase flex-1">
          <button 
            onClick={toggleLanguage}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 glass border border-white/10 rounded-full hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {language}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <a href="#calitati" className="hover:text-accent transition-colors">{t('nav.qualities')}</a>
            <a href="#servicii" className="hover:text-accent transition-colors">{t('nav.services')}</a>
            <a href="#echipament" className="hover:text-accent transition-colors">{t('nav.equipment')}</a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#" className="flex items-center transition-transform hover:scale-105">
            <img 
              src="https://i.postimg.cc/bYG3mCQW/logo-(1).png" 
              alt="Audio Dynamics Core Logo" 
              width={160}
              height={64}
              fetchPriority="high"
              loading="eager"
              className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(176,38,255,0.2)]"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
        
        {/* Right Side: Contact Button & Mobile Toggle */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 glass border border-white/10 rounded-full hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {language}
          </button>
          <a href="#contact-box" className="hidden md:block px-5 py-2 bg-accent text-white rounded-full hover:bg-accent-hover transition-all font-bold accent-glow">
            {t('nav.contact')}
          </a>
          <button 
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-8 md:hidden will-change-transform"
          >
            <div className="flex flex-col gap-6 text-xl font-medium tracking-widest uppercase">
              <a href="#calitati" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">{t('nav.qualities')}</a>
              <a href="#servicii" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">{t('nav.services')}</a>
              <a href="#echipament" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">{t('nav.equipment')}</a>
              <a href="#contact-box" onClick={() => setIsOpen(false)} className="text-accent hover:text-accent-hover transition-colors">{t('nav.contact')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
