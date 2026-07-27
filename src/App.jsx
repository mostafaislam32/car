import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  HelpCircle, 
  Car, 
  Check, 
  ArrowRight, 
  SlidersHorizontal,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  MessageSquare
} from 'lucide-react';

// Static Data
import { productsData } from './data/catalog';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import GarageDrawer from './components/GarageDrawer';
import CartDrawer from './components/CartDrawer';
import Logo from './components/Logo';
import CategoryShowcase from './components/CategoryShowcase';
import ThreeDViewer from './components/ThreeDViewer';

export default function App() {
  // Theme State
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // Navigation & UI Panels State
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog', 'warranty', 'support'
  const [isGarageOpen, setIsGarageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter States
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompatibleOnly, setFilterCompatibleOnly] = useState(false);
  const [priceLimit, setPriceLimit] = useState(3000);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Business State: Garage & Cart
  // Pre-seed one vehicle in the garage for a warmer demo experience
  const [garageList, setGarageList] = useState([
    {
      make: "BMW",
      model: "M3",
      year: "2021",
      engine: "3.0L Competition Twin-Turbo I6 (503 HP)"
    }
  ]);
  const [activeVehicle, setActiveVehicle] = useState({
    make: "BMW",
    model: "M3",
    year: "2021",
    engine: "3.0L Competition Twin-Turbo I6 (503 HP)"
  });

  const [cartList, setCartList] = useState([]);

  // Support Ticket Form States
  const [ticketPart, setTicketPart] = useState('');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // --- Garage Actions ---
  const handleAddVehicle = (newVeh) => {
    // Check if vehicle already exists in garage
    const exists = garageList.some(v => 
      v.make === newVeh.make && 
      v.model === newVeh.model && 
      v.year === newVeh.year && 
      v.engine === newVeh.engine
    );
    if (!exists) {
      setGarageList(prev => [...prev, newVeh]);
    }
    setActiveVehicle(newVeh);
  };

  const handleSetActiveVehicle = (veh) => {
    setActiveVehicle(veh);
  };

  const handleDeleteVehicle = (vehToDelete) => {
    const updated = garageList.filter(v => 
      !(v.make === vehToDelete.make && 
        v.model === vehToDelete.model && 
        v.year === vehToDelete.year && 
        v.engine === vehToDelete.engine)
    );
    setGarageList(updated);
    
    // If active vehicle was deleted, reset active vehicle selection
    if (activeVehicle && 
        activeVehicle.make === vehToDelete.make && 
        activeVehicle.model === vehToDelete.model && 
        activeVehicle.year === vehToDelete.year && 
        activeVehicle.engine === vehToDelete.engine) {
      setActiveVehicle(updated.length > 0 ? updated[0] : null);
    }
  };

  // --- Cart Actions ---
  const handleAddToCart = (product, quantity = 1) => {
    setCartList(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    // Open cart drawer for immediate visual confirmation
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (productId, delta) => {
    setCartList(prev => 
      prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (productId) => {
    setCartList(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartList([]);
  };

  // --- Catalog Filter Logic ---
  const brandsList = Array.from(new Set(productsData.map(p => p.brand)));

  const handleBrandFilterChange = (brandName) => {
    setSelectedBrands(prev => 
      prev.includes(brandName) 
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    );
  };

  const filteredProducts = productsData.filter(product => {
    // 1. Category check
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // 2. Search check
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(query);
      const matchBrand = product.brand.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchSku = product.sku.toLowerCase().includes(query);
      if (!matchName && !matchBrand && !matchDesc && !matchSku) {
        return false;
      }
    }

    // 3. Price Limit check
    if (product.price > priceLimit) {
      return false;
    }

    // 4. Brands check
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // 5. Vehicle Compatibility check (if active)
    if (filterCompatibleOnly && activeVehicle) {
      const vehicleKey = `${activeVehicle.make}-${activeVehicle.model}`;
      if (!product.compatibility.includes(vehicleKey)) {
        return false;
      }
    }

    return true;
  });

  // --- Support Ticket Submission ---
  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (ticketPart && ticketDesc) {
      const id = `TK-${Math.floor(Math.random() * 900000) + 100000}`;
      setTicketId(id);
      setTicketSubmitted(true);
      setTicketDesc('');
      setTicketPart('');
    }
  };

  // Cart total count
  const cartTotalQty = cartList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Sticky Header Navigation */}
      <Header 
        activeVehicle={activeVehicle}
        cartCount={cartTotalQty}
        onGarageClick={() => setIsGarageOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchQuery}
        onSearchChange={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        onThemeToggle={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* VIEW 1: PRODUCT CATALOG & MAIN SITE */}
      {activeTab === 'catalog' && (
        <>
          {/* Hero Banner Section */}
          <Hero 
            onSelectVehicle={handleAddVehicle}
            activeVehicle={activeVehicle}
          />

          {/* Trust Badges Banner */}
          <div className="trust-banner">
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <ShieldCheck size={22} />
              </div>
              <div className="trust-text">
                <h4>Premium Quality</h4>
                <p>Hand-picked automotive styling brands</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <Wrench size={22} />
              </div>
              <div className="trust-text">
                <h4>Expert Installation</h4>
                <p>35+ years of shop craftsmanship</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <Clock size={22} />
              </div>
              <div className="trust-text">
                <h4>TikTok Famous</h4>
                <p>Trusted by thousands across Egypt</p>
              </div>
            </div>
          </div>

          {/* Interactive 3D Configurator Showcase */}
          <ThreeDViewer 
            activeVehicle={activeVehicle}
            onSelectVehicle={handleAddVehicle}
            onProductClick={setSelectedProduct}
          />

          {/* Catalog Section Wrapper */}
          <div className="section-wrapper" id="shop-catalog-anchor">
            
            {/* Catalog Section Header */}
            <div className="section-header">
              <div className="section-title-wrap">
                <span className="section-tagline">GOLDEN Inventory</span>
                <h2 className="section-title">Explore <span>Premium Accessories</span></h2>
              </div>
            </div>

            {/* Quick Category Grid Selector */}
            <CategoryGrid 
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            <div style={{ margin: '40px 0' }} />

            {activeCategory === 'all' ? (
              <CategoryShowcase onSelectCategory={setActiveCategory} />
            ) : (
              /* Catalog Main Layout */
              <div className="shop-catalog-layout">
                
                {/* Left Sidebar Filters */}
                <aside className="catalog-sidebar">
                  
                  {/* Search query box */}
                  <div className="filter-group">
                    <h4 className="filter-title">Search Catalog</h4>
                    <input 
                      type="text" 
                      className="filter-search-input" 
                      placeholder="Search keywords, SKU..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Compatibility Filter Toggle */}
                  {activeVehicle && (
                    <div className="sidebar-vehicle-box active-selected animate-fade-in">
                      <div className="sidebar-vehicle-header">
                        <Check size={12} strokeWidth={3} />
                        <span>Vehicle Active</span>
                      </div>
                      <div className="sidebar-vehicle-info">
                        {activeVehicle.year} {activeVehicle.make} {activeVehicle.model}
                      </div>
                      
                      <label className="filter-checkbox-label" style={{ userSelect: 'none' }}>
                        <input 
                          type="checkbox" 
                          className="filter-checkbox"
                          checked={filterCompatibleOnly}
                          onChange={(e) => setFilterCompatibleOnly(e.target.checked)}
                        />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Filter only compatible parts</span>
                      </label>
                    </div>
                  )}

                  {/* Brand Filter */}
                  <div className="filter-group">
                    <h4 className="filter-title">Brands</h4>
                    <div className="filter-options-list">
                      {brandsList.map(brand => (
                        <label key={brand} className="filter-checkbox-label">
                          <input 
                            type="checkbox" 
                            className="filter-checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandFilterChange(brand)}
                          />
                          <span>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Limit Filter */}
                  <div className="filter-group">
                    <div className="filter-title">
                      <span>Max Price</span>
                      <span style={{ color: 'var(--gold-primary)' }}>${priceLimit.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="3000" 
                      step="50"
                      style={{ width: '100%', accentColor: 'var(--red-primary)', cursor: 'pointer' }}
                      value={priceLimit}
                      onChange={(e) => setPriceLimit(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                      <span>$50</span>
                      <span>$3,000</span>
                    </div>
                  </div>
                </aside>

                {/* Right Catalog Grid */}
                <main>
                  <div className="products-layout-header">
                    <div className="results-count">
                      Showing <span>{filteredProducts.length}</span> of <span>{productsData.length}</span> premium parts
                    </div>
                    {/* Quick clear filters if active */}
                    {(searchQuery || activeCategory !== 'all' || selectedBrands.length > 0 || filterCompatibleOnly || priceLimit < 3000) && (
                      <button 
                        style={{ fontSize: '0.85rem', color: 'var(--red-primary)', cursor: 'pointer', fontWeight: 600 }}
                        onClick={() => {
                          setSearchQuery('');
                          setActiveCategory('all');
                          setSelectedBrands([]);
                          setFilterCompatibleOnly(false);
                          setPriceLimit(3000);
                        }}
                      >
                        Reset Filters
                      </button>
                    )}
                  </div>

                  {filteredProducts.length === 0 ? (
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '60px 40px', textAlign: 'center' }}>
                      <SlidersHorizontal size={36} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No matching parts found</h4>
                      <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem' }}>Try clearing filters or selecting another active vehicle to expand compatibility parameters.</p>
                    </div>
                  ) : (
                    <div className="products-grid">
                      {filteredProducts.map(product => (
                        <ProductCard 
                          key={product.id}
                          product={product}
                          activeVehicle={activeVehicle}
                          onClick={() => setSelectedProduct(product)}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  )}
                </main>

              </div>
            )}
          </div>
        </>
      )}

      {/* VIEW 2: WARRANTY GUARANTEE PAGE */}
      {activeTab === 'warranty' && (
        <div className="section-wrapper animate-fade-in" style={{ marginTop: 'var(--header-height)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <span className="section-tagline">GOLDEN Guarantee</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Lifetime <span>Performance Warranty</span></h2>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              We engineering our automotive components to stand the test of time, track abuse, and daily commutes. Every single performance part we make is backed by a full lifetime replacement guarantee.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '60px' }}>
            {/* Warrant Feature 1 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '40px 30px' }}>
              <div className="trust-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', color: 'var(--red-primary)', background: 'rgba(227, 28, 37, 0.06)', border: '1px solid rgba(227, 28, 37, 0.2)', marginBottom: '24px' }}>
                <ShieldCheck size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>Track-Day Coverage</h4>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Unlike other brands, our warranty covers racing track conditions. If your coilovers or brake kit fails during competitive lap testing, we replace it under warranty. No questions asked.
              </p>
            </div>

            {/* Warrant Feature 2 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '40px 30px' }}>
              <div className="trust-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', color: 'var(--gold-primary)', background: 'rgba(230, 185, 48, 0.06)', border: '1px solid rgba(230, 185, 48, 0.2)', marginBottom: '24px' }}>
                <Wrench size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>Direct OEM Fit Guarantee</h4>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Every component is scanned down to micron tolerances using 3D blueprints of corresponding vehicles. We guarantee the mounting bolt positions and sensor clip locations match factory parts perfectly.
              </p>
            </div>

            {/* Warrant Feature 3 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '40px 30px' }}>
              <div className="trust-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', color: 'var(--success)', background: 'rgba(48, 209, 88, 0.06)', border: '1px solid rgba(48, 209, 88, 0.2)', marginBottom: '24px' }}>
                <Check size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>Free Return Shipping</h4>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Filing a warranty replacement claim is simple. We email you a prepaid shipping label to send the original part back, and ship your brand new replacement within 24 hours of approval.
              </p>
            </div>
          </div>

          {/* Warranty Claim Simulation Box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(227, 28, 37, 0.03), rgba(230, 185, 48, 0.03))', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>Need to file a warranty claim?</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>Our tech support engineers are available 24/7. Have your product SKU and order receipt number handy.</p>
            </div>
            <button className="checkout-btn" onClick={() => setActiveTab('support')}>
              <span>Go to Technical Support</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: EXPERT SUPPORT & HELP TICKET PAGE */}
      {activeTab === 'support' && (
        <div className="section-wrapper animate-fade-in" style={{ marginTop: 'var(--header-height)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <span className="section-tagline">GOLDEN Support Hub</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Technical <span>Enthusiast Assistance</span></h2>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Have custom installation questions? Need help setting up CarPlay or choosing the right LED lenses? Connect with our professional tuning specialists.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px' }}>
            {/* Left FAQ & Contact details column */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>Frequently Asked Questions</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>How do I connect wireless Apple CarPlay to the Android Screen?</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: '1.5' }}>
                    Turn on Bluetooth and Wi-Fi on your phone, then pair with the screen's Bluetooth network. Open the "ZLink" or "CarLink" app on the screen's main interface, and CarPlay will launch automatically within a few seconds.
                  </p>
                </div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>Do Laser LED projector lenses require cutting my factory wires?</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: '1.5' }}>
                    No, our Laser LED projector kits come with direct plug-and-play thread adapters (H4/H7/H11) and an integrated Canbus decoder, so they connect directly to your factory bulb harness without cutting or modifying original vehicle wiring.
                  </p>
                </div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>How should I clean and maintain the Alcantara steering wheel wrap?</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: '1.5' }}>
                    Wipe it gently with a damp microfiber cloth and a mild soap solution once a month. Avoid using harsh chemical cleaners or brushing the fibers too aggressively to maintain the premium soft matte texture.
                  </p>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginTop: '40px' }}>Direct Store Outlet</h3>
              <div className="support-contact-card" style={{ background: 'linear-gradient(135deg, rgba(227, 28, 37, 0.02), rgba(230, 185, 48, 0.02))', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--red-primary)', marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', textTransform: 'uppercase' }}>Store Location</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: '1.4' }}>Golden Car Stores, Tawfiqia, Cairo, Egypt</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Phone size={20} style={{ color: 'var(--gold-primary)', marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', textTransform: 'uppercase' }}>Phone Hotline</h5>
                    <a href="tel:+201111926799" style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}>+20 111 192 6799</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MessageSquare size={20} style={{ color: 'var(--success)', marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', textTransform: 'uppercase' }}>WhatsApp Direct</h5>
                    <a href="https://wa.me/201111926799" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      +20 111 192 6799 (Chat Now)
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Mail size={20} style={{ color: 'var(--red-primary)', marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', textTransform: 'uppercase' }}>Email Support</h5>
                    <a href="mailto:Hussein.sayed.hassn91@gmail.com" style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}>Hussein.sayed.hassn91@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right support ticket form */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>Submit a Tech Request</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', marginBottom: '24px' }}>Fill out your issue details. A real racing engineer will get back to you within 2 business hours.</p>

              {ticketSubmitted ? (
                <div className="success-checkout-screen" style={{ padding: '20px 0' }}>
                  <div className="success-icon-wrapper">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h4 className="success-title">Request Lodged!</h4>
                  <p className="success-desc">
                    Support ticket <strong>{ticketId}</strong> has been logged. Our engineering desk is reviewing your vehicle config. Check your email inbox shortly.
                  </p>
                  <button className="checkout-btn" onClick={() => setTicketSubmitted(false)}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="checkout-wizard-container">
                  <div className="checkout-form-group">
                    <label className="checkout-form-label">Active Vehicle</label>
                    <input 
                      type="text" 
                      className="checkout-form-input" 
                      style={{ background: 'rgba(0,0,0,0.5)', cursor: 'not-allowed' }}
                      value={activeVehicle ? `${activeVehicle.year} ${activeVehicle.make} ${activeVehicle.model} (${activeVehicle.engine})` : "No vehicle selected - please select in header"}
                      disabled
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-form-label">Part / SKU under inquiry</label>
                    <select 
                      className="checkout-form-input" 
                      value={ticketPart}
                      onChange={(e) => setTicketPart(e.target.value)}
                      required
                    >
                      <option value="">-- Choose Installed Accessory --</option>
                      <option value="lighting">GOLDEN Laser LED Lenses</option>
                      <option value="screens">GOLDEN Smart Android Screen</option>
                      <option value="seats">GOLDEN Custom Leather Seats</option>
                      <option value="floormats">GOLDEN 7D Luxury Floor Mats</option>
                      <option value="exterior">GOLDEN Trunk Spoiler / Mirror Cover</option>
                    </select>
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-form-label">Issue / Inquiry Description</label>
                    <textarea 
                      className="checkout-form-input" 
                      placeholder="Describe your issue, torque questions, fitment challenges..."
                      rows="5"
                      style={{ resize: 'vertical', fontFamily: 'inherit' }}
                      value={ticketDesc}
                      onChange={(e) => setTicketDesc(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="checkout-btn" style={{ width: '100%' }} disabled={!ticketPart || !ticketDesc}>
                    Submit Support Ticket
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="footer-grid">
          {/* Brand Info column */}
          <div className="footer-brand-column">
            <Logo height={32} />
            <p className="footer-desc">
              Cairo's premier destination for premium automotive accessories and custom tuning since 1990. LED lighting setups, Android screens, custom upholstery, and aerodynamic styling mods.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Youtube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.016-1.074-1.819-2.091-2.092-1.842-.491-9.273-.491-9.273-.491s-7.43 0-9.273.491c-1.017.273-1.819 1.076-2.092 2.092-.491 1.842-.491 5.688-.491 5.688s0 3.846.491 5.688c.273 1.017 1.075 1.82 2.092 2.092 1.842.492 9.273.492 9.273.492s7.431 0 9.273-.492c1.017-.273 1.819-1.075 2.091-2.092.492-1.842.492-5.688.492-5.688s0-3.846-.492-5.688zm-14.195 8.784v-7.896l6.837 3.948-6.837 3.948z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-title">Shop Catalog</h4>
            <div className="footer-links">
              <a href="#shop-catalog-anchor" onClick={() => { setActiveTab('catalog'); setActiveCategory('lighting'); }} className="footer-link-item">LED & Laser Lighting</a>
              <a href="#shop-catalog-anchor" onClick={() => { setActiveTab('catalog'); setActiveCategory('screens'); }} className="footer-link-item">Smart Android Screens</a>
              <a href="#shop-catalog-anchor" onClick={() => { setActiveTab('catalog'); setActiveCategory('seats'); }} className="footer-link-item">Seats & Custom Leather</a>
              <a href="#shop-catalog-anchor" onClick={() => { setActiveTab('catalog'); setActiveCategory('exterior'); }} className="footer-link-item">Exterior Styling Mods</a>
            </div>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="footer-title">Warranty & Fitment</h4>
            <div className="footer-links">
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('warranty')} className="footer-link-item">Warranty Policy</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('support')} className="footer-link-item">Damping Tune Manuals</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setIsGarageOpen(true)} className="footer-link-item">Fitment Verification Index</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('support')} className="footer-link-item">Installation Support Desk</span>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="footer-title">GOLDEN Cairo Outlet</h4>
            <div className="footer-links" style={{ gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--text-grey)' }}>
                <MapPin size={18} style={{ color: 'var(--red-primary)', minWidth: '18px' }} />
                <span>Golden Car Stores, Tawfiqia, Cairo, Egypt</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--text-grey)' }}>
                <Phone size={16} style={{ color: 'var(--gold-primary)', minWidth: '16px' }} />
                <span>+20 111 192 6799</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--text-grey)' }}>
                <Mail size={16} style={{ color: 'var(--red-primary)', minWidth: '16px' }} />
                <span>Hussein.sayed.hassn91@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer legal credits */}
        <div className="footer-bottom">
          <span>&copy; 2026 GOLDEN Automotive Performance Products Inc. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Simulated Checkout Sandbox</a>
          </div>
        </div>
      </footer>

      {/* --- Overlay Sliding Drawers & Modals --- */}
      
      {/* 1. Garage Drawer Panel */}
      <GarageDrawer 
        isOpen={isGarageOpen}
        onClose={() => setIsGarageOpen(false)}
        garageList={garageList}
        activeVehicle={activeVehicle}
        onSetActiveVehicle={handleSetActiveVehicle}
        onAddVehicle={handleAddVehicle}
        onDeleteVehicle={handleDeleteVehicle}
      />

      {/* 2. Shopping Cart & Checkout Panel */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartList={cartList}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        activeVehicle={activeVehicle}
        onClearCart={handleClearCart}
      />

      {/* 3. Product Details Modal Popups */}
      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        activeVehicle={activeVehicle}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
