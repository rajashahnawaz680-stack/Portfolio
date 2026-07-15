/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f8fafc",        /* Light Slate Background */
          secondary: "#f1f5f9",  /* Soft Slate Sections */
          card: "#ffffff",       /* Clean White Cards */
          border: "rgba(15, 23, 42, 0.08)", /* Slate Borders */
          accent: "#059669",     /* Deep Emerald Accent */
          teal: "#0891b2",       /* Darker Teal Accent */
          gold: "#d97706",       /* Premium Luxury Gold */
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'float-slow': 'floatSlow 6s infinite ease-in-out',
        'draw-chart': 'drawChart 4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(25px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawChart: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        }
      }
    },
  },
  plugins: [],
}
