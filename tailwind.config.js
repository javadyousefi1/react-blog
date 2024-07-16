/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },  
    extend: {
      colors: {
        "blue": "var(--color-blue)",
        "white": "var(--color-white)",
        "black": "var(--color-black)",
        "dark-gray": "var(--color-dark-gray)",
        "gray": "var(--color-gray)",
        "ligth-gray1": "var(--color-light-gray1)",
        "ligth-gray2": "var(--color-light-gray2)",
      },
      boxShadow: {
        'custom-shadow': '0 0 10px #e9dddded',
      },
    },
  },
  plugins: [],
}