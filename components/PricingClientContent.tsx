"use client";
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import React from 'react';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  gradient: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  plans: Plan[];
  faqs: FAQ[];
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

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export default function PricingClientContent({ plans, faqs }: Props) {
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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Choose the plan that fits your team size and automation needs. All plans include human oversight features.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-2xl cursor-pointer ${
                  plan.popular ? 'glass-turquoise border-2 border-turquoise-primary' : 'glass'
                }`}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                custom={index}
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full"
                >
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-turquoise-primary to-blue-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}
                  <div className="text-center mb-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-2 text-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {plan.name}
                    </motion.h3>
                    <div className="mb-4">
                      <motion.span 
                        className="text-4xl font-bold gradient-text"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-gray-medium ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-medium">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a 
                    href="/contact" 
                    className={`w-full text-center py-4 px-6 rounded-xl font-semibold block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-turquoise-primary to-blue-primary text-white hover:shadow-xl hover:shadow-turquoise-primary/40' 
                        : 'border-2 border-aubergine-primary text-aubergine-light hover:bg-aubergine-primary hover:text-white'
                    }`}
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="glass p-6 rounded-xl cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-lg font-semibold mb-3 text-white"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.question}
                </motion.h3>
                <p className="text-gray-medium">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Start your free trial today and see how WorkflowX can transform your team's productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a 
                href="/contact" 
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Start Free Trial
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}