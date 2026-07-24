import React from 'react';
import { CheckCircle2, Heart, ShoppingBag, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isWishlist = toast.type === 'wishlist';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="glass-panel border border-indigo-500/30 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md">
        <div className={`p-2.5 rounded-xl ${isWishlist ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
          {isWishlist ? <Heart className="w-5 h-5 fill-current" /> : <ShoppingBag className="w-5 h-5" />}
        </div>
        
        <div className="flex-1 pr-2">
          <p className="text-sm font-semibold text-slate-200">
            {isWishlist ? 'Wishlist Updated' : 'Added to Cart'}
          </p>
          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
            {toast.message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
