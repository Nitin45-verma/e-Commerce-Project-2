import React from 'react';
import { Sparkles, Globe, Share2, MessageCircle, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Spans 2 columns) */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                LUXE<span className="text-indigo-400">MART</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Curating tomorrow’s flagship acoustic audio, titanium smart wearables, and sustainable luxury fashion for discerning tastemakers.
            </p>
            
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors" title="Global Portal">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors" title="Share Community">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors" title="VIP Support Chat">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors" title="Contact Us">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Shop Collections</h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-white transition-colors">Audio & Soundbars</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Smart Wearables</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Urban Apparel</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Titanium Optics</a></li>
              <li><a href="#flash-sale" className="hover:text-white transition-colors text-rose-400 font-semibold">Flash Deals</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24/7 VIP Concierge</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LuxeMart Inc. All rights reserved. Designed for excellence.</p>
          
          {/* Payment Badges */}
          <div className="flex items-center gap-4 text-slate-500 font-semibold">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[11px] text-slate-300">Apple Pay</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[11px] text-slate-300">Visa</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[11px] text-slate-300">Mastercard</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[11px] text-slate-300">PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
