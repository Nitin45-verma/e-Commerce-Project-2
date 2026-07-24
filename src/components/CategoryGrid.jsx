import React from 'react';
import { ArrowUpRight, Headphones, Watch, Shirt, Glasses, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ICON_MAP = {
  Headphones,
  Watch,
  Shirt,
  Glasses,
  Sparkles
};

export default function CategoryGrid({ activeCategory, onSelectCategory }) {
  const displayCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <section id="categories" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Curated Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore By Category
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-3 md:mt-0 font-normal">
            Handpicked premium selections across high-fidelity audio, titanium smart wearables, and sustainable fashion.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || Sparkles;
            const isActive = activeCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer h-80 transition-all duration-500 border ${
                  isActive 
                    ? 'border-indigo-500 ring-2 ring-indigo-500/30' 
                    : 'border-slate-800 hover:border-indigo-500/50'
                }`}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="bg-slate-950/70 backdrop-blur-md border border-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full font-medium">
                      {category.count} Products
                    </span>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                      <span>{category.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-400" />
                    </h3>
                    <p className="text-xs text-slate-300 font-normal line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
