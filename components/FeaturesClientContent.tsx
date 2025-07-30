"use client";
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Globe,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Webhook,
  Target,
  Brain,
  Settings,
  Lock
} from 'lucide-react';
import React from 'react';
import { getHoverColorClass } from '@/components/utils/colorUtils';

type Feature = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

type AdditionalFeature = {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  gradient?: string;
};

type Props = {
  features: Feature[];
  additionalFeatures: AdditionalFeature[];
};

const iconMap = {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Lightbulb,
  Globe,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Webhook,
  Target,
  Brain,
  Settings,
  Lock
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

export default function FeaturesClientContent({ features, additionalFeatures }: Props) {
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
            Powerful Features for Modern Teams
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Discover the tools and capabilities that make WorkflowX the ultimate solution for AI-powered workflow automation.
          </motion.p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              const hoverColorClass = getHoverColorClass(feature.gradient);
              return (
                <motion.div
                  key={feature.title}
                  className={`glass p-8 rounded-2xl cursor-pointer ${hoverColorClass}`}
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
                      className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}
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
                      {feature.title}
                    </motion.h3>
                    <p className="card-description">{feature.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Advanced Capabilities
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {additionalFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  className="glass p-8 rounded-2xl cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.gradient || 'from-blue-primary/5 to-aubergine-primary/5'} flex-shrink-0`}
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
                        {feature.title}
                      </motion.h3>
                    </div>
                    <p className="card-description mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.li 
                          key={benefit}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 + benefitIndex * 0.05 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
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
              Ready to Experience the Future?
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Start using WorkflowX today and transform how your team works with AI-powered automation.
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
                href="/pricing" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Pricing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 