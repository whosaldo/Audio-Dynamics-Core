import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "./logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-20 px-6 bg-deep-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10 text-center md:text-left">
        
        {/* Branding */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logo} 
              alt="Audio Dynamics Core Logo" 
              className="h-16 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all hover:scale-105"
            />
          </div>
          <p className="text-gray-500 font-light leading-relaxed max-w-xs text-sm md:text-base">
            Transformăm orice eveniment într-o experiență acustică impecabilă. 
            Calitatea sunetului este prioritatea noastră.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg tracking-tight">Contact</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-500 font-light text-sm md:text-base w-full">
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span className="break-all">contact@audiodynamics.ro</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span>+40 722 000 000</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" />
              <span>București, România</span>
            </li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg tracking-tight">Newsletter</h4>
          <p className="text-gray-500 font-light text-sm">
            Abonează-te pentru noutăți și oferte speciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs md:max-w-none">
            <input 
              type="email" 
              placeholder="Email-ul tău" 
              className="flex-1 px-4 py-3 glass border border-white/10 rounded-xl focus:outline-none focus:border-accent/50 transition-all text-sm text-center sm:text-left"
            />
            <button className="px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all accent-glow w-full sm:w-auto">
              OK
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 md:pt-20 mt-10 md:mt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-xs font-mono tracking-widest uppercase text-center md:text-left">
        <div>Audio Dynamics Core - 2026. Toate drepturile rezervate.</div>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
