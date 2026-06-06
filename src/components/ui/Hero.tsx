'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls, useGLTF } from '@react-three/drei';

// This sub-component loads your specific file from the public folder
function Model() {
  const { scene } = useGLTF('/careniva-bottle.glb');
  // I slightly reduced the scale from 0.5 to 0.45 for a more premium, breathable look
  return <primitive object={scene} scale={0.45} />;
}

export default function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-careniva-dark text-careniva-ivory font-sans">
      
      {/* 3D Canvas - Pinned to the right side of the screen on desktop! */}
      <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-10 cursor-grab active:cursor-grabbing">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls makeDefault enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Loading Animation */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-careniva-dark"
          >
            <div className="w-4 h-4 rounded-full bg-careniva-gold animate-ping" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Typography */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isRevealed ? 1 : 0, x: isRevealed ? 0 : -30 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-20 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8 md:px-16 pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter mb-6 text-careniva-ivory max-w-2xl">
          Pure by Nature.
        </h1>
        <p className="text-xl text-careniva-ivory/80 mb-10 max-w-md">
          Cold Pressed Coconut Oil. Extracted natively in Thoothukudi.
        </p>
        
        <div className="pointer-events-auto">
          <button className="px-8 py-4 bg-careniva-gold text-careniva-dark font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
            Explore Collection
          </button>
        </div>
      </motion.div>
    </div>
  );
}