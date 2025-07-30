import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import TermsClientContent from '@/components/TermsClientContent';

export const metadata: Metadata = {
  title: 'Terms of Service - WorkflowX',
  description: 'Read WorkflowX terms of service and user agreement.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <TermsClientContent />
      <Footer />
    </main>
  );
} 