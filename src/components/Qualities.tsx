import { motion } from "motion/react";
import { Users, Radio, Mic2, MessageSquare } from "lucide-react";

const qualities = [
  {
    title: "Consultanță Pre-Eveniment",
    description: "Analizăm nevoile reale ale evenimentului și oferim consultanță specializată pentru a alege configurația optimă.",
    icon: MessageSquare,
  },
  {
    title: "Parteneriat cu Artiștii și Trupele",
    description: "Suntem interfața tehnică perfectă între tine și artiști. Cunoaștem limbajul tehnic și nevoile trupelor.",
    icon: Users,
  },
  {
    title: "Servicii de Streaming Live",
    description: "Oferim mai mult decât sunet live; oferim posibilitatea de a transmite momentul sau de a înregistra multitrack.",
    icon: Radio,
  },
  {
    title: "Ingineri de sunet dedicați",
    description: "Asigurăm un sunet clar care se aude bine atât în difuzoarele din sală, cât și în transmisiunile online.",
    icon: Mic2,
  },
];

export default function Qualities() {
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
            De ce noi?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Calitățile noastre
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 glass border border-white/5 rounded-3xl hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                <quality.icon className="w-6 h-6 md:w-7 md:h-7" />
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
