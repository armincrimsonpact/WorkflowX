'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-20">
      <div className="text-center max-w-6xl">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AI Workflows with<br />
          <span className="gradient-text">Human in the Lead</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-medium mb-10 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Empower your team with intelligent automation that amplifies human creativity and decision-making. 
          Build workflows where AI serves your vision, not the other way around.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            Start Building
          </Link>
          <Link href="/features" className="btn-secondary w-full sm:w-auto">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 