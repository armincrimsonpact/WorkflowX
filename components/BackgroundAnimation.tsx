'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string; size: number }>>([]);

  useEffect(() => {
    // Create initial particles with varying sizes
    const initialParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      color: ['bg-turquoise-primary', 'bg-blue-primary', 'bg-aubergine-primary', 'bg-purple-500', 'bg-pink-500'][Math.floor(Math.random() * 5)],
      size: Math.random() * 0.6 + 0.3 // Increased opacity for better visibility
    }));
    setParticles(initialParticles);

    // Create new particles periodically
    const interval = setInterval(() => {
      const newParticle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        color: ['bg-turquoise-primary', 'bg-blue-primary', 'bg-aubergine-primary', 'bg-purple-500', 'bg-pink-500'][Math.floor(Math.random() * 5)],
        size: Math.random() * 0.6 + 0.3
      };
      setParticles(prev => [...prev, newParticle]);

      // Remove particle after 8 seconds
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 8000);
    }, 1500); // More frequent particles

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Multi-layered rotating background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary rotating gradient - more prominent */}
        <div 
          className="absolute w-[250%] h-[250%] bg-gradient-to-r from-blue-primary/60 via-turquoise-primary/50 to-aubergine-primary/60 animate-spin"
          style={{ 
            animationDuration: '25s',
            left: '-75%',
            top: '-75%'
          }}
        />
        
        {/* Secondary counter-rotating gradient */}
        <div 
          className="absolute w-[200%] h-[200%] bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-primary/40 animate-spin"
          style={{ 
            animationDuration: '20s',
            animationDirection: 'reverse',
            left: '-50%',
            top: '-50%'
          }}
        />
        
        {/* Tertiary slow rotating gradient */}
        <div 
          className="absolute w-[220%] h-[220%] bg-gradient-to-tl from-turquoise-primary/35 via-aubergine-primary/30 to-purple-500/35 animate-spin"
          style={{ 
            animationDuration: '30s',
            left: '-60%',
            top: '-60%'
          }}
        />
        
        {/* Additional rotating layer for more depth */}
        <div 
          className="absolute w-[180%] h-[180%] bg-gradient-to-bl from-pink-500/25 via-blue-primary/20 to-turquoise-primary/25 animate-spin"
          style={{ 
            animationDuration: '18s',
            animationDirection: 'reverse',
            left: '-40%',
            top: '-40%'
          }}
        />
        
        {/* Radial gradient overlay - less opaque to show more background */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-black/30 to-bg-black/60" />
      </div>

      {/* Enhanced floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color} rounded-full blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.size,
            width: `${Math.random() * 300 + 150}px`, // Larger particles
            height: `${Math.random() * 300 + 150}px`,
          }}
        />
      ))}
    </>
  );
} 