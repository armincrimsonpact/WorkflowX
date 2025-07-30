"use client";
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Users, Calendar } from 'lucide-react';
import React from 'react';

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
    scale: 1.02,
    y: -5,
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

export default function PrivacyClientContent() {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </motion.p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-blue-primary to-turquoise-primary"
                  variants={iconHoverVariants}
                  whileHover="hover"
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Data Protection
                </motion.h3>
                <p className="card-description">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-aubergine-primary"
                  variants={iconHoverVariants}
                  whileHover="hover"
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Transparency
                </motion.h3>
                <p className="card-description">
                  We are transparent about what data we collect, how we use it, and who we share it with. You have full control over your information.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-aubergine-primary to-blue-primary"
                  variants={iconHoverVariants}
                  whileHover="hover"
                >
                  <Lock className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  User Control
                </motion.h3>
                <p className="card-description">
                  You can access, update, or delete your personal information at any time through your account settings or by contacting our support team.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Information We Collect
          </motion.h2>
          
          <motion.div 
            className="space-y-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-primary to-turquoise-primary flex-shrink-0"
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Account Information
                  </motion.h3>
                </div>
                <p className="card-description">
                  When you create an account, we collect your name, email address, and company information. This helps us provide personalized service and support.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-aubergine-primary flex-shrink-0"
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Usage Data
                  </motion.h3>
                </div>
                <p className="card-description">
                  We collect information about how you use our platform, including features accessed, time spent, and interactions with our services to improve your experience.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-aubergine-primary to-blue-primary flex-shrink-0"
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Technical Data
                  </motion.h3>
                </div>
                <p className="card-description">
                  We automatically collect technical information such as IP address, browser type, device information, and cookies to ensure security and optimize performance.
                </p>
              </motion.div>
            </motion.div>
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
              Questions About Privacy?
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              If you have any questions about our privacy practices or would like to exercise your rights, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a 
                href="/contact" 
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us
              </motion.a>
              <motion.a 
                href="/legal/terms" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 