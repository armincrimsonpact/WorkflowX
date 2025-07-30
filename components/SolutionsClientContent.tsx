"use client";
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Heart,
  DollarSign,
  ShoppingCart,
  Factory,
  GraduationCap,
  Target
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
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Heart,
  DollarSign,
  ShoppingCart,
  Factory,
  GraduationCap,
  Target
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const iconHoverVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function SolutionsClientContent({ solutions, benefits }: Props) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Solutions for Every Industry
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Discover how WorkflowX adapts to your specific industry needs and transforms your business processes.
          </motion.p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={solution.title}
                  className="glass p-8 rounded-2xl cursor-pointer rotating-border"
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full"
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${solution.gradient}`}
                      variants={iconHoverVariants}
                      whileHover="hover"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="card-title"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {solution.title}
                    </motion.h3>
                    <p className="card-description">{solution.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Why Choose WorkflowX?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={benefit.title}
                  className="glass p-6 rounded-xl cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-blue-primary`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2 text-white"
                    whileHover={{ color: "#60A5FA" }}
                    transition={{ duration: 0.2 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <p className="text-gray-medium text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Join thousands of companies already using WorkflowX to streamline their operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a 
                href="/contact" 
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="/features" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 