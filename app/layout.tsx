import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MouseHover from '@/components/MouseHover';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkflowX - AI Workflows with Human in the Lead',
  description: 'Empower your team with intelligent automation that amplifies human creativity and decision-making. Build workflows where AI serves your vision.',
  keywords: 'AI automation, workflow, human-centric AI, productivity, business automation',
  authors: [{ name: 'WorkflowX Team' }],
  creator: 'WorkflowX',
  publisher: 'WorkflowX',
  robots: 'index, follow',
  metadataBase: new URL('https://workflowx.com'),
  openGraph: {
    title: 'WorkflowX - AI Workflows with Human in the Lead',
    description: 'Empower your team with intelligent automation that amplifies human creativity and decision-making.',
    url: 'https://workflowx.com',
    siteName: 'WorkflowX',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WorkflowX - AI Workflows with Human in the Lead',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkflowX - AI Workflows with Human in the Lead',
    description: 'Empower your team with intelligent automation that amplifies human creativity and decision-making.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseHover />
        {children}
      </body>
    </html>
  );
} 