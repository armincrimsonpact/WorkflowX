'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { number: 300, suffix: '%', label: 'Productivity Increase' },
  { number: 50, suffix: 'k+', label: 'Active Users' },
  { number: 99.9, suffix: '%', label: 'Uptime Reliability' },
  { number: 24, suffix: '/7', label: 'Human Support' }
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl font-extrabold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/10 to-aubergine-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-2">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-medium font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 