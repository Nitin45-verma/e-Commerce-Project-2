import React from 'react';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted, 
  isInCart 
}) {
  return (
    <div className="glass-card rounded-3xl p-4 flex flex-col justify-between relative group border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300">
      
      {/* Product Image Container */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 mb-4">
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          {product.originalPrice > product.price && (
            <span className="bg-rose-500/90 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-rose-400/30">
              SAVE ${(product.originalPrice - product.price)}
            </span>
          )}
        </div>

        {/* Top Action Buttons (Wishlist & Quick View) */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onToggleWishlist(product)}
            className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                : 'bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-white/10'
            }`}
            title="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={() => onQuickView(product)}
            className="w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900 flex items-center justify-center transition-all"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-100"
        />

        {/* Hover Slide-up Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            onClick={() => onAddToCart(product)}
            className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-xl transition-all ${
              isInCart
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </>
            )}
          </button>
        </div>

      </div>

      {/* Product Information */}
      <div className="space-y-2 px-1">
        
        {/* Rating & Review Count */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
          </div>

          {/* Swatches */}
          {product.colors && (
            <div className="flex items-center gap-1">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full border border-slate-700 shadow-inner"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors cursor-pointer line-clamp-1"
        >
          {product.name}
        </h3>

        <p className="text-xs text-slate-400 line-clamp-1">
          {product.tagline}
        </p>

        {/* Price & Stock */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            In Stock
          </span>
        </div>

      </div>

    </div>
  );
}
