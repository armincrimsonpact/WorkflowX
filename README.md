# WorkflowX Website

A modern, production-ready website for WorkflowX - Human in the Lead AI Automation platform. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful glassmorphism UI with animated backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 and Vercel
- **SEO Ready**: Built-in SEO optimization with metadata and sitemap
- **Contact Forms**: Working contact form with email integration
- **Animations**: Smooth animations powered by Framer Motion
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
workflowx-website/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── features/          # Features page
│   ├── solutions/         # Solutions page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── legal/             # Legal pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── vercel.json           # Vercel deployment config
└── README.md            # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/workflowx-website.git
   cd workflowx-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=hello@workflowx.com
   NEXT_PUBLIC_BASE_URL=https://workflowx.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and `app/globals.css`. Main colors:
- Primary Blue: `#3b82f6`
- Turquoise: `#06b6d4`
- Aubergine: `#7c3aed`
- Background: `#0a0a0a`

### Components
All reusable components are in the `components/` directory. Each component is self-contained with its own styles and logic.

### Pages
Pages are organized in the `app/` directory following Next.js 14 app router conventions.

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting provider**
   - Upload the `.next` folder
   - Set up environment variables
   - Configure your domain

## 📧 Contact Form Setup

The contact form requires email service configuration:

1. **Set up SMTP credentials** in environment variables
2. **Configure email templates** in `app/api/contact/route.ts`
3. **Test the form** to ensure emails are sent correctly

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server host | Yes |
| `SMTP_PORT` | SMTP server port | Yes |
| `SMTP_USER` | SMTP username | Yes |
| `SMTP_PASS` | SMTP password | Yes |
| `CONTACT_EMAIL` | Contact form recipient | Yes |
| `NEXT_PUBLIC_BASE_URL` | Website base URL | No |

### Tailwind Configuration

Custom colors and animations are defined in `tailwind.config.js`. You can modify:
- Color palette
- Animation keyframes
- Custom utilities

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- XML sitemap
- Structured data
- Optimized images

## 📊 Analytics

Vercel Analytics is integrated by default. You can add additional analytics providers in `app/layout.tsx`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help with this project:

1. Check the [documentation](https://workflowx.com/docs)
2. Search [existing issues](https://github.com/your-username/workflowx-website/issues)
3. Create a [new issue](https://github.com/your-username/workflowx-website/issues/new)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ by the WorkflowX Team 