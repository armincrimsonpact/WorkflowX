'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass p-16 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-lg md:text-xl text-gray-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who have revolutionized their productivity while keeping humans at the center of their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Start Free Trial
            </Link>
            <Link href="/pricing" className="btn-secondary w-full sm:w-auto">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 