'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useCartStore } from '../../lib/store';

export default function ProductModal() {
  const { isModalOpen, selectedProduct, closeModal, addItem } = useCartStore();

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addItem({
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      quantity: 1,
    });
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-[#0a0a0a]/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Image Presentation */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-white/5 to-transparent p-12 flex items-center justify-center min-h-[300px] md:min-h-[600px] relative">
              <div className="absolute inset-0 bg-careniva-gold/5 animate-pulse" />
              <div className="relative z-10 w-48 h-72 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center text-white/30 text-sm text-center">
                High-Res <br/> {selectedProduct.title} <br/> Image
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-careniva-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                {selectedProduct.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-careniva-ivory mb-2">
                {selectedProduct.title}
              </h2>
              <p className="text-xl text-careniva-gold mb-8">
                {selectedProduct.price} <span className="text-sm text-white/40 ml-2">({selectedProduct.size})</span>
              </p>
              
              <p className="text-careniva-ivory/70 leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <div className="space-y-3 mb-10">
                {['100% Chekku Cold Pressed', 'Zero Chemicals or Preservatives', 'Ethically Sourced in Tamil Nadu'].map((benefit, i) => (
                  <div key={i} className="flex items-center text-sm text-careniva-ivory/80">
                    <Check className="w-5 h-5 text-careniva-gold mr-3" />
                    {benefit}
                  </div>
                ))}
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full py-4 bg-careniva-gold text-careniva-dark font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}