/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair-display)', 'serif'],
      },
      colors: {
        primary: '#fbd214', // Your primary color from current site
        background: '#0a1c28', // Dark background
        surface: '#1a2a38', // Slightly lighter for cards
        accent: '#41848f', // From your current site
        text: '#f4f4f5', // Light text for dark background
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
        'slide-down': 'slideDown 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
} 