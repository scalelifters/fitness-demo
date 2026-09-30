/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#C6F806',
          limeHover: '#b1de05',
          dark: '#060709',
          card: '#0D0F12',
          border: '#1F2429',
          muted: '#8E95A0',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        bounceDown: 'bounceDown 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
