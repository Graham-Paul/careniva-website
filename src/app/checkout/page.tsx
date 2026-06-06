'use client';

import { useCartStore } from '../../lib/store';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const { items } = useCartStore();

  // ADDED TYPES HERE: (total: number, item: any)
  const cartTotal = items.reduce((total: number, item: any) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ''), 10);
    return total + numericPrice * item.quantity;
  }, 0);

  // If cart is empty, show a message
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 text-careniva-ivory">
        <h1 className="text-4xl font-display mb-4">Your Cart is Empty</h1>
        <Link href="/" className="text-careniva-gold hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <Link href="/" className="inline-flex items-center text-careniva-ivory/50 hover:text-careniva-gold transition-colors mb-12 uppercase tracking-widest text-xs font-semibold">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Shipping Form */}
        <div>
          <h2 className="text-3xl font-display text-careniva-ivory mb-8">Shipping Details</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-careniva-ivory/60 text-sm mb-2">First Name</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-careniva-ivory focus:border-careniva-gold outline-none transition-colors" placeholder="Joseph" />
              </div>
              <div className="flex flex-col">
                <label className="text-careniva-ivory/60 text-sm mb-2">Last Name</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-careniva-ivory focus:border-careniva-gold outline-none transition-colors" placeholder="Paul" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-careniva-ivory/60 text-sm mb-2">Email Address</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-careniva-ivory focus:border-careniva-gold outline-none transition-colors" placeholder="joseph@example.com" />
            </div>

            <div className="flex flex-col">
              <label className="text-careniva-ivory/60 text-sm mb-2">Shipping Address</label>
              <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-careniva-ivory focus:border-careniva-gold outline-none transition-colors" placeholder="123 Heritage Lane, Thoothukudi" />
            </div>

            <button className="w-full py-5 mt-8 bg-careniva-gold text-careniva-dark font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 mr-2" /> Pay ₹{cartTotal} Securely
            </button>
            <p className="text-center text-careniva-ivory/40 text-xs mt-4">
              Payments are securely processed via 256-bit encryption.
            </p>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 h-fit sticky top-32">
          <h2 className="text-2xl font-display text-careniva-ivory mb-8">Order Summary</h2>
          
          <div className="space-y-6 mb-8">
            {/* ADDED TYPE HERE: (item: any) */}
            {items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-16 bg-black/30 rounded border border-white/5 flex items-center justify-center overflow-hidden relative">
                    <span className="text-[10px] text-white/30 z-0 absolute">Img</span>
                  </div>
                  <div>
                    <h4 className="text-careniva-ivory font-medium">{item.title}</h4>
                    <p className="text-careniva-ivory/50 text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-careniva-gold">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex justify-between text-careniva-ivory/70">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between text-careniva-ivory/70">
              <span>Shipping</span>
              <span className="text-careniva-gold">Free</span>
            </div>
            <div className="flex justify-between text-xl text-careniva-ivory font-semibold pt-4 border-t border-white/10">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}