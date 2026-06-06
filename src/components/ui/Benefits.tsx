'use client';

import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-screen py-20 flex flex-col justify-center overflow-hidden">
      
      {/* Background Image 1: Misty Palms (Top Right) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-[70%] md:w-[45%] aspect-square pointer-events-none"
        style={{ 
          maskImage: 'radial-gradient(circle closest-side, black 10%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(circle closest-side, black 10%, transparent 100%)' 
        }}
      >
        <img 
          src="/pexels-alexeydemidov-10907112.jpg" 
          alt="Atmospheric misty palms" 
          className="object-cover w-full h-full mix-blend-luminosity" 
        />
      </motion.div>

      {/* Background Image 2: Sunny Palms (Bottom Left) */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-[80%] md:w-[50%] aspect-square pointer-events-none"
        style={{ 
          maskImage: 'radial-gradient(circle closest-side, black 10%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(circle closest-side, black 10%, transparent 100%)' 
        }}
      >
        <img 
          src="/pexels-mredgarvfx-6015685.jpg" 
          alt="Sunlit tropical palms" 
          className="object-cover w-full h-full mix-blend-luminosity" 
        />
      </motion.div>

      {/* Typography Content */}
      <div className="relative z-10 flex flex-col gap-32 md:gap-40 px-6 mt-10 md:mt-20 mb-10">
        
        {/* 01 - Left Aligned */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-careniva-gold text-xl md:text-2xl font-light tracking-widest mb-4 block">
            01
          </span>
          <h3 className="text-4xl md:text-6xl font-display text-careniva-ivory mb-6">
            Hair Vitality
          </h3>
          <p className="text-careniva-ivory/70 text-lg md:text-xl font-light leading-relaxed">
            Strengthens roots, reduces hair fall, and restores natural shine using ancient Ayurvedic herb infusion.
          </p>
        </motion.div>

        {/* 02 - Center Aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl self-center text-center md:text-left"
        >
          <span className="text-careniva-gold text-xl md:text-2xl font-light tracking-widest mb-4 block">
            02
          </span>
          <h3 className="text-4xl md:text-6xl font-display text-careniva-ivory mb-6">
            Skin Radiance
          </h3>
          <p className="text-careniva-ivory/70 text-lg md:text-xl font-light leading-relaxed">
            Deeply hydrates and locks in moisture. Its natural antimicrobial properties leave your skin glowing and youthful.
          </p>
        </motion.div>

        {/* 03 - Right Aligned */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl self-end text-right"
        >
          <span className="text-careniva-gold text-xl md:text-2xl font-light tracking-widest mb-4 block">
            03
          </span>
          <h3 className="text-4xl md:text-6xl font-display text-careniva-ivory mb-6">
            Culinary Excellence
          </h3>
          <p className="text-careniva-ivory/70 text-lg md:text-xl font-light leading-relaxed">
            High smoke point with zero trans fats. Enhances immunity and adds a rich, authentic aroma to your daily cooking.
          </p>
        </motion.div>

      </div>
    </div>
  );
}