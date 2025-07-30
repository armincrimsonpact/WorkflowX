/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#0a0a0a',
        'bg-dark': '#111111',
        'bg-section': '#0f0f0f',
        'blue-primary': '#3b82f6',
        'blue-light': '#60a5fa',
        'blue-dark': '#1e40af',
        'turquoise-primary': '#06b6d4',
        'turquoise-light': '#22d3ee',
        'turquoise-dark': '#0891b2',
        'aubergine-primary': '#7c3aed',
        'aubergine-light': '#a78bfa',
        'aubergine-dark': '#5b21b6',
        'gray-light': '#f8fafc',
        'gray-medium': '#64748b',
        'gray-dark': '#334155',
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}; 