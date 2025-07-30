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

export default function AboutClientContent({ values, milestones, team, stats }: Props) {
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
            About WorkflowX
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We believe in a future where AI amplifies human potential rather than replacing it. Our mission is to create technology that serves humanity.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={value.title}
                  className="glass p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${value.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="card-title">{value.title}</h3>
                  <p className="card-description">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
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
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-medium font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Achievements */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {milestones.map((milestone, index) => {
              const IconComponent = iconMap[milestone.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={milestone.title}
                  className="glass p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${milestone.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="card-title">{milestone.title}</h3>
                  <p className="card-description">{milestone.description}</p>
                </motion.div>
              );
            })}
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-turquoise-light font-medium mb-3">{member.role}</p>
                <p className="text-gray-medium text-sm">{member.bio}</p>
              </motion.div>
            ))}
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
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Be part of the movement to create AI that serves humanity, not replaces it.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                Get Started
              </a>
              <a href="/careers" className="btn-secondary w-full sm:w-auto">
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 