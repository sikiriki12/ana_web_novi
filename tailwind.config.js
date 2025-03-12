/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Text colors
    'text-primary-900', 'text-primary-800', 'text-primary-700', 'text-primary-600', 'text-primary-500',
    'text-secondary-900', 'text-secondary-800', 'text-secondary-700', 'text-secondary-600', 'text-secondary-500',
    'text-white',
    
    // Background colors
    'bg-primary-900', 'bg-primary-800', 'bg-primary-700', 'bg-primary-600', 'bg-primary-500', 
    'bg-secondary-900', 'bg-secondary-800', 'bg-secondary-700', 'bg-secondary-600', 'bg-secondary-500',
    'bg-white', 'bg-offwhite', 'bg-cream',
    
    // Hover states
    'hover:bg-primary-700', 'hover:bg-primary-800', 'hover:bg-primary-900',
    'hover:bg-secondary-50', 'hover:bg-secondary-100', 'hover:bg-secondary-200',
    
    // Border colors
    'border-primary-900', 'border-primary-800', 'border-primary-700', 'border-primary-600', 'border-primary-500',
    'border-secondary-900', 'border-secondary-800', 'border-secondary-700', 'border-secondary-600', 'border-secondary-500', 
    'border-secondary-400', 'border-secondary-300', 'border-secondary-200', 'border-secondary-100',
    
    // Shadows
    'shadow-elegant', 'shadow-elegant-lg',
    
    // Animations
    'animate-float', 'animate-slide-up', 'animate-fade-in'
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#f8f9fa',
        cream: '#f5f0e8',
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#2563eb',
          700: '#1d4ed8', 
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0a0a0b',
        },
        accent: {
          50: '#f8f9fa',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#2d2d2d',
          600: '#383838',
          500: '#494949',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elegant-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
