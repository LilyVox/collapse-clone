/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // subtle brand accents
        emerald: {
          400: '#34d399',
          500: '#10b981'
        }
      }
    }
  },
  plugins: []
};
