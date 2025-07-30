import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import FeaturesClientContent from '@/components/FeaturesClientContent';

export const metadata: Metadata = {
  title: 'Features - WorkflowX',
  description: 'Discover powerful features that empower your team with intelligent automation while keeping humans in control.',
};

const features = [
  {
    icon: 'Bot',
    title: 'AI-Powered Automation',
    description: 'Advanced machine learning algorithms that understand your business processes and automate repetitive tasks while learning from human feedback.',
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: 'Workflow',
    title: 'Workflow Builder',
    description: 'Intuitive drag-and-drop interface for creating complex workflows. No coding required - design automation flows that match your thinking.',
    gradient: 'from-turquoise-primary to-turquoise-light'
  },
  {
    icon: 'BarChart3',
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards and reports that provide insights into your automated processes and team productivity metrics.',
    gradient: 'from-aubergine-primary to-aubergine-light'
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and advanced access controls to keep your data safe and secure.',
    gradient: 'from-green-500 to-green-400'
  },
  {
    icon: 'Webhook',
    title: 'API Integrations',
    description: 'Connect with 1000+ apps and services. RESTful APIs and webhooks for custom integrations and data synchronization.',
    gradient: 'from-purple-500 to-purple-400'
  },
  {
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools, role-based permissions, and shared workspaces for seamless team coordination.',
    gradient: 'from-orange-500 to-orange-400'
  }
];

const additionalFeatures = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Process automation in milliseconds with our optimized AI engine.'
  },
  {
    icon: 'Target',
    title: 'Precision Control',
    description: 'Fine-tune every aspect of your automation with granular controls.'
  },
  {
    icon: 'Brain',
    title: 'Smart Learning',
    description: 'AI that continuously improves based on your team\'s feedback and patterns.'
  },
  {
    icon: 'Settings',
    title: 'Customizable',
    description: 'Adapt the platform to your unique business processes and requirements.'
  },
  {
    icon: 'Lock',
    title: 'Privacy First',
    description: 'Your data stays yours with end-to-end encryption and privacy controls.'
  },
  {
    icon: 'Globe',
    title: 'Global Scale',
    description: 'Deploy automation across multiple regions and time zones seamlessly.'
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <FeaturesClientContent features={features} additionalFeatures={additionalFeatures} />
      <Footer />
    </main>
  );
} 