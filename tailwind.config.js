/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mark: '#FFD700',
        even: '#112233',
        odd: '#556677'
      }
    }
  },
  plugins: []
}
