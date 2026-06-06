'use client';

import { motion } from 'framer-motion';
import { Droplet, Leaf, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: "Cold-Pressed Extraction",
    description: "We use traditional wooden ghani (chekku) to extract oil at room temperature, ensuring zero nutrient loss from heat."
  },
  {
    icon: Leaf,
    title: "Sun-Dried Coconuts",
    description: "Sourced directly from the lush groves of Tamil Nadu, our coconuts are sun-dried to perfect maturity before extraction."
  },
  {
    icon: Sparkles,
    title: "Unrefined & Pure",
    description: "No bleaching, no deodorizing, and absolutely no chemical additives. Just nature's liquid gold in its truest form."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Process() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-careniva-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-careniva-gold mb-4">
            The Careniva Standard
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-careniva-ivory max-w-3xl mx-auto leading-tight">
            Rooted in Tradition. <br className="hidden md:block" /> Perfected by Nature.
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full border border-careniva-gold/20 flex items-center justify-center mb-8 bg-white/5 group-hover:bg-careniva-gold/10 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-careniva-gold" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-display text-careniva-ivory mb-4">
                  {feature.title}
                </h4>
                <p className="text-careniva-ivory/70 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}