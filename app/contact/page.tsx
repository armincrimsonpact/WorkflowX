import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - WorkflowX',
  description: 'Get in touch with our team to learn how WorkflowX can transform your business processes with human-centric AI automation.',
};

const contactInfo = [
  {
    icon: '📍',
    title: 'Office Location',
    details: '123 Innovation Drive, San Francisco, CA 94105',
    description: 'Visit our headquarters in the heart of Silicon Valley'
  },
  {
    icon: '📧',
    title: 'Email Support',
    details: 'hello@workflowx.com',
    description: 'Get quick responses from our expert team'
  },
  {
    icon: '📞',
    title: 'Phone Support',
    details: '+1 (555) 123-4567',
    description: 'Available Monday-Friday, 9AM-6PM PST'
  },
  {
    icon: '💬',
    title: 'Live Chat',
    details: 'Available 24/7',
    description: 'Instant support through our chat system'
  }
];

const faqs = [
  {
    question: 'How quickly can we get started with WorkflowX?',
    answer: 'Most teams can get up and running within 24 hours. We provide onboarding support and can have your first workflow automated within a week.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive documentation and training resources.'
  },
  {
    question: 'Can WorkflowX integrate with our existing tools?',
    answer: 'Yes! We support 1000+ integrations including Slack, Salesforce, HubSpot, Zapier, and custom API connections.'
  },
  {
    question: 'Is our data secure with WorkflowX?',
    answer: 'Absolutely. We use bank-level encryption, are SOC 2 Type II compliant, and follow GDPR and HIPAA standards. Your data never leaves our secure infrastructure.'
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
          <h1 className="page-title">Get in Touch</h1>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Ready to transform your workflows? Our team is here to help you get started with human-centric AI automation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
                <p className="text-gray-medium mb-8">
                  We're here to help you succeed with AI automation. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="glass p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                        <p className="text-turquoise-light font-medium mb-1">{info.details}</p>
                        <p className="text-gray-medium text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 