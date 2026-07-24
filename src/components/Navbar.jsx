import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Zap, 
  User, 
  ChevronRight,
  ShieldCheck,
  Truck
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  searchQuery, 
  setSearchQuery, 
  filteredProducts,
  onSelectProduct 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-indigo-200 text-xs py-2 px-4 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-indigo-500/30 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" /> NEW DROP
            </span>
            <span>Mid-Summer Sale — Up to 40% OFF with code <strong className="text-white font-bold tracking-wider">LUXE40</strong></span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Truck className="w-3.5 h-3.5 text-indigo-400" /> Free Worldwide Express Shipping
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 2-Year Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                  LUXE<span className="text-indigo-400">MART</span>
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 uppercase -mt-1 font-semibold">
                  Luxury Essentials
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#featured" className="hover:text-indigo-400 transition-colors py-1">Shop</a>
              <a href="#categories" className="hover:text-indigo-400 transition-colors py-1">Categories</a>
              <a href="#flash-sale" className="hover:text-indigo-400 transition-colors py-1 flex items-center gap-1">
                Deals <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              </a>
              <a href="#testimonials" className="hover:text-indigo-400 transition-colors py-1">Reviews</a>
              <a href="#footer" className="hover:text-indigo-400 transition-colors py-1">About Us</a>
            </nav>

            {/* Search Bar & Actions */}
            <div className="flex items-center gap-4">
              
              {/* Interactive Search Bar */}
              <div className="relative hidden md:block w-64 lg:w-72">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                    placeholder="Search products..."
                    className="w-full bg-slate-900/80 border border-slate-700/60 focus:border-indigo-500 rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 text-slate-500 hover:text-slate-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Search Quick Dropdown */}
                {searchFocused && searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                    {filteredProducts.length > 0 ? (
                      <div className="p-2 space-y-1 max-h-72 overflow-y-auto">
                        <div className="text-[11px] font-semibold text-slate-500 uppercase px-3 py-1">
                          Matching Products ({filteredProducts.length})
                        </div>
                        {filteredProducts.slice(0, 4).map((product) => (
                          <button
                            key={product.id}
                            onClick={() => {
                              onSelectProduct(product);
                              setSearchQuery('');
                            }}
                            className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                          >
                            <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-200 truncate">{product.name}</p>
                              <p className="text-[11px] text-indigo-400 font-medium">${product.price}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-600" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-slate-400">
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist Button */}
              <button 
                className="relative p-2.5 rounded-full text-slate-300 hover:text-rose-400 hover:bg-slate-900 transition-colors"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger Button */}
              <button
                onClick={onOpenCart}
                className="btn-shimmer relative flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-slate-900 border border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
              />
            </div>

            <nav className="flex flex-col space-y-3 font-medium text-slate-200 text-sm">
              <a 
                href="#featured" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-400 py-1"
              >
                Shop Products
              </a>
              <a 
                href="#categories" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-400 py-1"
              >
                Categories
              </a>
              <a 
                href="#flash-sale" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-400 py-1 flex items-center justify-between"
              >
                <span>Special Deals</span>
                <span className="bg-rose-500/20 text-rose-400 text-xs px-2 py-0.5 rounded-full">Limited</span>
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-400 py-1"
              >
                Customer Reviews
              </a>
              <a 
                href="#footer" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-400 py-1"
              >
                Support & Contact
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
