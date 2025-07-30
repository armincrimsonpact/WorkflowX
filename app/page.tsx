import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'WorkflowX - Human in the Lead AI Automation',
  description: 'Empower your team with intelligent automation that amplifies human creativity. AI workflows where humans lead and technology follows.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
} 