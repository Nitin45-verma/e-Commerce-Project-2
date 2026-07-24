import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Filter, Flame, Sparkles, Tag, Layers } from 'lucide-react';

export default function ProductGrid({ 
  activeCategory, 
  onSelectCategory, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  wishlist, 
  cart,
  searchQuery 
}) {
  const [activeTab, setActiveTab] = useState('all');

  // Filter products based on search query, active tab, and selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    // Search match
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category match
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // Tab match
    if (activeTab === 'bestsellers' && !product.badge?.includes('Best') && product.rating < 4.8) {
      return false;
    }
    if (activeTab === 'new' && !product.isNew) {
      return false;
    }
    if (activeTab === 'offers' && !product.originalPrice) {
      return false;
    }

    return true;
  });

  const isProductWishlisted = (id) => wishlist.some(item => item.id === id);
  const isProductInCart = (id) => cart.some(item => item.id === id);

  return (
    <section id="featured" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-rose-500 fill-rose-500" /> Trending Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Flagship Products
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeTab === 'bestsellers'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              ★ Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeTab === 'new'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              ✨ New Drop
            </button>
            <button
              onClick={() => setActiveTab('offers')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeTab === 'offers'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🏷️ Discounted
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-200 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
          {activeCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs text-indigo-400 hover:underline px-2 py-1"
            >
              Reset Category
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={isProductWishlisted(product.id)}
                isInCart={isProductInCart(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-3xl p-12 text-center max-w-lg mx-auto border border-slate-800">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto text-slate-500 mb-4">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Matching Products</h3>
            <p className="text-xs text-slate-400 mb-6">
              We couldn't find any products matching your selected filters or search query.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setActiveTab('all');
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl text-xs font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
