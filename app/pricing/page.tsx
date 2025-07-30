import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import PricingClientContent from '@/components/PricingClientContent';

export const metadata: Metadata = {
  title: 'Pricing - WorkflowX',
  description: 'Simple, transparent pricing for WorkflowX. Choose the plan that fits your team size and automation needs.',
};

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per user/month',
    description: 'Perfect for small teams getting started with automation',
    features: [
      'Up to 100 automated tasks/month',
      'Basic workflow builder',
      '5 integrations',
      'Email support',
      'Human oversight dashboard',
      'Basic analytics',
      'Community forum access'
    ],
    popular: false,
    gradient: 'from-gray-500 to-gray-400'
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per user/month',
    description: 'Ideal for growing teams with advanced automation needs',
    features: [
      'Unlimited automated tasks',
      'Advanced workflow builder',
      'Unlimited integrations',
      'Priority support',
      'Advanced analytics',
      'Team collaboration tools',
      'Custom AI training',
      'API access',
      'Advanced security features',
      'Dedicated success manager'
    ],
    popular: true,
    gradient: 'from-turquoise-primary to-blue-primary'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact for pricing',
    description: 'Tailored solutions for large organizations with complex needs',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 phone support',
      'On-premise deployment',
      'Advanced security features',
      'Custom SLA',
      'White-label options',
      'Custom training programs',
      'Dedicated infrastructure'
    ],
    popular: false,
    gradient: 'from-aubergine-primary to-purple-500'
  }
];

const faqs = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial for all Professional plan features. No credit card required to start your trial.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.'
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time with no penalties. Your access continues until the end of your billing period.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Starter plans include email support, Professional plans include priority support, and Enterprise plans include 24/7 phone support with dedicated account managers.'
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <PricingClientContent plans={plans} faqs={faqs} />
      <Footer />
    </main>
  );
} 