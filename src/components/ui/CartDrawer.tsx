'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../../lib/store';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem } = useCartStore();

  // Calculate the total price (stripping the "₹" symbol for math)
  const cartTotal = items.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ''), 10);
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {/* Dark Overlay Background */}
      {isCartOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        />
      )}

      {/* Sliding Glass Drawer */}
      {isCartOpen && (
        <motion.div
          key="drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()} 
          className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0a0a0a]/90 backdrop-blur-3xl border-l border-white/10 z-[70] flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-display text-careniva-ivory">Your Cart</h2>
            <button onClick={closeCart} className="text-white/50 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-white/40">
                <p className="font-display text-xl mb-2">Your cart is empty</p>
                <p className="text-sm">Discover our pure, cold-pressed collection.</p>
              </div>
            ) : (
              items.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id} 
                  className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl relative z-50"
                >
                  <div className="w-16 h-20 bg-black/30 rounded-lg flex items-center justify-center border border-white/5 text-[10px] text-white/30 text-center">
                    Image
                  </div>
                  <div className="flex-1">
                    <h4 className="text-careniva-ivory font-semibold text-lg leading-tight">{item.title}</h4>
                    <p className="text-careniva-gold text-sm mt-1">{item.price} <span className="text-white/40 ml-2">x {item.quantity}</span></p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors relative z-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-black/50">
              <div className="flex justify-between text-careniva-ivory mb-6 text-lg">
                <span>Subtotal</span>
                <span className="font-semibold text-careniva-gold">₹{cartTotal}</span>
              </div>
              
              {/* THIS IS THE NEW PART: Wrapped in a Link */}
              <Link href="/checkout" onClick={closeCart} className="block w-full">
                <button className="w-full py-4 bg-careniva-gold text-careniva-dark font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors">
                  Proceed to Checkout
                </button>
              </Link>

            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}