import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Privacy Policy - WorkflowX',
  description: 'Learn how WorkflowX protects your privacy and handles your personal data.',
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              <h2 className="text-2xl font-bold mb-6 text-white">1. Information We Collect</h2>
              <p className="text-gray-medium mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="text-gray-medium mb-6 list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Company and job title information</li>
                <li>Payment and billing information</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-medium mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-gray-medium mb-6 list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">3. Information Sharing</h2>
              <p className="text-gray-medium mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except as described in this policy. We may share your information with:
              </p>
              <ul className="text-gray-medium mb-6 list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">4. Data Security</h2>
              <p className="text-gray-medium mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. 
                This includes encryption, access controls, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">5. Your Rights</h2>
              <p className="text-gray-medium mb-6">
                You have the right to:
              </p>
              <ul className="text-gray-medium mb-6 list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">6. Cookies and Tracking</h2>
              <p className="text-gray-medium mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and provide personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">7. International Transfers</h2>
              <p className="text-gray-medium mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data in accordance with this policy.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">8. Children's Privacy</h2>
              <p className="text-gray-medium mb-6">
                Our services are not intended for children under 13. We do not knowingly collect 
                personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">9. Changes to This Policy</h2>
              <p className="text-gray-medium mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-white mt-12">10. Contact Us</h2>
              <p className="text-gray-medium mb-6">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-bg-section p-6 rounded-xl">
                <p className="text-gray-medium">
                  <strong>Email:</strong> privacy@workflowx.com<br />
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