'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      color: ['bg-turquoise-primary', 'bg-blue-primary', 'bg-aubergine-primary'][Math.floor(Math.random() * 3)]
    }));
    setParticles(initialParticles);

    // Create new particles periodically
    const interval = setInterval(() => {
      const newParticle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        color: ['bg-turquoise-primary', 'bg-blue-primary', 'bg-aubergine-primary'][Math.floor(Math.random() * 3)]
      };
      setParticles(prev => [...prev, newParticle]);

      // Remove particle after 6 seconds
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 6000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-blue-primary/30 via-transparent to-turquoise-primary/30 animate-pulse"></div>
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-aubergine-primary/20 via-transparent to-blue-primary/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
} 