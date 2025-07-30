import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

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
      
      {/* Header */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Choose the plan that fits your team size and automation needs. All plans include human oversight features.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  plan.popular ? 'glass-turquoise border-2 border-turquoise-primary' : 'glass'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-turquoise-primary to-blue-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-medium ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-medium">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-gray-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-turquoise-primary to-blue-primary text-white hover:shadow-xl hover:shadow-turquoise-primary/40' 
                      : 'border-2 border-aubergine-primary text-aubergine-light hover:bg-aubergine-primary hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-medium">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Start your free trial today and see how WorkflowX can transform your team's productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                Start Free Trial
              </a>
              <a href="/contact" className="btn-secondary w-full sm:w-auto">
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 