import React, { useState, useEffect } from 'react';
import { Zap, Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { PROMO_BANNER } from '../data/products';

export default function FlashSale({ onQuickViewDeal, onAddToCart }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="flash-sale" className="py-16 relative overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-rose-600/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-indigo-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950 to-indigo-950/80 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Flash Offer Info */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/30 px-3.5 py-1.5 rounded-full text-rose-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 fill-rose-400 text-rose-400" />
                <span>LIMITED TIME OFFER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Save Up To <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400">40% OFF</span> On Flagship Gear
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Claim your exclusive discount on Apex Pro Headphones and Horizon Smart Watches before stock sells out for the season.
              </p>

              {/* Countdown Timer */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-center lg:justify-start gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" /> Offer Expires In
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl px-4 py-3 min-w-[70px] text-center shadow-lg">
                    <span className="text-2xl sm:text-3xl font-black text-white block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Hours</span>
                  </div>

                  <span className="text-2xl font-bold text-slate-600">:</span>

                  <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl px-4 py-3 min-w-[70px] text-center shadow-lg">
                    <span className="text-2xl sm:text-3xl font-black text-white block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Mins</span>
                  </div>

                  <span className="text-2xl font-bold text-slate-600">:</span>

                  <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl px-4 py-3 min-w-[70px] text-center shadow-lg">
                    <span className="text-2xl sm:text-3xl font-black text-rose-400 block">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-rose-400 font-semibold uppercase">Secs</span>
                  </div>
                </div>
              </div>

              {/* Coupon Code Pill */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
                <div className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-4 py-2 rounded-xl flex items-center gap-2 font-mono font-bold">
                  <Tag className="w-4 h-4 text-indigo-400" />
                  <span>Use Coupon: <strong className="text-white bg-indigo-600/50 px-2 py-0.5 rounded">LUXE40</strong></span>
                </div>
              </div>

            </div>

            {/* Right Product Highlight Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-2xl relative">
                
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
                    alt="AeroTech Parka"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SAVE $71
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">AeroTech Waterproof Parka</h3>
                  <p className="text-xs text-slate-400">3-Layer Gore-Tex Shell • Extreme Weatherproofing</p>
                  
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <span className="text-2xl font-black text-white">$249</span>
                      <span className="text-xs text-slate-500 line-through ml-2">$320</span>
                    </div>

                    <button
                      onClick={onQuickViewDeal}
                      className="bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                    >
                      <span>Claim Deal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
