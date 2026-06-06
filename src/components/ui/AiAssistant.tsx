'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-careniva-gold text-careniva-dark rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[500px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div>
                <h4 className="text-careniva-gold font-display text-lg">Ask Careniva</h4>
                <p className="text-xs text-careniva-ivory/50">Your personal wellness concierge</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 p-3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%] self-start text-sm text-careniva-ivory/80">
                Namaste! I am your Careniva AI assistant. Are you looking for oil recommendations for hair care, skincare, or culinary uses?
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Ask about our process..." 
                className="flex-1 bg-transparent border border-white/20 rounded-full px-4 py-2 text-sm text-careniva-ivory focus:outline-none focus:border-careniva-gold transition-colors placeholder:text-white/30"
              />
              <button className="p-2 bg-careniva-gold text-careniva-dark rounded-full hover:bg-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}