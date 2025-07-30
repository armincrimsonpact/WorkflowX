import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
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

export const metadata: Metadata = {
  title: 'Features - WorkflowX',
  description: 'Discover powerful features that empower your team with intelligent automation while keeping humans in control.',
};

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Advanced machine learning algorithms that understand your business processes and automate repetitive tasks while learning from human feedback.',
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: Workflow,
    title: 'Workflow Builder',
    description: 'Intuitive drag-and-drop interface for creating complex workflows. No coding required - design automation flows that match your thinking.',
    gradient: 'from-turquoise-primary to-turquoise-light'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards and reports that provide insights into your automated processes and team productivity metrics.',
    gradient: 'from-aubergine-primary to-aubergine-light'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and advanced access controls to keep your data safe and secure.',
    gradient: 'from-green-500 to-green-400'
  },
  {
    icon: Webhook,
    title: 'API Integrations',
    description: 'Connect with 1000+ apps and services. RESTful APIs and webhooks for custom integrations and data synchronization.',
    gradient: 'from-purple-500 to-purple-400'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools, role-based permissions, and shared workspaces for seamless team coordination.',
    gradient: 'from-orange-500 to-orange-400'
  }
];

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process automation in milliseconds with our optimized AI engine.'
  },
  {
    icon: Target,
    title: 'Precision Control',
    description: 'Fine-tune every aspect of your automation with granular controls.'
  },
  {
    icon: Brain,
    title: 'Smart Learning',
    description: 'AI that continuously improves based on your team\'s feedback and patterns.'
  },
  {
    icon: Settings,
    title: 'Customizable',
    description: 'Adapt the platform to your unique business processes and requirements.'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data stays yours with end-to-end encryption and privacy controls.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy automation across multiple regions and time zones seamlessly.'
  }
];

export default function FeaturesPage() {
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
            {features.map((feature, index) => (
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
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </motion.div>
            ))}
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
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-blue p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-blue-primary">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-medium text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 