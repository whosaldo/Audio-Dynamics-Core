import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 glass border-b border-white/5"
      >
        {/* Left Side: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase flex-1">
          <a href="#calitati" className="hover:text-accent transition-colors">Calități</a>
          <a href="#echipament" className="hover:text-accent transition-colors">Echipament</a>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#" className="h-12 sm:h-16 w-auto flex items-center transition-transform hover:scale-105">
            <img 
              src="https://i.postimg.cc/bYG3mCQW/logo-(1).png" 
              alt="Audio Dynamics Core Logo" 
              className="h-full object-contain drop-shadow-[0_0_10px_rgba(176,38,255,0.2)]"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
        
        {/* Right Side: Contact Button & Mobile Toggle */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <a href="#contact" className="hidden md:block px-5 py-2 bg-accent text-white rounded-full hover:bg-accent-hover transition-all font-bold accent-glow">
            Contact
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-medium tracking-widest uppercase">
              <a href="#calitati" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Calități</a>
              <a href="#echipament" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Echipament</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-accent hover:text-accent-hover transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
