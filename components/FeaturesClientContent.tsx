"use client";
import { motion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  BarChart3, 
  Shield, 
  Webhook, 
  Users,
  Zap,
  Target,
  Brain,
  Settings,
  Lock,
  Globe
} from 'lucide-react';
import React from 'react';

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
};

type Props = {
  features: Feature[];
  additionalFeatures: AdditionalFeature[];
};

const iconMap = {
  Bot,
  Workflow,
  BarChart3,
  Shield,
  Webhook,
  Users,
  Zap,
  Target,
  Brain,
  Settings,
  Lock,
  Globe
};

export default function FeaturesClientContent({ features, additionalFeatures }: Props) {
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
            Powerful Features
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover how WorkflowX empowers your team with intelligent automation while keeping humans in control.
          </motion.p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  className="glass p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
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
            Built for Scale
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  className="glass-blue p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-blue-primary">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-medium text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
} 