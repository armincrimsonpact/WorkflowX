'use client';

import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  MessageSquare,
  Globe,
  Users,
  Shield
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch with our team for sales inquiries, support, or general questions.',
    details: [
      'Sales: sales@workflowx.com',
      'Support: support@workflowx.com',
      'General: hello@workflowx.com'
    ],
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: MapPin,
    title: 'Global Offices',
    description: 'We have offices around the world to serve our global customer base.',
    details: [
      'San Francisco: 123 Tech Street, CA 94105',
      'Berlin: Unter den Linden 1, 10117',
      'Remote-first with worldwide support'
    ],
    gradient: 'from-turquoise-primary to-turquoise-light'
  },
  {
    icon: Clock,
    title: 'Support Hours',
    description: 'Our team is available to help you whenever you need assistance.',
    details: [
      'Chat Support: 24/7',
      'Phone Support: Mon-Fri 9AM-6PM PST',
      'Emergency: 24/7 for Enterprise customers'
    ],
    gradient: 'from-aubergine-primary to-aubergine-light'
  }
];

const additionalInfo = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team through our live chat feature.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'We provide support in multiple languages and time zones.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our community forum to connect with other users and share best practices.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Your data is protected with enterprise-grade security and encryption.'
  }
];

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ready to transform your workflows? Let's discuss how WorkflowX can help your team achieve more with human-led automation.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-r ${info.gradient}`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                  <p className="text-gray-medium mb-4">{info.description}</p>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-medium">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            More Ways to Connect
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="glass-turquoise p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-turquoise-primary to-blue-primary mx-auto">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                <p className="text-gray-medium text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 