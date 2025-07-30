'use client';

import Link from 'next/link';

const footerSections = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/pricing', label: 'Pricing' },
      { href: '#', label: 'API Documentation' },
      { href: '#', label: 'System Status' },
    ]
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press Kit' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Investors' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Help Center' },
      { href: '#', label: 'Community' },
      { href: '#', label: 'Webinars' },
      { href: '#', label: 'Case Studies' },
      { href: '#', label: 'Templates' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal/privacy', label: 'Privacy Policy' },
      { href: '/legal/terms', label: 'Terms of Service' },
      { href: '#', label: 'Security' },
      { href: '#', label: 'GDPR' },
      { href: '/contact', label: 'Contact' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="py-16 px-5 border-t border-white/10 bg-bg-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-5">WorkflowX</div>
            <p className="text-gray-medium mb-5 leading-relaxed">
              Empowering human potential through intelligent automation. AI workflows where humans lead and technology follows.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-5 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-medium hover:text-turquoise-light transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 text-center text-gray-medium">
          <p>&copy; 2025 WorkflowX. All rights reserved. Human in the Lead™ is a trademark of WorkflowX Inc.</p>
        </div>
      </div>
    </footer>
  );
} 