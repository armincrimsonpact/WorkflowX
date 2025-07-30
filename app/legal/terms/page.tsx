import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Terms of Service - WorkflowX',
  description: 'Read WorkflowX terms of service and user agreement.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Last updated: January 15, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-medium mb-6">
                By accessing and using WorkflowX services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">2. Description of Service</h2>
              <p className="text-gray-medium mb-6">
                WorkflowX provides AI-powered automation services that help businesses streamline their workflows 
                while maintaining human oversight and control. Our services include workflow automation, 
                data processing, and intelligent assistance tools.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">3. User Accounts</h2>
              <p className="text-gray-medium mb-6">
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account or password.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">4. Acceptable Use</h2>
              <p className="text-gray-medium mb-6">
                You agree not to use the service to:
              </p>
              <ul className="text-gray-medium mb-6 list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">5. Intellectual Property</h2>
              <p className="text-gray-medium mb-6">
                The service and its original content, features, and functionality are and will remain the 
                exclusive property of WorkflowX and its licensors. The service is protected by copyright, 
                trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">6. Privacy Policy</h2>
              <p className="text-gray-medium mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the service, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">7. Payment Terms</h2>
              <p className="text-gray-medium mb-6">
                Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable 
                except as expressly stated in these terms. We reserve the right to change our pricing with 30 days notice.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">8. Service Availability</h2>
              <p className="text-gray-medium mb-6">
                We strive to maintain high availability of our services, but we do not guarantee uninterrupted 
                access. We may perform maintenance or updates that temporarily affect service availability.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">9. Data and Security</h2>
              <p className="text-gray-medium mb-6">
                We implement appropriate security measures to protect your data. However, no method of transmission 
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">10. Limitation of Liability</h2>
              <p className="text-gray-medium mb-6">
                In no event shall WorkflowX, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">11. Termination</h2>
              <p className="text-gray-medium mb-6">
                We may terminate or suspend your account and bar access to the service immediately, without prior 
                notice or liability, under our sole discretion, for any reason whatsoever and without limitation, 
                including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">12. Governing Law</h2>
              <p className="text-gray-medium mb-6">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">13. Changes to Terms</h2>
              <p className="text-gray-medium mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">14. Contact Information</h2>
              <p className="text-gray-medium mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-bg-section p-6 rounded-xl">
                <p className="text-gray-medium">
                  <strong>Email:</strong> legal@workflowx.com<br />
                  <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 