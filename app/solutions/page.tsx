import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import SolutionsClientContent from '@/components/SolutionsClientContent';

export const metadata: Metadata = {
  title: 'Solutions - WorkflowX',
  description: 'Tailored automation solutions for every industry, designed to enhance human capabilities and drive business growth.',
};

const solutions = [
  {
    icon: 'Building2',
    title: 'Enterprise Operations',
    description: 'Streamline complex business processes, automate document workflows, and enhance decision-making with AI-powered insights for large organizations.',
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: 'Heart',
    title: 'Healthcare',
    description: 'Automate patient data management, appointment scheduling, and administrative tasks while maintaining HIPAA compliance and human oversight.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: 'DollarSign',
    title: 'Financial Services',
    description: 'Enhance risk assessment, automate compliance reporting, and streamline customer onboarding with intelligent automation solutions.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description: 'Optimize inventory management, automate customer service responses, and personalize shopping experiences with AI-driven recommendations.',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    icon: 'Factory',
    title: 'Manufacturing',
    description: 'Improve quality control, optimize supply chain operations, and predictive maintenance scheduling with intelligent automation.',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    icon: 'GraduationCap',
    title: 'Education',
    description: 'Automate administrative tasks, personalize learning experiences, and enhance student engagement while supporting educators.',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const benefits = [
  {
    icon: 'Users',
    title: 'Human-Centric Design',
    description: 'Every solution is designed with humans at the center, ensuring AI serves your team, not replaces it.'
  },
  {
    icon: 'Globe',
    title: 'Global Compliance',
    description: 'Built-in compliance with international regulations including GDPR, HIPAA, SOX, and industry-specific standards.'
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 Type II compliance, end-to-end encryption, and advanced access controls.'
  },
  {
    icon: 'Zap',
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months, with our pre-built industry templates and quick-start guides.'
  },
  {
    icon: 'Target',
    title: 'Custom Integration',
    description: 'Seamlessly integrate with your existing systems and workflows without disrupting current operations.'
  },
  {
    icon: 'TrendingUp',
    title: 'Scalable Growth',
    description: 'Start small and scale as you grow, with flexible plans that adapt to your business needs.'
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <SolutionsClientContent solutions={solutions} benefits={benefits} />
      <Footer />
    </main>
  );
} 