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
        charcoal: {
          950: '#05070b',
          900: '#07090e',
          850: '#0a0e16',
          800: '#0f1420',
          750: '#151c2d',
          700: '#1b2338',
          600: '#26314d',
        },
        cyber: {
          emerald: '#10b981',
          mint: '#34d399',
          cyan: '#0ea5e9',
          sky: '#38bdf8',
          amber: '#f59e0b',
          rose: '#ef4444',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
