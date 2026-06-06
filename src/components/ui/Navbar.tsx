'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCartStore } from '../../lib/store';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Bring in the totalItems count AND the toggleCart function
  const { totalItems, toggleCart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-careniva-dark/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
          
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-careniva-ivory hover:text-careniva-gold transition-colors">
            <Menu className="w-6 h-6" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-careniva-gold tracking-widest uppercase">
              Careniva
            </h1>
          </div>

          {/* Added onClick={toggleCart} here */}
          <button onClick={toggleCart} className="relative text-careniva-ivory hover:text-careniva-gold transition-colors group">
            <ShoppingBag className="w-6 h-6" />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={totalItems}
                  className="absolute -top-1 -right-2 bg-careniva-gold text-careniva-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-white transition-colors"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Render the Cart Drawer Component */}
      <CartDrawer />

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-careniva-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-careniva-ivory hover:text-careniva-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8 text-2xl font-display text-careniva-ivory">
              {['Shop All', 'Our Story', 'The Process', 'Journal', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.05, color: '#D4AF37' }}
                  className="hover:text-careniva-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}