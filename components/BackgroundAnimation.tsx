'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2
    }));
    setStars(initialStars);

    // Add new stars periodically
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
      };
      setStars(prev => [...prev, newStar]);

      // Remove star after 10 seconds
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 10000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Space-themed rotating background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary rotating space gradient */}
        <div 
          className="absolute w-[300%] h-[200%] bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-indigo-900/40 animate-spin"
          style={{ 
            animationDuration: '30s',
            left: '-100%',
            top: '-50%'
          }}
        />
        
        {/* Secondary counter-rotating nebula effect */}
        <div 
          className="absolute w-[250%] h-[150%] bg-gradient-to-br from-pink-900/30 via-purple-800/20 to-blue-900/30 animate-spin"
          style={{ 
            animationDuration: '25s',
            animationDirection: 'reverse',
            left: '-75%',
            top: '-25%'
          }}
        />
        
        {/* Tertiary slow rotating cosmic dust */}
        <div 
          className="absolute w-[280%] h-[180%] bg-gradient-to-tl from-cyan-900/25 via-blue-800/20 to-indigo-900/25 animate-spin"
          style={{ 
            animationDuration: '35s',
            left: '-90%',
            top: '-40%'
          }}
        />
        
        {/* Additional cosmic layer */}
        <div 
          className="absolute w-[200%] h-[120%] bg-gradient-to-bl from-violet-900/20 via-purple-800/15 to-blue-900/20 animate-spin"
          style={{ 
            animationDuration: '20s',
            animationDirection: 'reverse',
            left: '-50%',
            top: '-10%'
          }}
        />
        
        {/* Stars overlay */}
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
                opacity: star.opacity,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Space atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>
    </>
  );
} 