'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya S.",
    location: "Chennai",
    text: "The aroma alone tells you how pure this is. It reminds me exactly of the oil my grandmother used to make in our village.",
  },
  {
    name: "Ananya M.",
    location: "Bangalore",
    text: "Switched to Careniva for my baby’s massage. It absorbs beautifully and the cold-pressed quality gives me complete peace of mind.",
  },
  {
    name: "Dr. Karthik",
    location: "Coimbatore",
    text: "As an Ayurvedic practitioner, finding genuine Chekku oil is rare. Careniva has maintained the integrity of the extraction process flawlessly.",
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-6">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-careniva-gold text-careniva-gold" />
              ))}
            </div>
            <p className="text-careniva-ivory/80 text-lg font-light leading-relaxed mb-8">
              "{review.text}"
            </p>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="text-careniva-ivory font-display text-lg">{review.name}</p>
            <p className="text-careniva-gold/60 text-sm tracking-wide">{review.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}