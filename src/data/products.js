export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Collections',
    icon: 'Sparkles',
    count: 24,
  },
  {
    id: 'audio',
    name: 'Audio & Acoustics',
    icon: 'Headphones',
    count: 8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'High-fidelity spatial sound & ANC technology'
  },
  {
    id: 'wearables',
    name: 'Smart Wearables',
    icon: 'Watch',
    count: 6,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'Next-generation fitness tracking & luxury craftsmanship'
  },
  {
    id: 'apparel',
    name: 'Urban Fashion',
    icon: 'Shirt',
    count: 10,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
    description: 'Sustainable minimalist outerwear & modern streetwear'
  },
  {
    id: 'accessories',
    name: 'Lifestyle & Optics',
    icon: 'Glasses',
    count: 7,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted titanium frames & everyday carry goods'
  }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Apex Pro ANC Headphones',
    tagline: 'Pure Active Noise Cancelling with 60hr battery life',
    category: 'audio',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewsCount: 328,
    badge: 'Best Seller',
    isNew: true,
    isTrending: true,
    inStock: true,
    colors: ['#0f172a', '#e2e8f0', '#6366f1'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Experience ultra-rich spatial audio engineered with custom 45mm beryllium drivers. The Apex Pro offers world-class hybrid active noise cancellation, ambient passthrough mode, and ultra-soft memory foam earcups.',
    specs: [
      { label: 'Driver Size', value: '45mm Custom Dynamic' },
      { label: 'Battery Life', value: '60 Hours (ANC On)' },
      { label: 'Connectivity', value: 'Bluetooth 5.3 + USB-C' },
      { label: 'Weight', value: '254 grams' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Horizon Minimalist Smart Watch',
    tagline: 'Titanium chassis with Sapphire AMOLED Display',
    category: 'wearables',
    price: 299,
    originalPrice: 350,
    rating: 4.8,
    reviewsCount: 194,
    badge: 'Popular',
    isNew: false,
    isTrending: true,
    inStock: true,
    colors: ['#1e293b', '#94a3b8', '#d97706'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A masterpiece of precision engineering. The Horizon smartwatch features continuous heart health monitoring, sleep stage analytics, built-in GPS, and a scratch-resistant sapphire crystal lens.',
    specs: [
      { label: 'Display', value: '1.43" Ultra-AMOLED' },
      { label: 'Water Resistance', value: '50 Meters (5 ATM)' },
      { label: 'Sensors', value: 'SpO2, ECG, Optical HR' },
      { label: 'Battery', value: '14 Days Regular Use' }
    ]
  },
  {
    id: 'prod-3',
    name: 'AeroTech Waterproof Parka',
    tagline: '3-Layer Gore-Tex Shell for Extreme Elements',
    category: 'apparel',
    price: 249,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 142,
    badge: '40% OFF',
    isNew: true,
    isTrending: false,
    inStock: true,
    colors: ['#090d16', '#334155', '#047857'],
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Designed for high performance and urban aesthetics. Features breathable waterproof construction, taped seams, hidden magnetic pockets, and an adjustable ergonomic storm hood.',
    specs: [
      { label: 'Material', value: 'Recycled Polyester Shell' },
      { label: 'Waterproofing', value: '20,000mm Hydrostatic' },
      { label: 'Fit', value: 'Modern Tailored Athletic' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Luminary Ray Titanium Sunglasses',
    tagline: 'Polarized HD lenses with anti-reflective coating',
    category: 'accessories',
    price: 185,
    originalPrice: 220,
    rating: 4.7,
    reviewsCount: 88,
    badge: 'Limited Edition',
    isNew: false,
    isTrending: true,
    inStock: true,
    colors: ['#b45309', '#1e293b'],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Ultra-lightweight Japanese titanium frames paired with Category 3 polarized lenses that block 100% of harmful UVA/UVB rays. Built for enduring style and comfort.',
    specs: [
      { label: 'Frame Material', value: 'Grade 5 Japanese Titanium' },
      { label: 'Lens', value: 'Polarized HD Polycarbonate' },
      { label: 'Weight', value: 'Only 18g' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Pulse X Wireless Earbuds',
    tagline: 'True Wireless Earbuds with Touch Control Case',
    category: 'audio',
    price: 159,
    originalPrice: 199,
    rating: 4.8,
    reviewsCount: 215,
    badge: 'Trending',
    isNew: false,
    isTrending: true,
    inStock: true,
    colors: ['#020617', '#f8fafc'],
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Seamless Bluetooth 5.4 pairing with dual-driver sound clarity and an OLED touch screen integrated directly into the magnetic charging case.',
    specs: [
      { label: 'Playtime', value: '38 Hours Total' },
      { label: 'Latency', value: '45ms Ultra-Low' },
      { label: 'Rating', value: 'IPX7 Sweatproof' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Velocity Minimalist Backpack 28L',
    tagline: 'Weatherproof Cordura fabric with laptop sleeve',
    category: 'apparel',
    price: 139,
    originalPrice: 175,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Top Choice',
    isNew: false,
    isTrending: false,
    inStock: true,
    colors: ['#0f172a', '#475569'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Constructed from ballistic Cordura nylon. Features a suspended padded 16-inch laptop pocket, quick-access passport pouch, and anti-theft hidden zippers.',
    specs: [
      { label: 'Capacity', value: '28 Liters' },
      { label: 'Laptop Fit', value: 'Up to 16" MacBook Pro' },
      { label: 'Zipper', value: 'YKK Aquaguard' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Acoustic Studio Soundbar 360',
    tagline: 'Dolby Atmos Spatial Audio with Wireless Subwoofer',
    category: 'audio',
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 96,
    badge: 'Premium',
    isNew: true,
    isTrending: true,
    inStock: true,
    colors: ['#090d16'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Transform your living room into a cinematic theater. Powered by 11 high-performance speakers delivering immersive 7.1.4 Dolby Atmos surround sound.',
    specs: [
      { label: 'Channels', value: '7.1.4 Dolby Atmos' },
      { label: 'Total Output', value: '560W Peak Power' },
      { label: 'Connectivity', value: 'HDMI eARC, AirPlay 2, Spotify Connect' }
    ]
  },
  {
    id: 'prod-8',
    name: 'EvoFit Pro Smart Ring',
    tagline: 'Continuous Sleep & Recovery Biomarker Tracker',
    category: 'wearables',
    price: 219,
    originalPrice: 260,
    rating: 4.7,
    reviewsCount: 167,
    badge: 'New Arrival',
    isNew: true,
    isTrending: true,
    inStock: true,
    colors: ['#1e293b', '#cbd5e1'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Lightweight titanium smart ring designed to track heart rate variability, skin temperature trends, sleep cycles, and daily readiness without screen distraction.',
    specs: [
      { label: 'Battery Life', value: '7 Days on single charge' },
      { label: 'Material', value: 'Medical-Grade Titanium' },
      { label: 'Water Rating', value: '100m Water Resistant' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Creative Director at Studio V',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'The Apex Pro Headphones deliver clarity I haven\'t heard anywhere else. The build quality feels like a luxury Swiss watch. Absolutely unmatched customer service!',
    rating: 5,
    product: 'Apex Pro ANC Headphones'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Tech Lead & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Delivery took less than 24 hours in London. The packaging was pristine, and the Horizon Smart Watch has replaced my mechanical watches completely.',
    rating: 5,
    product: 'Horizon Minimalist Smart Watch'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Architect & Traveler',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'Superb customer support when I had to swap sizes for the AeroTech Parka. Smooth checkout, premium feel, and flawless finish. 10/10 recommendation.',
    rating: 5,
    product: 'AeroTech Waterproof Parka'
  }
];

export const PROMO_BANNER = {
  title: 'MID-SUMMER FLASH SALE',
  subtitle: 'Up to 40% off on flagship audio gear & wearables',
  code: 'LUXE40',
  endTime: new Date(Date.now() + 18 * 3600 * 1000 + 45 * 60 * 1000).toISOString() // 18 hours 45 min from now
};
