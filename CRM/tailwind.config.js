// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-blue': '#0075FF',
          'secondary-blue': '#124C90',
        },
      },
    },
    plugins: [],
  }