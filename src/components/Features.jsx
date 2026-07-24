import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones, Award, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Global Express Delivery',
      description: 'Complimentary express shipping on all orders over $99. Real-time GPS tracking enabled.'
    },
    {
      icon: ShieldCheck,
      title: '2-Year Warranty Coverage',
      description: 'Full hardware and repair protection plan included standard with every purchase.'
    },
    {
      icon: RefreshCw,
      title: '30-Day Hassle-Free Returns',
      description: 'Not 100% satisfied? Return your items for a complete refund or exchange with zero questions asked.'
    },
    {
      icon: Lock,
      title: '256-Bit Encrypted Payments',
      description: 'Bank-level encryption protecting Apple Pay, Visa, Mastercard, and Cryptocurrency checkouts.'
    }
  ];

  return (
    <section className="py-20 relative border-t border-slate-800/60 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
