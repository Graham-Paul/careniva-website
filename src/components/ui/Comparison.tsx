'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const compareData = [
  { feature: "Extraction Method", generic: "Chemical Solvents / High Heat", careniva: "Traditional Wooden Chekku" },
  { feature: "Nutrient Retention", generic: "Low (Lost to heat)", careniva: "100% Retained" },
  { feature: "Preservatives", generic: "Added for shelf life", careniva: "Zero Additives" },
  { feature: "Sulphur / Bleach", generic: "Used for clear color", careniva: "Unrefined & Natural" },
];

export default function Comparison() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 p-1">
      {/* Glass Panel */}
      <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Header Row */}
        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6 md:p-8">
          <div className="font-display text-xl text-careniva-ivory/80">The Standard</div>
          <div className="font-display text-xl text-center text-white/50">Commercial Oils</div>
          <div className="font-display text-2xl text-center text-careniva-gold font-bold">CARENIVA</div>
        </div>

        {/* Data Rows */}
        <div className="p-6 md:p-8 space-y-6">
          {compareData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid grid-cols-3 items-center border-b border-white/5 pb-6 last:border-0 last:pb-0"
            >
              <div className="text-sm md:text-base font-semibold text-careniva-ivory tracking-wide">
                {item.feature}
              </div>
              <div className="flex flex-col items-center text-center text-sm text-white/40">
                <X className="w-5 h-5 mb-2 text-red-400/50" />
                {item.generic}
              </div>
              <div className="flex flex-col items-center text-center text-sm md:text-base text-careniva-gold">
                <Check className="w-6 h-6 mb-2 text-careniva-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                {item.careniva}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}