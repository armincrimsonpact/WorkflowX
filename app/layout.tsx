import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkflowX - Human in the Lead AI Automation',
  description: 'Empower your team with intelligent automation that amplifies human creativity. AI workflows where humans lead and technology follows.',
  keywords: 'AI automation, workflow automation, human-centered AI, business process automation',
  authors: [{ name: 'WorkflowX Team' }],
  creator: 'WorkflowX',
  publisher: 'WorkflowX',
  robots: 'index, follow',
  openGraph: {
    title: 'WorkflowX - Human in the Lead AI Automation',
    description: 'Empower your team with intelligent automation that amplifies human creativity.',
    url: 'https://workflowx.com',
    siteName: 'WorkflowX',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkflowX - Human in the Lead AI Automation',
    description: 'Empower your team with intelligent automation that amplifies human creativity.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0a0a',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 