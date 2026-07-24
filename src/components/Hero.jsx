import React from 'react';
import { ArrowRight, Star, Play, Shield, Sparkles, Award, TrendingUp } from 'lucide-react';

export default function Hero({ onExploreClick, onQuickViewHero }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
      
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-yellow-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-yellow-500/20 to-amber-500/15 border border-amber-500/40 px-4 py-2 rounded-full text-amber-300 text-xs font-bold tracking-wide backdrop-blur-md shadow-lg shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE 2026 EDITION IS NOW LIVE</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
              Crafted For <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(245,158,11,0.35)]">
                Exceptional Minds.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow">
              Elevate your daily ritual with high-fidelity acoustics, luxury smart wearables, and sustainable streetwear designed with relentless attention to detail.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#featured"
                onClick={onExploreClick}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </a>

              <a
                href="#flash-sale"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-6 py-4 rounded-2xl transition-all hover:border-slate-500 backdrop-blur-md text-base"
              >
                <div className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span>View Flash Deals</span>
              </a>
            </div>

            {/* Social Proof & Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">50k+</div>
                <div className="text-xs text-slate-400 font-medium">Happy Global Clients</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-2xl sm:text-3xl font-extrabold text-white">
                  <span>4.9</span>
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Over 12,000+ Reviews</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">24h</div>
                <div className="text-xs text-slate-400 font-medium">Express Dispatch</div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

              {/* Main Visual Card */}
              <div className="relative glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Floating Badge */}
                <div className="absolute top-8 left-8 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Product of the Year</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden group bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80"
                    alt="Apex Pro Headphone"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />

                  {/* Bottom Image Details Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Apex Pro ANC Headphones</h3>
                      <p className="text-xs text-slate-300 font-medium">Beryllium Drivers • 60h Battery</p>
                    </div>
                    <button
                      onClick={onQuickViewHero}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-lg transition-transform hover:scale-105"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Bottom Floating Info Pill */}
                <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      $349
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Limited Stock Available</div>
                      <div className="text-[11px] text-slate-400">Includes 2-Year Warranty Card</div>
                    </div>
                  </div>
                  
                  <div className="flex -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
                    <img className="w-7 h-7 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
                    <img className="w-7 h-7 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
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
