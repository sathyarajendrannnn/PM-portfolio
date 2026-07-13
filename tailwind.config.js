/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark navy blue primary
        primary: {
          50:  '#eef4fb',
          100: '#d4e4f7',
          200: '#a9c9ef',
          300: '#7aade4',
          400: '#4a8fd6',
          500: '#2563a8',
          600: '#1e4f8a',
          700: '#183d6b',
          800: '#122d50',
          900: '#0c1f38',
          950: '#071425',
        },
        // Medium navy accent
        accent: {
          50:  '#edf5ff',
          100: '#dae9fd',
          200: '#b5d3fb',
          300: '#8bbbf7',
          400: '#5e9fef',
          500: '#3b82e0',
          600: '#2d6abf',
          700: '#21529a',
          800: '#183d75',
          900: '#102a52',
          950: '#091a35',
        },
        // Light steel blue for balance
        mid: {
          400: '#64a3d4',
          500: '#4688be',
          600: '#3570a0',
        },
        darkBg:  '#060e1a',
        darkCard: '#0c1829',
        lightBg: '#f5f8fc',
        lightCard: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(37,99,168,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 110%, rgba(59,130,224,0.12) 0%, transparent 60%)',
        'mesh-dark':  'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(37,99,168,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 110%, rgba(59,130,224,0.08) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow':        '0 0 40px rgba(37,99,168,0.25)',
        'glow-sm':     '0 0 20px rgba(37,99,168,0.15)',
        'glow-rose':   '0 0 40px rgba(59,130,224,0.2)',
        'premium':     '0 8px 32px rgba(0,0,0,0.08)',
        'premium-dark':'0 8px 32px rgba(0,0,0,0.4)',
        'card':        '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover':  '0 8px 40px rgba(0,0,0,0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%':     { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        tilt: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%':     { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        float:      'float 4s ease-in-out infinite',
        'spin-slow':'spin-slow 12s linear infinite',
        shimmer:    'shimmer 3s linear infinite',
        'fade-up':  'fade-up 0.6s ease-out forwards',
        blob:       'blob 7s infinite',
        tilt:       'tilt 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
