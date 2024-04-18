/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},  // 640px - 1px
      'md': {'max': '767px'},  // 768px - 1px
      'lg': {'max': '1023px'}, // 1024px - 1px
      'xl': {'max': '1279px'}, // 1280px - 1px
      '2xl': {'max': '1535px'}
      
    },
  },
  plugins: [],
}

