'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '../../../lib/store';

// This acts as our database for now
const productDatabase: Record<string, any> = {
  "herbal-hair-oil": {
    id: "herbal-hair-oil",
    title: "Herbal Hair Oil",
    price: "₹349",
    size: "200ml",
    category: "Hair Care",
    image: "/hair-oil.png",
    description: "Infused with 21 traditional Ayurvedic herbs, our signature hair oil is slowly cold-pressed in a wooden chekku to preserve its potent nutrients. Designed to strengthen roots, reduce hair fall, and restore your hair's natural, vibrant shine.",
    benefits: ["Strengthens hair roots", "Prevents premature graying", "Soothes dry, itchy scalp"]
  },
  "pure-coconut-oil": {
    id: "pure-coconut-oil",
    title: "Pure Coconut Oil",
    price: "₹499",
    size: "500ml",
    category: "Skin & Cooking",
    image: "/cooking-oil.png",
    description: "The ultimate multi-tasker. Extracted from sun-dried copras with zero heat or chemicals. This deeply moisturizing, unrefined oil provides a natural, healthy glow for your skin and is gentle enough for newborn baby massages.",
    benefits: ["Deeply hydrates and locks in moisture", "Natural antimicrobial properties", "100% safe for sensitive skin"]
  },
  "family-reserve": {
    id: "family-reserve",
    title: "Family Reserve",
    price: "₹899",
    size: "1 Litre",
    category: "Kitchen Staples",
    image: "/family-oil.png",
    description: "The healthiest choice for your family's daily meals. With a naturally high smoke point and zero trans fats, our Family Reserve enhances immunity and adds a rich, authentic coastal aroma to your daily cooking.",
    benefits: ["Zero cholesterol & zero trans fats", "High smoke point for safe frying", "Retains 100% natural MCTs"]
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCartStore();
  const product = productDatabase[params.id];

  // If someone types a random URL, show a 404-style message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 text-careniva-ivory">
        <h1 className="text-4xl font-display mb-4">Product Not Found</h1>
        <Link href="/" className="text-careniva-gold hover:underline">Return Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      
      <Link href="/" className="inline-flex items-center text-careniva-ivory/50 hover:text-careniva-gold transition-colors mb-12 uppercase tracking-widest text-xs font-semibold">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Product Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-12 relative group"
        >
          {/* Subtle glow behind the bottle */}
          <div className="absolute inset-0 bg-careniva-gold/10 blur-[100px] rounded-full opacity-50" />
          <img 
            src={product.image} 
            alt={product.title} 
            className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
          />
        </motion.div>

        {/* Right Side: Product Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <span className="text-careniva-gold tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
            {product.category} • {product.size}
          </span>
          <h1 className="text-5xl md:text-6xl font-display text-careniva-ivory mb-6">
            {product.title}
          </h1>
          <p className="text-2xl text-careniva-ivory/80 font-light mb-8">
            {product.price}
          </p>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <p className="text-careniva-ivory/70 text-lg leading-relaxed mb-10 font-light">
            {product.description}
          </p>

          <div className="space-y-4 mb-12">
            {product.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-center text-careniva-ivory/80">
                <CheckCircle2 className="w-5 h-5 text-careniva-gold mr-3 flex-shrink-0" />
                <span className="font-light">{benefit}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full md:w-auto px-12 py-5 bg-careniva-gold text-careniva-dark font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors flex items-center justify-center text-sm"
          >
            <ShoppingBag className="w-5 h-5 mr-3" /> Add to Cart
          </button>
        </motion.div>

      </div>
    </main>
  );
}