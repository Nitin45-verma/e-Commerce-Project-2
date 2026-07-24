import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import FlashSale from './components/FlashSale';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1 } // Default initial cart item for rich preview
  ]);
  const [wishlist, setWishlist] = useState([PRODUCTS[1]]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    showToast('cart', `Added ${product.name} to your shopping cart.`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (product) => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    if (isWishlisted) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast('wishlist', `Removed ${product.name} from your wishlist.`);
    } else {
      setWishlist(prev => [...prev, product]);
      showToast('wishlist', `Saved ${product.name} to your wishlist!`);
    }
  };

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Toast Popup Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Main Navbar */}
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredProducts={filteredProducts}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => setActiveCategory('all')}
          onQuickViewHero={() => setQuickViewProduct(PRODUCTS[0])}
        />

        {/* Category Showcase Grid */}
        <CategoryGrid
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('featured');
            gridElem?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Catalog / Product Grid */}
        <ProductGrid
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onQuickView={(product) => setQuickViewProduct(product)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          cart={cart}
          searchQuery={searchQuery}
        />

        {/* Flash Sale Banner */}
        <FlashSale
          onQuickViewDeal={() => setQuickViewProduct(PRODUCTS[2])}
          onAddToCart={handleAddToCart}
        />

        {/* Value Propositions */}
        <Features />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlist.some(i => i.id === quickViewProduct.id)}
          isInCart={cart.some(i => i.id === quickViewProduct.id)}
        />
      )}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
