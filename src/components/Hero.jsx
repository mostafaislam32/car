import React, { useState, useEffect } from 'react';
import { Car, ChevronRight, Sparkles } from 'lucide-react';
import { vehiclesData } from '../data/catalog';
import heroBg from '../assets/hero_banner.jpg';

export default function Hero({ onSelectVehicle, activeVehicle }) {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  
  // Reset child dropdowns on parent changes
  useEffect(() => {
    setSelectedModel('');
    setSelectedEngine('');
  }, [selectedMake]);

  useEffect(() => {
    setSelectedEngine('');
  }, [selectedModel]);

  const availableModels = selectedMake ? vehiclesData.models[selectedMake] : [];
  const engineKey = `${selectedMake}-${selectedModel}`;
  const availableEngines = (selectedMake && selectedModel) ? vehiclesData.engines[engineKey] : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedMake && selectedModel && selectedYear && selectedEngine) {
      onSelectVehicle({
        make: selectedMake,
        model: selectedModel,
        year: selectedYear,
        engine: selectedEngine
      });
      // Clear selector after adding
      setSelectedMake('');
      setSelectedModel('');
      setSelectedYear('');
      setSelectedEngine('');
    }
  };

  const isFormValid = selectedMake && selectedModel && selectedYear && selectedEngine;

  return (
    <section className="hero-section">
      {/* Background with glowing red-gold ambiance */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="hero-content">
        {/* Dynamic Badge */}
        <div className="hero-subtitle animate-fade-in">
          <Sparkles size={14} className="glow-text-gold" />
          <span>GOLDEN Engineered Precision</span>
        </div>

        {/* Catchy Title */}
        <h1 className="hero-title animate-slide-up">
          Automotive Performance <br />
          <span>Without Compromise</span>
        </h1>

        {/* Detailed Description */}
        <p className="hero-description animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Explore premium Laser LED lighting, smart Android screens, custom-fit leather seat covers, luxury floor mats, and body modifications. Est. 1990 in Cairo.
        </p>

        {/* Interactive YMM Selector Box */}
        <div className="ymm-selector-box animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="ymm-title">
            <Car size={18} />
            <span>Select Your <span>Vehicle</span> to check fitment</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="ymm-grid">
            {/* Make Select */}
            <div className="ymm-select-container">
              <select 
                className="ymm-select"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">1. Select Make</option>
                {vehiclesData.makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {/* Model Select */}
            <div className="ymm-select-container">
              <select 
                className="ymm-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedMake}
              >
                <option value="">2. Select Model</option>
                {availableModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Year Select */}
            <div className="ymm-select-container">
              <select 
                className="ymm-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                disabled={!selectedModel}
              >
                <option value="">3. Select Year</option>
                {vehiclesData.years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Engine Select */}
            <div className="ymm-select-container">
              <select 
                className="ymm-select"
                value={selectedEngine}
                onChange={(e) => setSelectedEngine(e.target.value)}
                disabled={!selectedModel}
              >
                <option value="">4. Select Engine</option>
                {availableEngines.map(engine => (
                  <option key={engine} value={engine}>{engine}</option>
                ))}
              </select>
            </div>
          </form>

          {/* Large dynamic submission bar */}
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            <button 
              type="button" 
              className="ymm-action-btn" 
              style={{ width: '100%', maxWidth: '300px' }}
              onClick={handleSearchSubmit}
              disabled={!isFormValid}
            >
              <span>Add Vehicle to Garage</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
