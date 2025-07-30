"use client";
import { motion } from 'framer-motion';
import { FileText, Shield, Users, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';
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

export default function TermsClientContent() {
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
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Please read these terms carefully before using our services. By using WorkflowX, you agree to these terms.
          </motion.p>
        </div>
      </section>

      {/* Key Terms */}
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
                  <FileText className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Service Agreement
                </motion.h3>
                <p className="card-description">
                  By using our platform, you agree to use our services in accordance with these terms and applicable laws.
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
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Security & Privacy
                </motion.h3>
                <p className="card-description">
                  We are committed to protecting your data and maintaining the security of our platform. Your privacy is our priority.
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
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="card-title"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  User Responsibilities
                </motion.h3>
                <p className="card-description">
                  Users are responsible for maintaining the security of their accounts and complying with our acceptable use policy.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Service Terms & Conditions
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
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Acceptable Use
                  </motion.h3>
                </div>
                <p className="card-description">
                  You agree to use our services only for lawful purposes and in accordance with these terms. Prohibited activities include unauthorized access, data breaches, and misuse of our platform.
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
                    <Calendar className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Service Availability
                  </motion.h3>
                </div>
                <p className="card-description">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect service availability.
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
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Limitation of Liability
                  </motion.h3>
                </div>
                <p className="card-description">
                  Our liability is limited to the amount you paid for our services. We are not liable for indirect, incidental, or consequential damages arising from your use of our platform.
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
              Questions About Our Terms?
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              If you have any questions about these terms of service or need clarification on any points, please contact our legal team.
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
                href="/legal/privacy" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 