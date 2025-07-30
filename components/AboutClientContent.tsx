"use client";
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Rocket, 
  Trophy, 
  Globe
} from 'lucide-react';
import React from 'react';
import { getHoverColorClass } from '@/components/utils/colorUtils';

type Value = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

type Milestone = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

type Stat = {
  number: number;
  suffix: string;
  label: string;
};

type Props = {
  values: Value[];
  milestones: Milestone[];
  team: TeamMember[];
  stats: Stat[];
};

const iconMap = {
  Target,
  Eye,
  Heart,
  Rocket,
  Trophy,
  Globe
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

export default function AboutClientContent({ values, milestones, team, stats }: Props) {
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
            About WorkflowX
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            We believe in a future where AI amplifies human potential rather than replacing it. Our mission is to create technology that serves humanity.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              const hoverColorClass = getHoverColorClass(value.gradient);
              return (
                <motion.div
                  key={value.title}
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
                      className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${value.gradient}`}
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
                      {value.title}
                    </motion.h3>
                    <p className="card-description">{value.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/10 to-aubergine-primary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-4xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-gray-medium font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story & Achievements */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {milestones.map((milestone, index) => {
              const IconComponent = iconMap[milestone.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={milestone.title}
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
                    <motion.div 
                      className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${milestone.gradient}`}
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
                      {milestone.title}
                    </motion.h3>
                    <p className="card-description">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass p-6 rounded-xl text-center cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.avatar}
                </motion.div>
                <motion.h3 
                  className="text-lg font-semibold mb-1 text-white"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-turquoise-light font-medium mb-3">{member.role}</p>
                <p className="text-gray-medium text-sm">{member.bio}</p>
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
              Join Our Mission
            </motion.h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Be part of the movement to create AI that serves humanity, not replaces it.
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
                href="/careers" 
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Join Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 