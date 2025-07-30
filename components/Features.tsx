'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Assistance',
    description: 'AI that learns your preferences and augments your decision-making process without replacing human judgment and creativity.',
    gradient: 'from-blue-primary to-blue-light',
    delay: 0.2
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows. Our platform adapts to your processes, not the other way around.',
    gradient: 'from-turquoise-primary to-turquoise-light',
    delay: 0.4
  },
  {
    icon: Target,
    title: 'Precise Control',
    description: 'Maintain full oversight and control over automated processes with transparent AI operations and human override capabilities.',
    gradient: 'from-aubergine-primary to-aubergine-light',
    delay: 0.6
  }
];

export default function Features() {
  return (
    <section className="py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Human-Centric Automation
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-blue p-10 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-15 h-15 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 