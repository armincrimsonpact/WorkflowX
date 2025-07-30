import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import PrivacyClientContent from '@/components/PrivacyClientContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - WorkflowX',
  description: 'Learn how WorkflowX protects your privacy and handles your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <PrivacyClientContent />
      <Footer />
    </main>
  );
} 