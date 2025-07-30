import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import AboutClientContent from '@/components/AboutClientContent';

export const metadata: Metadata = {
  title: 'About - WorkflowX',
  description: 'Learn about WorkflowX mission to democratize AI automation while ensuring humans remain at the center of every decision.',
};

const values = [
  {
    icon: 'Target',
    title: 'Our Mission',
    description: 'To democratize AI automation while ensuring humans remain at the center of every decision. We build tools that enhance human creativity and productivity.',
    gradient: 'from-blue-primary to-blue-light'
  },
  {
    icon: 'Eye',
    title: 'Our Vision',
    description: 'A world where intelligent automation empowers every professional to focus on what matters most - creativity, strategy, and human connection.',
    gradient: 'from-turquoise-primary to-turquoise-light'
  },
  {
    icon: 'Heart',
    title: 'Our Values',
    description: 'Human-first design, transparent AI operations, ethical automation practices, and continuous learning from our community.',
    gradient: 'from-aubergine-primary to-aubergine-light'
  }
];

const milestones = [
  {
    icon: 'Rocket',
    title: 'Our Story',
    description: 'Founded by a team of AI researchers and business leaders who experienced firsthand the need for human-centric automation solutions.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'Trophy',
    title: 'Our Achievements',
    description: 'Trusted by 50,000+ professionals worldwide, recognized as a leader in ethical AI, and committed to responsible innovation.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: 'Globe',
    title: 'Global Impact',
    description: 'Helping organizations across 50+ countries transform their workflows while maintaining human dignity and decision-making authority.',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former AI researcher at Stanford, passionate about human-centered technology.',
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer with 15+ years building scalable automation systems.',
    avatar: '👨‍💻'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of AI Ethics',
    bio: 'PhD in AI Safety, ensuring our automation respects human values.',
    avatar: '👩‍🔬'
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    bio: 'Product leader with experience at Slack and Notion, focused on user experience.',
    avatar: '👨‍💼'
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every customer achieves their automation goals.',
    avatar: '👩‍💼'
  },
  {
    name: 'Alex Johnson',
    role: 'VP of Engineering',
    bio: 'Building robust, scalable systems that power human productivity.',
    avatar: '👨‍💻'
  }
];

const stats = [
  { number: 50, suffix: 'k+', label: 'Active Users' },
  { number: 50, suffix: '+', label: 'Countries Served' },
  { number: 99.9, suffix: '%', label: 'Uptime' },
  { number: 24, suffix: '/7', label: 'Support' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-black">
      <BackgroundAnimation />
      <Navigation />
      <AboutClientContent values={values} milestones={milestones} team={team} stats={stats} />
      <Footer />
    </main>
  );
} 