'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCartStore } from '../../lib/store';

interface ProductProps {
  title: string;
  size: string;
  category: string;
  price: string;
  imageSrc: string; 
}

export default function ProductCard({ title, size, category, price, imageSrc }: ProductProps) {
  const { addItem, openModal } = useCartStore();

  const id = title.toLowerCase().replace(/\s+/g, '-');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, title, price, quantity: 1 });
  };

  const handleCardClick = () => {
    let description = "Our signature cold-pressed extraction preserves the natural vitality of the coconut.";
    if (category.includes("Hair")) description = "Infused with potent Ayurvedic herbs, this oil deeply nourishes the scalp, fortifies roots, and restores natural brilliance to your hair.";
    if (category.includes("Cooking")) description = "Unrefined and pure. The perfect high-smoke-point staple for healthy, aromatic, and traditional cooking for your entire family.";

    openModal({
      id, title, price, category, size, description
    });
  };

  return (
    <motion.div 
      onClick={handleCardClick}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group w-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden cursor-pointer flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-careniva-gold/0 via-careniva-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <span className="text-xs tracking-[0.2em] uppercase text-careniva-gold font-semibold mb-8">
        {category}
      </span>
      
      {/* Real Image Integration */}
      <div className="relative w-32 h-48 mb-8 group-hover:scale-105 transition-transform duration-700">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-contain drop-shadow-2xl"
        />
      </div>
      
      <h3 className="text-2xl font-display text-careniva-ivory text-center mb-2">
        {title}
      </h3>
      
      <div className="flex items-center justify-between w-full mt-4 border-t border-white/10 pt-4">
        <p className="text-sm text-careniva-ivory/60 tracking-wider">
          {size}
        </p>
        <p className="text-sm font-semibold text-careniva-gold">
          {price}
        </p>
      </div>

      <div className="mt-6 w-full text-center h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
        <button 
          onClick={handleAddToCart}
          className="text-sm font-bold tracking-widest text-careniva-dark bg-careniva-gold w-full py-3 rounded-full hover:bg-white transition-colors active:scale-95"
        >
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
}