'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: "The Visionary",
    title: "A Return to Purity",
    content: "After years of leading sales and strategy at top FMCG brands like Aachi Masala as Chief Sales Officer, I realized the market was flooded with highly refined, compromised products. Careniva was born from a desire to return to absolute purity—bringing authentic, cold-pressed oils back to modern homes.",
    author: "Joseph Paul",
    role: "Founder, Careniva",
  },
  {
    id: 2,
    subtitle: "Industry Experience",
    title: "Knowing What Matters",
    content: "My decades of experience in the consumer products industry taught me exactly what families deserve, and what they are often denied. We don't just sell oil; we preserve a legacy. By using traditional wooden chekkus, we ensure every drop retains its natural health benefits.",
    author: "Joseph Paul",
    role: "Industry Veteran",
  },
  {
    id: 3,
    subtitle: "The Promise",
    title: "Zero Compromise",
    content: "Transparency is the foundation of Careniva. There are no hidden chemicals, no heat refinement processes, and no shortcuts. This is my personal guarantee to you: 100% pure, unadulterated cold-pressed oil, crafted carefully for your family's health.",
    author: "Joseph Paul",
    role: "A Promise of Quality",
  }
];

export default function Founder() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-16 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Founder Image */}
          <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
            {/* Make sure the file in your public folder is named exactly founder.jpg */}
            <img 
  src="/founder.png" 
  alt="Joseph Paul - Founder of Careniva" 
  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
/>
            {/* Subtle overlay gradient so it blends nicely with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right Side: Slider Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col"
              >
                <span className="text-careniva-gold tracking-[0.2em] text-xs md:text-sm uppercase font-semibold mb-4 block">
                  {slides[current].subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-careniva-ivory mb-8 leading-tight">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl text-careniva-ivory/70 leading-relaxed mb-10 font-light">
                  "{slides[current].content}"
                </p>
                <div>
                  <h4 className="text-careniva-ivory font-display text-xl">{slides[current].author}</h4>
                  <p className="text-careniva-gold/60 text-sm tracking-widest uppercase mt-1">
                    {slides[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-careniva-ivory hover:bg-careniva-gold hover:text-black hover:border-careniva-gold transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-careniva-ivory hover:bg-careniva-gold hover:text-black hover:border-careniva-gold transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2 ml-4">
                {slides.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-careniva-gold' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}