'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function ProductRecommender() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState('');

  const handleSelect = (choice: string) => {
    setSelection(choice);
    setStep(2);
  };

  const resetQuiz = () => {
    setStep(1);
    setSelection('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-24 p-1">
      <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-careniva-gold/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 min-h-[300px] flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Question */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <span className="text-careniva-gold text-sm tracking-widest uppercase font-semibold mb-4 block">
                  Personal Consultation
                </span>
                <h3 className="text-3xl md:text-5xl font-display text-careniva-ivory mb-12">
                  What is your primary wellness focus today?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Hair Vitality', 'Skin Radiance', 'Culinary Health'].map((choice) => (
                    <button
                      key={choice}
                      onClick={() => handleSelect(choice)}
                      className="px-8 py-6 rounded-xl border border-white/20 hover:border-careniva-gold hover:bg-careniva-gold/10 text-careniva-ivory transition-all duration-300 text-lg tracking-wide group"
                    >
                      {choice}
                      <ArrowRight className="w-5 h-5 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-careniva-gold" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Recommendation */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl mx-auto"
              >
                <span className="text-careniva-gold text-sm tracking-widest uppercase font-semibold mb-4 block">
                  Your Prescription
                </span>
                <h3 className="text-4xl font-display text-careniva-ivory mb-6">
                  {selection === 'Hair Vitality' && 'The Herbal Hair Infusion'}
                  {selection === 'Skin Radiance' && 'Pure Cold Pressed Coconut Oil'}
                  {selection === 'Culinary Health' && 'The Family Reserve (5 Litre)'}
                </h3>
                <p className="text-careniva-ivory/60 text-lg mb-10 leading-relaxed">
                  {selection === 'Hair Vitality' && 'Infused with 21 traditional Ayurvedic herbs, specifically formulated to reduce hair fall and strengthen roots.'}
                  {selection === 'Skin Radiance' && 'Unrefined and deeply hydrating. Perfect for locking in moisture and achieving a natural, healthy glow.'}
                  {selection === 'Culinary Health' && 'Zero chemicals, zero heat extraction. The healthiest choice for your family’s daily meals and immunity.'}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="px-8 py-4 bg-careniva-gold text-careniva-dark rounded-full font-semibold tracking-widest text-sm hover:bg-white transition-colors w-full sm:w-auto">
                    Add to Cart
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center gap-2 text-careniva-ivory/50 hover:text-careniva-ivory transition-colors text-sm"
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}