import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Car, ChevronDown, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

export default function Header({ 
  activeVehicle, 
  cartCount, 
  onGarageClick, 
  onCartClick,
  searchTerm,
  onSearchChange,
  activeTab,
  setActiveTab,
  theme,
  onThemeToggle
}) {
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to apply sticky shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo */}
      <div className="header-logo-container" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('catalog')}>
        <Logo height={scrolled ? 34 : 42} />
      </div>

      {/* Nav Menu */}
      <nav className="nav-links">
        <span 
          className={`nav-item ${activeTab === 'catalog' ? 'active' : ''}`}
          onClick={() => setActiveTab('catalog')}
        >
          Catalog
        </span>
        <span 
          className={`nav-item ${activeTab === 'warranty' ? 'active' : ''}`}
          onClick={() => setActiveTab('warranty')}
        >
          Warranty
        </span>
        <span 
          className={`nav-item ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => setActiveTab('support')}
        >
          Tech Support
        </span>
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Dynamic YMM Active Vehicle Status */}
        <button 
          className={`garage-status-btn ${activeVehicle ? 'active-selected' : ''}`}
          onClick={onGarageClick}
        >
          <Car size={16} />
          {activeVehicle ? (
            <span>{activeVehicle.year} {activeVehicle.make} {activeVehicle.model}</span>
          ) : (
            <span>Select Vehicle</span>
          )}
          <ChevronDown size={14} style={{ opacity: 0.7 }} />
        </button>

        {/* My Garage Quick Button */}
        <button 
          className="action-btn garage-trigger" 
          onClick={onGarageClick}
          title="My Garage"
        >
          <Car size={20} />
        </button>

        {/* Cart Quick Button */}
        <button 
          className="action-btn cart-trigger" 
          onClick={onCartClick}
          title="Shopping Cart"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
        </button>

        {/* Theme Toggle Button */}
        <button 
          className="action-btn theme-trigger" 
          onClick={onThemeToggle}
          title={theme === 'dark' ? "Light Mode" : "Dark Mode"}
          style={{ transition: 'var(--transition-fast)' }}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
