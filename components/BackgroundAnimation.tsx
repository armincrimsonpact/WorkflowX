'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Create initial stars - reduced for less distraction
    const initialStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5, // Smaller stars
      opacity: Math.random() * 0.4 + 0.1 // Lower opacity
    }));
    setStars(initialStars);

    // Add new stars periodically - less frequent
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1
      };
      setStars(prev => [...prev, newStar]);

      // Remove star after 10 seconds
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 10000);
    }, 2000); // Less frequent star generation

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Prominent rotating background - the main attraction */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary large rotating gradient - MAIN ATTRACTION */}
        <div 
          className="absolute w-[400%] h-[300%] bg-gradient-to-r from-blue-600/80 via-purple-600/70 to-indigo-600/80 animate-spin"
          style={{ 
            animationDuration: '25s',
            left: '-150%',
            top: '-100%'
          }}
        />
        
        {/* Secondary prominent counter-rotating gradient */}
        <div 
          className="absolute w-[350%] h-[250%] bg-gradient-to-br from-pink-600/70 via-purple-500/60 to-blue-600/70 animate-spin"
          style={{ 
            animationDuration: '20s',
            animationDirection: 'reverse',
            left: '-125%',
            top: '-75%'
          }}
        />
        
        {/* Third prominent rotating layer */}
        <div 
          className="absolute w-[380%] h-[280%] bg-gradient-to-tl from-cyan-600/65 via-blue-500/55 to-indigo-600/65 animate-spin"
          style={{ 
            animationDuration: '30s',
            left: '-140%',
            top: '-90%'
          }}
        />
        
        {/* Fourth prominent layer */}
        <div 
          className="absolute w-[300%] h-[200%] bg-gradient-to-bl from-violet-600/60 via-purple-500/50 to-blue-600/60 animate-spin"
          style={{ 
            animationDuration: '18s',
            animationDirection: 'reverse',
            left: '-100%',
            top: '-50%'
          }}
        />
        
        {/* Fifth layer for extra depth */}
        <div 
          className="absolute w-[320%] h-[220%] bg-gradient-to-tr from-emerald-600/55 via-teal-500/45 to-cyan-600/55 animate-spin"
          style={{ 
            animationDuration: '22s',
            left: '-110%',
            top: '-60%'
          }}
        />
        
        {/* Stars overlay - reduced for less distraction */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity * 0.6, // Reduced opacity
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Minimal atmosphere overlay - reduced to show more of the rotating gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
      </div>
    </>
  );
} 