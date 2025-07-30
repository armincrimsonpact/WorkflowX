import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Careers - WorkflowX',
  description: 'Join our mission to create AI that serves humanity. Explore career opportunities at WorkflowX and help us build the future of human-centric automation.',
};

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of our AI automation engine, focusing on human-centric design and ethical AI practices.',
    requirements: [
      'Strong background in machine learning and AI',
      'Experience with Python, TensorFlow, and PyTorch',
      'Understanding of ethical AI principles',
      'Experience with large language models'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work arrangements',
      'Health, dental, and vision coverage',
      'Professional development budget'
    ]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Drive product strategy and roadmap for our AI automation platform, ensuring human-centric design principles.',
    requirements: [
      'Experience in B2B SaaS product management',
      'Strong analytical and user research skills',
      'Understanding of AI/ML technologies',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Health, dental, and vision coverage',
      'Professional development budget'
    ]
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Design intuitive interfaces for AI automation tools, ensuring human control and transparency.',
    requirements: [
      'Strong portfolio of B2B SaaS designs',
      'Experience with Figma and design systems',
      'Understanding of AI/ML user experience',
      'Human-centered design approach'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work arrangements',
      'Health, dental, and vision coverage',
      'Professional development budget'
    ]
  },
  {
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Help customers understand and implement WorkflowX solutions, focusing on business value and human oversight.',
    requirements: [
      'Technical background with sales experience',
      'Understanding of enterprise software',
      'Experience with AI/ML technologies',
      'Strong presentation skills'
    ],
    benefits: [
      'Competitive salary and commission',
      'Remote-first culture',
      'Health, dental, and vision coverage',
      'Professional development budget'
    ]
  }
];

const companyValues = [
  {
    title: 'Human-First AI',
    description: 'We believe AI should amplify human capabilities, not replace them. Every feature we build puts humans in control.',
    icon: '🤝'
  },
  {
    title: 'Ethical Innovation',
    description: 'We\'re committed to developing AI that\'s transparent, fair, and beneficial to society.',
    icon: '⚖️'
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of growth and learning, encouraging team members to develop new skills and knowledge.',
    icon: '📚'
  },
  {
    title: 'Diverse Perspectives',
    description: 'We value diverse backgrounds and perspectives, believing they lead to better products and decisions.',
    icon: '🌍'
  }
];

const benefits = [
  {
    category: 'Health & Wellness',
    items: [
      'Comprehensive health, dental, and vision coverage',
      'Mental health support and counseling',
      'Gym membership and wellness programs',
      'Flexible work arrangements'
    ]
  },
  {
    category: 'Professional Growth',
    items: [
      'Annual learning and development budget',
      'Conference attendance and training',
      'Mentorship programs',
      'Career development planning'
    ]
  },
  {
    category: 'Work-Life Balance',
    items: [
      'Unlimited PTO and flexible hours',
      'Remote work options',
      'Parental leave and family support',
      'Regular team events and activities'
    ]
  },
  {
    category: 'Financial Security',
    items: [
      'Competitive salary and equity',
      '401(k) matching',
      'Performance bonuses',
      'Stock options for all employees'
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="page-title">Join Our Mission</h1>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Help us build the future of human-centric AI automation. We're looking for passionate individuals who believe in putting humans first.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={value.title} className="glass p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-medium text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-primary/5 to-aubergine-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.category} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 text-white">{benefit.category}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="text-gray-medium text-sm flex items-start gap-2">
                      <span className="text-turquoise-light mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={position.title} className="glass p-8 rounded-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-medium">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 lg:mt-0">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-medium mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-medium text-sm flex items-start gap-2">
                          <span className="text-turquoise-light mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-medium text-sm flex items-start gap-2">
                          <span className="text-turquoise-light mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-16 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our vision. Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                Contact Us
              </a>
              <a href="mailto:careers@workflowx.com" className="btn-secondary w-full sm:w-auto">
                Send Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 