import React from 'react';

export default function Logo({ className = '', height = 40 }) {
  return (
    <div 
      className={`golden-logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        userSelect: 'none'
      }}
    >
      {/* Sleek, professional geometric automotive crest */}
      <svg 
        height={height}
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Outer shield outline - Candy Red */}
        <path 
          d="M 40 8 L 68 20 L 68 46 C 68 62 40 73 40 73 C 40 73 12 62 12 46 L 12 20 Z" 
          stroke="var(--red-primary)" 
          strokeWidth="5.5" 
          strokeLinejoin="round" 
        />
        
        {/* Inner gold crest backdrop */}
        <path 
          d="M 40 18 L 58 25 L 58 45 C 58 56 40 64 40 64 C 40 64 22 56 22 45 L 22 25 Z" 
          fill="var(--gold-primary)" 
          opacity="0.1" 
        />

        {/* Minimalist sharp racing G emblem */}
        <path 
          d="M 50 30 H 33 V 50 H 50 V 40 H 41" 
          stroke="var(--gold-primary)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      
      {/* Clean luxury brand text layout */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.0' }}>
        <span 
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: `${height * 0.45}px`, 
            fontWeight: '900', 
            letterSpacing: '1.5px', 
            color: 'var(--text-white)',
            textTransform: 'uppercase'
          }}
        >
          GOLDEN
        </span>
        <span 
          style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: `${height * 0.18}px`, 
            fontWeight: '800', 
            letterSpacing: '3.5px', 
            color: 'var(--red-primary)',
            textTransform: 'uppercase',
            marginTop: '3px'
          }}
        >
          Performance
        </span>
      </div>
    </div>
  );
}
