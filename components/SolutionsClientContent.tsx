"use client";
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Factory, 
  GraduationCap,
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import React from 'react';

type Solution = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  solutions: Solution[];
  benefits: Benefit[];
};

const iconMap = {
  Building2,
  Heart,
  DollarSign,
  ShoppingCart,
  Factory,
  GraduationCap,
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  TrendingUp
};

export default function SolutionsClientContent({ solutions, benefits }: Props) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Industry Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Tailored automation solutions for every industry, designed to enhance human capabilities and drive business growth.
          </motion.p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={solution.title}
                  className="glass p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${solution.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="card-title">{solution.title}</h3>
                  <p className="card-description">{solution.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Why Choose WorkflowX
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={benefit.title}
                  className="glass-turquoise p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-blue-primary">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-medium text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="glass p-16 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Let our experts help you design the perfect automation solution for your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                Schedule a Demo
              </a>
              <a href="/pricing" className="btn-secondary w-full sm:w-auto">
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 