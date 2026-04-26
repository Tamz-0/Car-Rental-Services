/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#080A0F',
          900: '#0D1117',
          800: '#161B22',
          700: '#1C2333',
          600: '#21262D',
          500: '#30363D',
          400: '#484F58',
        },
        platinum: {
          50: '#FAFAFA',
          100: '#F5F5F0',
          200: '#EBEBEB',
          300: '#D4D4CE',
          400: '#A8A89E',
          500: '#737368',
        },
        gold: {
          300: '#E8D5A3',
          400: '#D4B483',
          500: '#C09A5A',
          600: '#A07840',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-16px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        scaleIn: { '0%': { transform: 'scale(0.96)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
      },
      boxShadow: {
        'luxury': '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
        'luxury-hover': '0 2px 8px rgba(0,0,0,0.1), 0 20px 60px rgba(0,0,0,0.14)',
        'luxury-dark': '0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.6)',
        'luxury-dark-hover': '0 4px 16px rgba(0,0,0,0.5), 0 24px 64px rgba(0,0,0,0.7)',
        'glow-gold': '0 0 40px rgba(192, 154, 90, 0.15)',
      },
    },
  },
  plugins: [],
};
