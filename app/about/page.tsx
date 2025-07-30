import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Rocket, 
  Trophy, 
  Globe,
  Users,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - WorkflowX',
  description: 'Learn about WorkflowX mission to democratize AI automation while ensuring humans remain at the center of every decision.',
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize AI automation while ensuring humans remain at the center of every decision. We build tools that enhance human creativity and productivity.',
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where intelligent automation empowers every professional to focus on what matters most - creativity, strategy, and human connection.',
    gradient: 'from-turquoise-primary to-turquoise-light'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Human-first design, transparent AI operations, ethical automation practices, and continuous learning from our community.',
    gradient: 'from-aubergine-primary to-aubergine-light'
  }
];

const milestones = [
  {
    icon: Rocket,
    title: 'Our Story',
    description: 'Founded by a team of AI researchers and business leaders who experienced firsthand the need for human-centric automation solutions.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: 'Our Achievements',
    description: 'Trusted by 50,000+ professionals worldwide, recognized as a leader in ethical AI, and committed to responsible innovation.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Helping organizations across 50+ countries transform their workflows while maintaining human dignity and decision-making authority.',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former AI researcher at Stanford, passionate about human-centered technology.',
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer with 15+ years building scalable automation systems.',
    avatar: '👨‍💻'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of AI Ethics',
    bio: 'PhD in AI Safety, ensuring our automation respects human values.',
    avatar: '👩‍🔬'
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    bio: 'Product leader with experience at Slack and Notion, focused on user experience.',
    avatar: '👨‍💼'
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every customer achieves their automation goals.',
    avatar: '👩‍💼'
  },
  {
    name: 'Alex Johnson',
    role: 'VP of Engineering',
    bio: 'Building robust, scalable systems that power human productivity.',
    avatar: '👨‍💻'
  }
];

const stats = [
  { number: 50, suffix: 'k+', label: 'Active Users' },
  { number: 50, suffix: '+', label: 'Countries Served' },
  { number: 99.9, suffix: '%', label: 'Uptime' },
  { number: 24, suffix: '/7', label: 'Support' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      
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
            {values.map((value, index) => (
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
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </motion.div>
            ))}
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
            {milestones.map((milestone, index) => (
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
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="card-title">{milestone.title}</h3>
                <p className="card-description">{milestone.description}</p>
              </motion.div>
            ))}
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

      <Footer />
    </main>
  );
} 