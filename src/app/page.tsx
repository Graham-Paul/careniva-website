'use client';

import Founder from "../components/ui/Founder";
import Process from "../components/ui/Process";
import Hero from "../components/ui/Hero";
import ProductCard from "../components/ui/ProductCard";
import Comparison from "../components/ui/Comparison";
import Benefits from "../components/ui/Benefits";
import AiAssistant from "../components/ui/AiAssistant";
import ProductModal from "../components/ui/ProductModal";
import ProductRecommender from "../components/ui/ProductRecommender";
import Testimonials from "../components/ui/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-careniva-dark selection:bg-careniva-gold selection:text-careniva-dark font-sans overflow-hidden">
      
      <AiAssistant />
      <ProductModal />
      <Hero />

      {/* The Process Section Component */}
      <Process /> 

      {/* Interactive Consultation */}
      <section className="relative w-full px-6 md:px-16 pt-16">
        <ProductRecommender />
      </section>

      {/* Purity Comparison */}
      <section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-b from-careniva-dark to-[#041a12]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-careniva-ivory mb-4">
              Why Compromise on Purity?
            </h2>
            <p className="text-careniva-ivory/60 max-w-2xl mx-auto">
              See exactly why generations of families have trusted the traditional extraction method over commercial refinery processes.
            </p>
          </motion.div>
          <Comparison />
        </div>
      </section>

      {/* Benefits Animation */}
      <section className="relative w-full py-32 px-6 md:px-16 bg-careniva-dark">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-careniva-ivory">
            Nature's Multi-Tasker
          </h2>
        </div>
        <Benefits />
      </section>

      {/* The Product Showcase */}
      <section className="relative w-full py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-careniva-ivory mb-4">
              The Collection
            </h2>
            <p className="text-careniva-ivory/60 max-w-md">
              100% pure, unrefined, and chemical-free. Designed for your health, beauty, and culinary excellence.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-careniva-gold border-b border-careniva-gold pb-1 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors">
            View All Products
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Herbal Hair Oil" 
            size="200ml" 
            category="Hair Care" 
            price="₹349" 
            imageSrc="/hair-oil.png" 
          />
          <ProductCard 
            title="Pure Coconut Oil" 
            size="500ml" 
            category="Skin & Cooking" 
            price="₹499" 
            imageSrc="/cooking-oil.png" 
          />
          <ProductCard 
            title="Family Reserve" 
            size="1 Litre" 
            category="Kitchen Staples" 
            price="₹899" 
            imageSrc="/family-oil.png" 
          />
        </div>
      </section>

      {/* Founder Details Slider */}
      <Founder />

      {/* Trust & Testimonials */}
      <section className="relative w-full py-32 px-6 md:px-16 bg-black border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-careniva-ivory mb-4">
            Trusted by Generations
          </h2>
        </div>
        <Testimonials />
      </section>

      {/* Footer */}
      <footer className="w-full py-16 bg-black text-center border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 opacity-50 px-6">
          <span className="font-display tracking-widest uppercase text-sm">100% Natural</span>
          <span className="font-display tracking-widest uppercase text-sm">No Chemicals</span>
          <span className="font-display tracking-widest uppercase text-sm">Chekku Cold Pressed</span>
          <span className="font-display tracking-widest uppercase text-sm">Lab Tested</span>
        </div>
        <p className="text-careniva-ivory/40 text-sm">
          © 2026 Careniva. Premium Quality from Tamil Nadu.
        </p>
      </footer>

    </main>
  );
}